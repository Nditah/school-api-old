import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import Message, { schemaCreate, schemaUpdated } from "./model";
import { success, fail, notFound, isObjecId, hasProp } from "../../../lib";
import { sendEmail } from "../../../services";
import { STATUS_MSG } from "../../../constants";
import Staff from "../staff/model";
import Student from "../student/model";
import Parent from "../parent/model";

// Logging
const logger = log4js.getLogger("[message]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/message.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

export async function fetchRecord(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await Message.find(filter)
            .populate("created_by", "id phone email surname given_name")
            .populate("staff", "id phone email surname given_name")
            .populate("student", "id phone email surname given_name")
            .populate("parent", "id phone email surname given_name")
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .select(projection)
            .exec();
        if (!result) {
            return notFound(res, "Error: Message Model not found");
        }
        logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
        return success(res, 201, result, null);
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error retrieving record. ${err.message}`);
    }
}

// eslint-disable-next-line complexity
export async function createRecord(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, schemaCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        let feedback = "";
        data.box = "INBOX";
        const newRecord = new Message(data);
        const { recipient, sender, subject, body } = data;
        // eslint-disable-next-line max-len
        const { staff: staffId, parent: partnerId, supplier_id: driverId, student: customerId } = data;
        let Recipient;
        let recipientId;
        switch (recipient.toUpperCase()) {
        case "STAFF": Recipient = Staff; recipientId = staffId; break;
        case "PARENT": Recipient = Parent; recipientId = partnerId; break;
        case "STUDENT": Recipient = Student; recipientId = customerId; break;
        // case "SUPPLIER": Recipient = Supplier; recipientId = supplierId; break;
        default: return fail(res, 422, `Error invalid user type: ${recipient}`);
        }
        const personR = await Recipient.findOne({ _id: recipientId }).select("email, phone").exec();
        if (!personR) {
            return notFound(res, `Bad Request: Model not found for recipient with id ${recipientId}`);
        }

        let Sender;
        switch (sender.toUpperCase()) {
        case "STAFF": Sender = Staff; break;
        case "PARENT": Sender = Parent; break;
        case "STUDENT": Sender = Student; break;
        // case "SUPPLIER": Recipient = Supplier; recipientId = supplierId; break;
        default: return fail(res, 422, `Error user type: ${sender}`);
        }
        const personS = await Sender.findOne({ _id: data.created_by }).select("email").exec();
        if (!personS) {
            return notFound(res, `Bad Request: Model not found for sender with id ${data.created_by}`);
        }

        let send1; let send2;
        if (hasProp(personS, "email") && hasProp(personR, "email")) {
            send1 = await sendEmail(personR.email, personS.email, subject, body);
            send2 = await sendEmail(personS.email, personS.email, subject, body);
        } else {
            feedback += "Sender email or Recipient email is incorrect";
        }
        // console.log(send);
        const result = await newRecord.save();
        if (!result) {
            logger.error(STATUS_MSG.ERROR.DEFAULT, send1, send2, []);
            return notFound(res, `Error: Bad Request: Model not found. ${feedback}`);
        }
        data.box = "OUTBOX";
        const newRecord2 = new Message(data);
        const result2 = await newRecord2.save();
        return success(res, 201, result2, `Record created successfully! ${feedback}`);
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updateRecord(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, schemaUpdated);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await Message.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Record updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

export async function deleteRecord(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await Message.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Record deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}
