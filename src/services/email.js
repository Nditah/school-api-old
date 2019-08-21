const dotenv = require("dotenv");
const { EMAIL } = require("../constants");

dotenv.config();

const emailApi = process.env.EMAIL_API;
const sgMail = null;

function sendEmail(recipient, sender, subject, body) {
    const text = "";
    const msg = { to: recipient, from: sender, subject, text, html: body };
    sgMail.send(msg);
}

function emailFromContactus(email, heading, message, fullname, phone, requestType) {
    const recipient = EMAIL.CONTACT;
    const sender = email;
    const subject = `${requestType}: ${heading}`;
    const body = `${fullname}: ${phone} <br/> ${message}`;

    sendEmail(recipient, sender, subject, body);
}

export { sendEmail, emailFromContactus };
