import rp from "request-promise";

const dotenv = require("dotenv");
const { SMS } = require("../constants");

dotenv.config();

// Todo call from settings
const smsCode = process.env.SMS_API || "acd99e2c5d2c34ab65269a11ae97da2e";
// const smsEmail = process.env.SMS_EMAIL || "peacegroup@gmail.com";
// const smsPassword = process.env.SMS_PASSWORD || "peace@01#";
const SMS_URL = "https://sms-app-backend.herokuapp.com/api/v1/sms";
// const SMS_URL = "http://localhost:8000/api/v1/sms";

const client = null;
// eslint-disable-next-line new-cap
const sender = SMS.PEACE_SMS_SENDER;

function formatPhone(phone) {
    let str = phone.toString();
    str = str.trim();
    if (str.length === 11 && str[ 0 ] === "0") {
        str = `+234${str.slice(1)}`;
    }
    if (str.length === 10) {
        str = `+234${str}`;
    }
    return str;
}

async function sendSmsAsyncGet(recipient, message) {
    const headersObj = {
        Accept: "application/json",
        "Content-Type": "application/json",
        json: true,
    };
    const options = {
        method: "GET",
        uri: `${SMS_URL}?code=${smsCode}&recipient=${recipient}&message=${message}`,
        headers: headersObj,
        json: true,
    };
    return rp(options).then(response => response).catch(err => err);
}

async function sendSmsAsync(recipient, message) {
    const headersObj = {
        Accept: "application/json",
        "Content-Type": "application/json",
        json: true,
    };
    const options = {
        method: "POST",
        uri: `${SMS_URL}?code=${smsCode}`,
        headers: headersObj,
        body: { recipient, message },
        json: true,
    };
    return rp(options).then(response => response).catch(err => err.error);
}

export { sendSmsAsync, sendSmsAsyncGet };
