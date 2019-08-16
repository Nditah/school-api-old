import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import UnionbankTransaction, { schemaCreate } from "./model";
import { success, fail, notFound } from "../../../lib";
import { STATUS_MSG } from "../../../constants";

// Logging
const logger = log4js.getLogger("[unionbank-transaction]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/unionbank-transaction.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

export async function fetchRecord(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await UnionbankTransaction.find(filter)
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .select(projection)
            .exec();
        if (!result) {
            logger.error("Error: Bad Request: Model not found", result);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
        return success(res, 200, result, null);
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error retrieving record. ${err.message}`);
    }
}

// eslint-disable-next-line complexity
export async function createRecord(req, res) {
    // Verify Hash
    const requestHash = req.headers.api_key || req.query.api_key;
    if (!requestHash) {
        logger.error({ message: "Bad request! No hash found" });
        return fail(res, 422, "Error: Bad Request: hash not found");
    }

    const unionbankHash = process.env.UNIONBANK_HASH;
    if (requestHash !== unionbankHash) {
        logger.error(`Error invalid transaction signature. ${requestHash}`, []);
        return fail(res, 422, `Error invalid transaction signature. ${requestHash}`);
    }

    const data = req.body;
    const { error } = Joi.validate(data, schemaCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const newRecord = new UnionbankTransaction(data);
    try {
        const result = await newRecord.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "Record created successfully!");
    } catch (err) {
        logger.error(err);
    }
    return fail(res, 500, `Error creating record. ${data}`);
}
