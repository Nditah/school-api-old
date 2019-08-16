import bcryptjs from "bcryptjs";
import { JWT } from "../constants";

export function toObjectId(baseId = "5951bc91860d8b5ba", mysqlId = 1) {
    const oldId = mysqlId.toString(10);
    const a = "0".repeat(7 - oldId.length);
    return baseId + a + oldId;
}

export function pmtName(mysqlId) {
    if (mysqlId) {
        const oldId = mysqlId.toString(10);
        const a = "0".repeat(4 - oldId.length);
        return a + oldId;
    }
    return mysqlId;
}

export function timestamp() {
    return `${new Date().toISOString().slice(0, 22)}Z`;
    //   return new Date().toISOString().slice(0, 19).replace("T", " ")+"Z";
}

export function dateDaysAgo(since = 0) {
    const today = new Date();
    today.setDate(today.getDate() - since);
    return today.toISOString();
}

export function randomNum() {
    return Math.floor(Math.random() * 1000000);
}

export function cloneObject(model = {}, source) {
    return Object.assign(model, source);
}

/**
 * @description getObjectByKey returns the object from an Array of
 * Objects that has the key with a given value or undefined!
 * @param {Array} arrayObject Array of Objects
 * @param {String} key Object key could be a String or Integer
 * @param {String} value Object value could be a String or Integer
 */
export function getObjectByKey(arrayObject, key, value) {
    return arrayObject.find(obj => obj[ key ] === value);
}

export function getSettings(arrObj = [{}], value = "") {
    const Obj = arrObj.find(item => item.name === value);
    if (Obj) {
        return Obj.value;
    }
    return 0;
}

/**
 * @description addToArrayOfObjects add a new object item to an array of objects
 * @param {Object} arrayOfObjects the array of object
 * @param {Number} limit maximum number of objects the array should not exceed
 * @param {Object} newObjectElement the new item to be added to the array of objects
 * @returns {Object} the new array of Objects
 */
export default function addToArrayOfObjects(arrayOfObjects, limit, newObjectElement) {
    const size = Object.keys(arrayOfObjects).length;
    if (size < limit) {
        arrayOfObjects.push(newObjectElement);
    } else {
    // arr.splice(indexToRemove, numToRemove)
        arrayOfObjects.splice(0, 1);
        arrayOfObjects.push(newObjectElement);
    }
    return arrayOfObjects;
}

/**
 * @description getClientAccess get the Ip Address and TimeSTamp of a request object.
 * @param {String} req the request object
 * @returns {Object} { accessDate, ipAddress } access date and the ip address
 */
export function getClientAccess(req) {
    const ipAddress = req.ip || req._remoteAddress;
    // const lang = req.get("accept-language");
    const accessDate = req._startTime || "";
    return { accessDate, ipAddress };
}

export function hasProp(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

export function isObjecId(id) {
    if (id.match(/^[0-9a-fA-F]{24}$/)) return true;
    return false;
}

/**
 * @returns a five-digit random number
 */
export function generateOtp() {
    const num = Math.floor(Math.random() * 90000) + 10000;
    return num;
}

export function hash(str = "") {
    return bcryptjs.hashSync(str, JWT.saltRounds);
}

export function cleanDeepObject(obj) {
    // eslint-disable-next-line no-restricted-syntax
    for (const propName in obj) {
        if (!obj[ propName ] || obj[ propName ].length === 0) {
            delete obj[ propName ];
        } else if (typeof obj === "object") {
            cleanDeepObject(obj[ propName ]);
        }
    }
    return obj;
}

let depth = 0;

// eslint-disable-next-line complexity
export function cleanObject(obj) {
    depth += 1;
    // eslint-disable-next-line no-restricted-syntax
    for (const propName in obj) {
        if (!obj[ propName ] || obj[ propName ].length === 0) {
            delete obj[ propName ];
        } else if (typeof obj === "object") {
            if (depth <= 3) cleanObject(obj[ propName ]);
        }
    }
    return obj;
}

export function nextDate(d = 1) {
    return new Date(new Date().setDate(new Date().getDate() + d));
}

function genString(length) {
    let text = "";
    // "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const possible = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function daysIntoYear(date = new Date()) {
    // eslint-disable-next-line max-len
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}

export function genCode(len = 9) {
    let d = new Date().getFullYear().toString().substr(-2);
    d += daysIntoYear();
    if (len - d.length > 0) return d + genString(len - d.length);
    return genString(len);
}

export function hasNull(Obj = {}) {
    const val = Object.values(Obj);
    if (val.includes(null) || val.includes(undefined) || val.includes("")) return true;
    return false;
}

export function stringToArrayPhone(str) {
    const arr = str.split(",").map(st => st.trim()) || []; // remove spaces
    const filtered = arr.filter((value, index) => (value.length >= 11 && value.length < 15));
    return [...new Set(filtered)]; // Remove duplicates
}
