import rp from "request-promise";
import { FLUTTERWAVE } from "../constants";

const secretKey = "FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X";

let FLW_URL = FLUTTERWAVE.TEST_URL;
if (process.env.NODE_ENV === "production") {
//  FLW_URL = FLUTTERWAVE.LIVE_URL;
// publicKey = process.env.FLUTTERWAVE_PUBLIC_KEY;
// secretKey = process.env.FLUTTERWAVE_SECRET_KEY;
// tnxHash = process.env.FLUTTERWAVE_HASH;
}

const headersObj = {
    Accept: "application/json",
    "Content-Type": "application/json",
    json: true,
};

export function verifyTransaction(txRef) {
    const payload = { SECKEY: secretKey, txref: txRef };
    const options = {
        method: "POST",
        uri: `${FLW_URL}${FLUTTERWAVE.VERIFY}`,
        body: payload,
        headers: headersObj,
        json: true, // Automatically stringifies the body to JSON
    };
    return rp(options).then(response => response) // const { status, message, data } = response;
        .catch((e) => {
            throw new Error(e.error);
        // const { name, statusCode, message, error, options, response } = e;
        });
}

export function getTransaction(payload = {}, timeline = false) {
    payload.seckey = secretKey;
    let url = `${FLW_URL}${FLUTTERWAVE.TRANSACTION}/query`;
    if (timeline) {
        url = `${FLW_URL}${FLUTTERWAVE.TRANSACTION_EVENTS}`;
    }
    const options = {
        method: "POST",
        uri: url,
        headers: headersObj,
        body: payload,
        json: true,
    };
    return rp(options).then(response => response).catch(err => err);
}

export function getSettlement(payload = {}) {
    payload.seckey = secretKey;
    const options = {
        method: "POST",
        uri: `${FLW_URL}${FLUTTERWAVE.SETTLEMENT}`,
        headers: headersObj,
        body: payload,
        json: true,
    };
    return rp(options).then(response => response).catch(err => err);
}

export function getSubaccount(id = "", page = 1) {
    let url = `${FLW_URL}${FLUTTERWAVE.SUBACCOUNT}?seckey=${secretKey}&page=${page}`;
    if (id) url = `${FLW_URL}${FLUTTERWAVE.SUBACCOUNT}/get/${id}?seckey=${secretKey}`;
    const options = {
        method: "GET",
        uri: url,
        headers: headersObj,
        json: true,
    };
    return rp(options).then(response => response).catch(err => err);
}

export function createSubaccount(payload) {
    payload.seckey = secretKey;
    const options = {
        method: "POST",
        uri: `${FLW_URL}${FLUTTERWAVE.SUBACCOUNT}/create`,
        body: payload,
        headers: headersObj,
        json: true,
    };
    console.log(options);
    return rp(options).then(response => response).catch(err => err);
}

export function updateSubaccount(payload) {
    payload.seckey = secretKey;
    const options = {
        method: "POST",
        uri: `${FLW_URL}${FLUTTERWAVE.SUBACCOUNT}/edit`,
        body: payload,
        headers: headersObj,
        json: true,
    };
    return rp(options).then(response => response).catch(err => err);
}

export function deleteSubaccount(id) {
    const payload = { id, seckey: secretKey };
    const options = {
        method: "POST",
        uri: `${FLW_URL}${FLUTTERWAVE.SUBACCOUNT}/delete`,
        body: payload,
        headers: headersObj,
        json: true,
    };
    return rp(options).then(response => response).catch(err => err);
}

export function getBVn(bvn) {
    const url = `${FLW_URL}${FLUTTERWAVE.BVN}/${bvn}?seckey=${secretKey}`;
    const options = {
        method: "GET",
        uri: url,
        headers: headersObj,
        json: true,
    };
    return rp(options).then(response => response).catch(err => err);
}
