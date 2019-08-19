"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.toObjectId = toObjectId;
exports.pmtName = pmtName;
exports.timestamp = timestamp;
exports.dateDaysAgo = dateDaysAgo;
exports.randomNum = randomNum;
exports.cloneObject = cloneObject;
exports.getObjectByKey = getObjectByKey;
exports.getSettings = getSettings;
exports.default = addToArrayOfObjects;
exports.getClientAccess = getClientAccess;
exports.hasProp = hasProp;
exports.isObjecId = isObjecId;
exports.generateOtp = generateOtp;
exports.hash = hash;
exports.cleanDeepObject = cleanDeepObject;
exports.cleanObject = cleanObject;
exports.nextDate = nextDate;
exports.genCode = genCode;
exports.hasNull = hasNull;
exports.stringToArrayPhone = stringToArrayPhone;

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function toObjectId() {
    var baseId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "5951bc91860d8b5ba";
    var mysqlId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var oldId = mysqlId.toString(10);
    var a = "0".repeat(7 - oldId.length);
    return baseId + a + oldId;
}

function pmtName(mysqlId) {
    if (mysqlId) {
        var oldId = mysqlId.toString(10);
        var a = "0".repeat(4 - oldId.length);
        return a + oldId;
    }
    return mysqlId;
}

function timestamp() {
    return new Date().toISOString().slice(0, 22) + "Z";
    //   return new Date().toISOString().slice(0, 19).replace("T", " ")+"Z";
}

function dateDaysAgo() {
    var since = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var today = new Date();
    today.setDate(today.getDate() - since);
    return today.toISOString();
}

function randomNum() {
    return Math.floor(Math.random() * 1000000);
}

function cloneObject() {
    var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var source = arguments[1];

    return Object.assign(model, source);
}

/**
 * @description getObjectByKey returns the object from an Array of
 * Objects that has the key with a given value or undefined!
 * @param {Array} arrayObject Array of Objects
 * @param {String} key Object key could be a String or Integer
 * @param {String} value Object value could be a String or Integer
 */
function getObjectByKey(arrayObject, key, value) {
    return arrayObject.find(function (obj) {
        return obj[key] === value;
    });
}

function getSettings() {
    var arrObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{}];
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    var Obj = arrObj.find(function (item) {
        return item.name === value;
    });
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
function addToArrayOfObjects(arrayOfObjects, limit, newObjectElement) {
    var size = Object.keys(arrayOfObjects).length;
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
function getClientAccess(req) {
    var ipAddress = req.ip || req._remoteAddress;
    // const lang = req.get("accept-language");
    var accessDate = req._startTime || "";
    return { accessDate: accessDate, ipAddress: ipAddress };
}

function hasProp(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

function isObjecId(id) {
    if (id.match(/^[0-9a-fA-F]{24}$/)) return true;
    return false;
}

/**
 * @returns a five-digit random number
 */
function generateOtp() {
    var num = Math.floor(Math.random() * 90000) + 10000;
    return num;
}

function hash() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    return _bcryptjs2.default.hashSync(str, _constants.JWT.saltRounds);
}

function cleanDeepObject(obj) {
    // eslint-disable-next-line no-restricted-syntax
    for (var propName in obj) {
        if (!obj[propName] || obj[propName].length === 0) {
            delete obj[propName];
        } else if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
            cleanDeepObject(obj[propName]);
        }
    }
    return obj;
}

var depth = 0;

// eslint-disable-next-line complexity
function cleanObject(obj) {
    depth += 1;
    // eslint-disable-next-line no-restricted-syntax
    for (var propName in obj) {
        if (!obj[propName] || obj[propName].length === 0) {
            delete obj[propName];
        } else if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
            if (depth <= 3) cleanObject(obj[propName]);
        }
    }
    return obj;
}

function nextDate() {
    var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    return new Date(new Date().setDate(new Date().getDate() + d));
}

function genString(length) {
    var text = "";
    // "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var possible = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    // eslint-disable-next-line no-plusplus
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function daysIntoYear() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

    // eslint-disable-next-line max-len
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}

function genCode() {
    var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9;

    var d = new Date().getFullYear().toString().substr(-2);
    d += daysIntoYear();
    if (len - d.length > 0) return d + genString(len - d.length);
    return genString(len);
}

function hasNull() {
    var Obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var val = Object.values(Obj);
    if (val.includes(null) || val.includes(undefined) || val.includes("")) return true;
    return false;
}

function stringToArrayPhone(str) {
    var arr = str.split(",").map(function (st) {
        return st.trim();
    }) || []; // remove spaces
    var filtered = arr.filter(function (value, index) {
        return value.length >= 11 && value.length < 15;
    });
    return [].concat(_toConsumableArray(new Set(filtered))); // Remove duplicates
}
//# sourceMappingURL=helpers.js.map