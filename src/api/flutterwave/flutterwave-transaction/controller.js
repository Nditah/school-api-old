import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import FlutterwaveTransaction, { schemaCreate, schemaUpdate } from "./model";
import { success, fail, notFound, isObjecId, cleanObject } from "../../../lib";
import { STATUS_MSG } from "../../../constants";
import { getBVn, getTransaction, getSettlement, verifyTransaction } from "../../../services/flutterwave";

// Logging
const logger = log4js.getLogger("[flutterwave-transaction]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/flutterwave-transaction.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});
export async function fetchRecord(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await FlutterwaveTransaction.find(filter)
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .select(projection)
            .exec();
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


// fetch online transaction records
// eslint-disable-next-line complexity
export async function queryOnlineTnx(req, res) {
    const page = req.query.page || 0; // 1
    const limit = req.query.limit || 100;
    const id = req.query.id || "";
    const from = req.query.from || "2019-01-01";
    const to = req.query.to || "2019-12-31";
    const currency = req.query.currency || "NGN";
    const status = req.query.status || "successful";
    let result;
    try {
        if (id) {
            result = await getTransaction({ id }, true);
        } else {
            result = await getTransaction({ from, to, currency, status }, false);
        }
        if (result.status === "success") {
            return success(res, 201, result.data, result.message);
        }
        console.log(result);
        return notFound(res, result.message);
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error query Transactions from Flutterwave. ${err.message}`);
    }
}

// eslint-disable-next-line complexity
export async function fetchSettlement(req, res) {
    const page = req.query.page || 0; // 1
    const limit = req.query.limit || 100;
    const status = req.query.status || "completed";
    try {
        const result = await getSettlement({ page, limit, status });
        if (result.status === "success") {
            return success(res, 201, result.data, result.message);
        }
        console.log(result);
        return notFound(res, result.message);
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error fetching Settlement. ${err.message}`);
    }
}

// eslint-disable-next-line complexity
export async function createRecord(req, res) {
    // Verify Hash
    const requestHash = req.headers[ "verif-hash" ];
    if (!requestHash) {
        logger.error({ message: "Bad request! No hash found" });
        // return fail(res, 422, "Error: Bad Request: hash not found");
    }

    const flutterwaveHash = process.env.FLUTTERWAVE_HASH;
    if (requestHash !== flutterwaveHash) {
        logger.error(`Error invalid transaction signature. ${requestHash}`, []);
        // return fail(res, 422, `Error invalid transaction signature. ${requestHash}`);
    }

    const data = req.body; // JSON.parse(req.body);
    data.flwId = data.id;
    delete data.id;
    data.flwCreatedAt = data.createdAt;
    delete data.createdAt;
    const cleanData = cleanObject(data);

    // const { error } = Joi.validate(cleanData, schemaCreate);
    // if (error) return fail(res, 422, `Error validating request data. ${error.message}`);

    // Give value to your customer but don't give any output
    // Remember that this is a call from rave's servers and
    // Your customer is not seeing the response here at all
    // return success(res, 200, result, "Transaction was successful!");
    // Update Invoice if it exist or create an invoice with status of "success"

    const newRecord = new FlutterwaveTransaction(data);
    try {
        const result = await newRecord.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            // return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "Record created successfully!");
    } catch (err) {
        logger.error(err);
        // return fail(res, 500, `Error creating record. ${err.message}`);
    }
    return success(res, 200, [], "Transaction was successful!");
}

export async function verifyBvn(req, res) {
    const { bvn } = req.params;
    try {
        const result = await getBVn(bvn);
        if (result.status === "success") {
            return success(res, 201, result.data, result.message);
        }
        console.log(Object.keys(result));
        return notFound(res, result.message);
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error fetching BVN. ${err.message}`);
    }
}

export async function verifyOnlineTnx(req, res) {
    const { txref } = req.params;
    try {
        const result = await verifyTransaction(txref);
        if (result.status === "success") {
            return success(res, 201, result.data, result.message);
        }
        console.log(result);
        return notFound(res, result.message);
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error fetching BVN. ${err.message}`);
    }
}
