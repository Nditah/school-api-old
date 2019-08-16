const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");
const { EMAIL } = require("../constants");

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
