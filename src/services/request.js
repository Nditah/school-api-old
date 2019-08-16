import rp from "request-promise";
import { cleanObject } from "../lib";
import { getToken } from "../middleware/authorization";

const port = process.env.PORT || 5000;
let apiUrl = `http://0.0.0.0:${port}/api`;
if (process.env.NODE_ENV === "production") {
    apiUrl = process.env.API_URL || "https://peacegroup-api.herokuapp.com/api";
}

export function localRequest(req, httpMethod, data) {
    const token = getToken(req);
    const headersObj = {
        Accept: "application/json",
        "Content-Type": "application/json",
        json: true,
    };
    const payload = cleanObject(data);
    const options = {
        method: httpMethod,
        uri: apiUrl,
        body: payload,
        headers: headersObj,
        auth: { bearer: token }, // { 'user': 'myusername', 'pass': 'mypassword' },
        json: true, // Automatically stringifies the body to JSON
    };
    return rp(options).then(response => response).catch(err => err);
}

export function foreignRequest(req, httpMethod, httpUrl, data) {
    const token = getToken(req);
    const headersObj = {
        Accept: "application/json",
        "Content-Type": "application/json",
        json: true,
    };
    const payload = cleanObject(data);
    const options = {
        method: httpMethod,
        uri: httpUrl,
        body: payload,
        headers: headersObj,
        auth: { bearer: token }, // { 'user': 'myusername', 'pass': 'mypassword' },
        json: true, // Automatically stringifies the body to JSON
    };
    return rp(options).then(response => response).catch(err => err);
}
