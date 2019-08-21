import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import Sms, { schemaCreate } from "./model";
import { success, fail, notFound, generateOtp, hash, stringToArrayPhone } from "../../../lib";
import { receiveSms, sendSmsAsync } from "../../../services";
import Staff from "../staff/model";
import Student from "../student/model";

// Logging
const logger = log4js.getLogger("[sms]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/sms.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

export async function fetchRecord(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await Sms.find(filter)
            .populate("created_by", "id phone email type surname given_name")
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .select(projection)
            .exec();
        if (!result) {
            return notFound(res, "Error: Bad Request: Model not found");
        }
        logger.info("Operation was successful", []);
        return success(res, 201, result, null);
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error retrieving record. ${err.message}`);
    }
}

// eslint-disable-next-line complexity
export async function createOtp(req, res) {
    const { user_type: userType, phone } = req.body;
    if (!(userType && phone)) fail(res, 422, "Error invalid user_type or phone");

    try {
        const otp = generateOtp().toString();
        let Model;
        switch (userType) {
        case "STAFF": Model = Staff; break;
        case "STUDENT": Model = Student; break;
        default: return fail(res, 422, `Invalid user_type ${userType}`);
        }

        const otpHash = hash(otp);
        const query = { phone };
        const update = { otp: otpHash, otp_access: true, $inc: { otp_count: 1 } };
        const user = await Model.findOneAndUpdate(query, update, { new: true });
        console.log("User =>", user);
        if (user == null) {
            return notFound(res, `User not found with phone number, ${phone}`);
        }
        const send = await sendSmsAsync(phone, `Use your phone number and this OTP ${otp} 
        to login as a one-time password`);
        const { sid } = send;
        if (!sid) return fail(res, 422, "Error sending message");
        const record = { recipient: phone, message: otp, sid, direction: "OUTBOUND" };
        const newRecord = new Sms(record);
        const result1 = await newRecord.save();
        console.log(result1);
        return success(res, 201, send.to, "Operation was successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

// eslint-disable-next-line complexity
export async function createRecord(req, res) {
    const data = req.body;
    data.direction = "OUTBOUND";
    const { error } = Joi.validate(data, schemaCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    // eslint-disable-next-line max-len
    const { recipient: recipientArray } = data;
    try {
        const user = await Staff.findOne({ _id: data.created_by }).exec();
        const sentSms = await Sms.count({ created_by: data.created_by });
        const myArray = stringToArrayPhone(recipientArray) || [];
        const sendingSms = myArray.length;
        const totalSms = sentSms + sendingSms;
        if (totalSms > user.sms_units) {
            return fail(res, 422, `Error! You have ${user.sms_units} units left. You cannot send ${sendingSms}`);
            // console.log(`You have ${user.sms_units}Units left. You cannot send ${sendingSms}`);
        }
        const resolvedFinalArray = await Promise.all(myArray.map(async (phone) => {
            const send = await sendSmsAsync(phone, data.message);
            data.sid = send.sid;
            data.recipient = phone;
            const newRecord = new Sms(data);
            const result = await newRecord.save();
            return result; // important to return the value
        }));

        const data2 = { sms_units: (user.sms_units - sendingSms) };
        const result2 = await Staff.findOneAndUpdate({ _id: data.created_by },
            data2, { new: true });
        console.log(result2.sms_units);
        return success(res, 201, resolvedFinalArray, "Record created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function createWebhook(req, res) {
    const data = req.body;
    receiveSms(req, res);
    logger.info("Operation was successful", data);
}
