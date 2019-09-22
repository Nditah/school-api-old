import rp from "request-promise";

const dotenv = require("dotenv");
const { SMS } = require("../constants");

dotenv.config();

// Todo call from settings
const smsCode = process.env.SMS_API;
// const smsEmail = process.env.SMS_EMAIL;
// const smsPassword = process.env.SMS_PASSWORD;

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

function sendSms(recipient, message) {
    const data = {
        from: formatPhone(sender),
        body: message,
        to: formatPhone(recipient),
    };
    client.messages.create(data)
        .then(result => console.log(result.sid));
}

async function sendSmsAsync(recipient, message) {
    const headersObj = {
        Accept: "application/json",
        "Content-Type": "application/json",
        json: true,
    };
    const options = {
        method: "GET",
        uri: `https://sms-app-backend.herokuapp.com/api/v1/sms/externally?code=${smsCode}&recipient=${recipient}&message=${message}`,
        headers: headersObj,
        json: true,
    };
    return rp(options).then(response => response).catch(err => err);
}

export { sendSms, sendSmsAsync };
