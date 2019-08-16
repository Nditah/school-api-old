const twilio = require("twilio");
const dotenv = require("dotenv");
const { SMS } = require("../constants");

//  * https://www.twilio.com/docs/sms/api/message-resource#read-multiple-message-resources

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// eslint-disable-next-line new-cap
const client = new twilio(accountSid, authToken);
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
    const data = {
        from: formatPhone(sender),
        body: message,
        to: formatPhone(recipient),
    };
    const result = await client.messages.create(data);
    return result;
}

/**
 * Twilio Webhook for receiving sms
 * Receive message via this webhook set at the twilio user settings
 */
async function receiveSms(req, res) {
    const twiml = new twilio.TwimlResponse();
    twiml.message("Twilio incoming message:");
    const message = twiml.toString();
    res.send(message);
}

// Read Multiple SMS Records
function readMultipleSms() {
    client.messages.each(messages => console.log(messages.sid));
}

export { sendSms, sendSmsAsync, receiveSms, readMultipleSms };
