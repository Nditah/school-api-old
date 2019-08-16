"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var dotenv = require("dotenv");
var sgMail = require("@sendgrid/mail");

var _require = require("../constants"),
    EMAIL = _require.EMAIL;

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendEmail(recipient, sender, subject, body) {
    var text = "";
    var msg = { to: recipient, from: sender, subject: subject, text: text, html: body };
    sgMail.send(msg);
}

function emailFromContactus(email, heading, message, fullname, phone, requestType) {
    var recipient = EMAIL.CONTACT;
    var sender = email;
    var subject = requestType + ": " + heading;
    var body = fullname + ": " + phone + " <br/> " + message;

    sendEmail(recipient, sender, subject, body);
}

exports.sendEmail = sendEmail;
exports.emailFromContactus = emailFromContactus;
//# sourceMappingURL=email.js.map