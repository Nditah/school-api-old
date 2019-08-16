import rp from "request-promise";
import { success, fail } from "../../../lib";

const transUrl = "https://api.paystack.co/transaction"; // list
// const verifyUrl = "/verify/reference";
// Fetch https://api.paystack.co/transaction/id
// Transaction Totals https://api.paystack.co/transaction/totals
// Export Transactions: https://api.paystack.co/transaction/export
// Check Authorization: https://api.paystack.co/transaction/check_authorization

const headersObj = {
    Accept: "application/json",
    "Content-Type": "application/json",
    json: true,
};

const publicKey = process.env.PAYSTACK_TEST_PUBLIC_KEY;
const secretKey = process.env.PAYSTACK_TEST_SECRET_KEY;
/*
if (process.env.NODE_ENV === "production") {
    publicKey = process.env.PAYSTACK_LIVE_PUBLIC_KEY;
    secretKey = process.env.PAYSTACK_LIVE_SECRET_KEY;
// tnxHash = process.env.FLUTTERWAVE_HASH;
}
*/

export async function checkAuthorization(req, res) {
    const payload = req.body;
    const options = {
        method: "POST",
        uri: `${transUrl}/check_authorization`,
        body: payload,
        headers: headersObj,
        auth: { bearer: secretKey },
        json: true, // Automatically stringifies the body to JSON
    };
    return rp(options).then((body) => {
        if (body.status) return success(res, 200, body.data, body.message);
        return fail(res, 200, body.message);
    }).catch((error) => {
        fail(res, 500, `Error checking Auth. ${error.message}`);
    });
}

export async function getTransaction(req, res) {
    const { id } = req.params;
    const options = {
        method: "GET",
        uri: `${transUrl}/${id}`,
        headers: headersObj,
        auth: { bearer: secretKey },
        json: true,
    };
    return rp(options).then((body) => {
        if (body.status) return success(res, 200, body.data, body.message);
        return fail(res, 200, body.message);
    }).catch((error) => {
        fail(res, 500, `Error getting Tnx. ${error.message}`);
    });
}

export async function timelineTransaction(req, res) {
    const { id } = req.params;
    const options = {
        method: "GET",
        uri: `${transUrl}/timeline/${id}`,
        auth: { bearer: secretKey },
        headers: headersObj,
        json: true, // Automatically stringifies the body to JSON
    };
    return rp(options).then((body) => {
        if (body.status) return success(res, 200, body.data, body.message);
        return fail(res, 200, body.message);
    }).catch((error) => {
        fail(res, 500, `Error getting timeline. ${error.message}`);
    });
}

// eslint-disable-next-line complexity
export async function listTransaction(req, res) {
    const { perPage, page, customer, status, from, to, amount } = req.body;
    const payload = {};
    if (perPage) payload.perPage = perPage;
    if (page) payload.page = page;
    if (customer) payload.customer = customer;
    if (status) payload.status = status;
    if (from) payload.from = from;
    if (to) payload.to = to;
    if (amount) payload.amount = amount;

    console.log("query options", payload);
    const options = {
        method: "GET",
        uri: `${transUrl}`,
        body: payload,
        headers: headersObj,
        auth: { bearer: secretKey },
        json: true, // Automatically stringifies the body to JSON
    };
    return rp(options).then((body) => {
        if (body.status) return success(res, 200, body.data, body.message);
        return fail(res, 200, body.message);
    }).catch((error) => {
        fail(res, 500, `Error listing Tnx. ${error.message}`);
    });
}

export async function verifyTransaction(req, res) {
    const { reference } = req.params;
    const options = {
        method: "GET",
        uri: `${transUrl}/verify/${reference}`,
        headers: headersObj,
        auth: { bearer: secretKey },
        json: true, // Automatically stringifies the body to JSON
    };
    return rp(options).then((body) => {
        if (body.status) return success(res, 200, body.data, body.message);
        return fail(res, 200, body.message);
    }).catch((error) => {
        fail(res, 500, `Error list Tnx. ${error.message}`);
    });
}

export async function verifyPaystack(reference) {
    const options = {
        method: "GET",
        uri: `${transUrl}/verify/${reference}`,
        headers: headersObj,
        auth: { bearer: secretKey },
        json: true, // Automatically stringifies the body to JSON
    };
    return rp(options).then(body => body).catch(error => error);
}

export async function totalTransaction(req, res) {
    const { from, to } = req.params;
    const options = {
        method: "GET",
        uri: `${transUrl}/totals`,
        body: { from, to },
        headers: headersObj,
        auth: { bearer: secretKey },
        json: true, // Automatically stringifies the body to JSON
    };
    return rp(options).then((body) => {
        if (body.status) return success(res, 200, body.data, body.message);
        return fail(res, 200, body.message);
    }).catch((error) => {
        fail(res, 500, `Error getting total Tnx. ${error.message}`);
    });
}
