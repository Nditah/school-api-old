/* eslint-disable global-require */
/* eslint-disable complexity */
import log4js from "log4js";
import path from "path";
import rp from "request-promise";
import csv from "fast-csv";
import mongoose from "mongoose";

import { AccountClass, AccountHeading } from "../accounting/model";
import Table from "../table/model";
import Staff from "../staff/model";
import Office from "../office/model";
import Report from "../report/model";
import Vehicle from "../vehicle/model";
import Budget from "../budget/model";
import County from "../county/model";
import State from "../state/model";
import Setting from "../setting/model";
import Bank from "../bank/model";
import DocumentType from "../document-type/model";
import { OffenceType } from "../offence/model";
import BankAccount from "../bank-account/model";
import Material from "../material/model";
import Category from "../category/model";
import { success, fail, notFound } from "../../../lib";
import { STATUS_MSG } from "../../../constants";
import { getToken } from "../../../middleware/authorization";

// Logging
const logger = log4js.getLogger("[setup]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/setup.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

let host;
if (process.env.NODE_ENV === "development") {
    host = process.env.SERVER_DEV;
} else {
    host = process.env.SERVER_PROD;
}

const setupUrls = [
    // `${host}/api/setups/preload/{subsidiary}/{folder}/{collection}`,
    `${host}/api/setups/preload/general/accounting/account_heading`,
    `${host}/api/setups/preload/general/accounting/account_class`,
    `${host}/api/setups/preload/general/staff/staff`,
    `${host}/api/setups/preload/general/office/office`,
    `${host}/api/setups/preload/general/vehicle/vehicle`,
    `${host}/api/setups/preload/general/county/county`,
    `${host}/api/setups/preload/general/state/state`,
    `${host}/api/setups/preload/general/table/table`,
    `${host}/api/setups/preload/general/setting/setting`,
    `${host}/api/setups/preload/general/bank/bank`,
    `${host}/api/setups/preload/general/bank-account/bank_account`,
    `${host}/api/setups/preload/general/document-type/document_type`,
    `${host}/api/setups/preload/general/offence/offence_type`,
    `${host}/api/setups/preload/general/stage/stage`,
];

export async function setupSystem(req, res) {
    const accessToken = getToken(req);
    let results;
    console.log("\nThis is token \n\n\n", accessToken);

    const options = {
        uri: setupUrls[ 0 ],
        method: "GET",
        auth: { bearer: accessToken },
        headers: { "User-Agent": "Request-Promise" },
        json: true,
    };
    try {
        // results = await rp(options);
        results = await Promise.all(setupUrls.map((setupUrl) => {
            options.uri = setupUrl;
            return rp(options);
        }));
    } catch (err) {
        console.log(err.message);
        return fail(res, 401, `Error settingup system ${err.message}`);
    }
    return success(res, 201, results, "System Setup complete!");
}

export async function setCollection(req, res) {
    const { subsidiary, folder, collection } = req.params;
    let Model;

    const tablePath = path.join(__dirname, `../../${subsidiary}/${folder}/table`);

    // eslint-disable-next-line import/no-dynamic-require
    const table = require(`${tablePath}`).default;
    console.log(table);
    try {
        // eslint-disable-next-line default-case
        switch (collection) {
        case "account_class": Model = AccountClass; break;
        case "account_heading": Model = AccountHeading; break;
        case "bank": Model = Bank; break;
        case "bank_account": Model = BankAccount; break;
        case "budget": Model = Budget; break;
        case "category": Model = Category; break;
        case "county": Model = County; break;
        case "table": Model = Table; break;
        case "vehicle": Model = Vehicle; break;
        case "state": Model = State; break;
        case "setting": Model = Setting; break;
        case "staff": Model = Staff; break;
        case "office": Model = Office; break;
        case "report": Model = Report; break;
        case "document_type": Model = DocumentType; break;
        case "offence_type": Model = OffenceType; break;
        case "material": Model = Material; break;
        default: return fail(res, 401, `Error invalid collection: ${collection}`);
        }
        const result = await Model.insertMany(table);
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

export async function downloadCsv(req, res) {
    const { collection } = req.params;
    let Model;
    try {
        // eslint-disable-next-line default-case
        switch (collection) {
        case "account_class": Model = AccountClass; break;
        case "account_heading": Model = AccountHeading; break;
        case "bank": Model = Bank; break;
        case "bank_account": Model = BankAccount; break;
        case "budget": Model = Budget; break;
        case "category": Model = Category; break;
        case "county": Model = County; break;
        case "table": Model = Table; break;
        case "vehicle": Model = Vehicle; break;
        case "state": Model = State; break;
        case "setting": Model = Setting; break;
        case "staff": Model = Staff; break;
        case "office": Model = Office; break;
        case "report": Model = Report; break;
        case "document_type": Model = DocumentType; break;
        case "offence_type": Model = OffenceType; break;
        case "material": Model = Material; break;
        default: return fail(res, 401, `Error invalid collection: ${collection}`);
        }
        res.writeHead(200, {
            "Content-Type": "text/csv",
            "Content-Disposition": `attachment; filename=${collection}.csv`,
        });
        // pipe file using mongoose-csv
        return await Model.find().sort({ _id: 1 }).limit(100).csv(res);
        // return res.status(200).send(result);
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function uploadCsv(req, res) {
    console.log("uploadCsv");
    const { collection } = req.params;
    let Model;
    try {
        // eslint-disable-next-line default-case
        switch (collection) {
        case "account_class": Model = AccountClass; break;
        case "account_heading": Model = AccountHeading; break;
        case "bank": Model = Bank; break;
        case "bank_account": Model = BankAccount; break;
        case "budget": Model = Budget; break;
        case "category": Model = Category; break;
        case "county": Model = County; break;
        case "table": Model = Table; break;
        case "vehicle": Model = Vehicle; break;
        case "state": Model = State; break;
        case "setting": Model = Setting; break;
        case "staff": Model = Staff; break;
        case "office": Model = Office; break;
        case "report": Model = Report; break;
        case "document_type": Model = DocumentType; break;
        case "offence_type": Model = OffenceType; break;
        case "material": Model = Material; break;
        default: return fail(res, 401, `Error invalid collection: ${collection}`);
        }
        if (Object.keys(req.files).length === 0) {
            return res.status(400).send("No files were uploaded.");
        }
        const csvFile = req.files.file;
        const csvString = csvFile.data.toString();
        const records = [];
        return csv.fromString(csvString, { headers: true, ignoreEmpty: true })
            .on("data", (data) => {
                data._id = new mongoose.Types.ObjectId();
                records.push(data);
            })
            .on("end", () => Model.create(records)
                .then(newRecord => success(res, 201, records, `${newRecord.length} ${collection} record(s) created successfully!`))
                .catch(err => fail(res, 422, `${err.message}`)));
    } catch (error) {
        logger.error(error);
        return fail(res, 500, `Error creating record. ${error.message}`);
    }
}
