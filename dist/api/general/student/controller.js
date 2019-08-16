import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import Customer, { schemaCreate, schemaUpdate, schemaLogin } from "./model";
import { success, fail, notFound, isObjecId, hash, hasProp } from "../../../lib";
import { STATUS_MSG } from "../../../constants";
import { customerAuthenticate } from "../../../services/authenticate";

// Logging
const logger = log4js.getLogger("[customer]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/customer.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } }
});

export async function fetchRecord(req, res) {
    const { query } = req;
    try {
        const { filter, skip, limit, sort, projection } = aqp(query);
        const searchString = filter.q || "";
        if (searchString) {
            filter.$text = { $search: searchString };
            delete filter.q;
        }
        console.log(filter);
        const result = await Customer.find(filter).populate("cart_id").populate("sales_order_ids").populate("blog_comment_ids").populate("ratings").populate("state_id").populate("county_id").skip(skip).limit(limit).sort(sort).select(projection).exec();
        if (!result) {
            return notFound(res, "Error: Bad Request: Model not found");
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
    if (hasProp(data, "password")) data.password = hash(req.body.password);
    const { error } = Joi.validate(data, schemaCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const { email, phone } = data;
    const duplicate = await Customer.findOne({ $or: [{ email }, { phone }] }).exec();
    if (duplicate) {
        return fail(res, 422, `Error! Record already exist for ${email} or ${phone}`);
    }
    const newRecord = new Customer(data);
    try {
        const result = await newRecord.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "Record created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updateRecord(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    if (hasProp(data, "password")) data.password = hash(req.body.password);
    const { error } = Joi.validate(data, schemaUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await Customer.findOneAndUpdate({ _id: id }, data, { new: true });
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
        const result = await Customer.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 204, result, "Record deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}

export async function login(req, res) {
    const { error } = Joi.validate(req.body, schemaLogin);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    return customerAuthenticate(req.body).then(({ token, user }) => success(res, 201, { token, user }, "Login was successful!")).catch(err => fail(res, 422, err.message));
}
//# sourceMappingURL=controller.js.map