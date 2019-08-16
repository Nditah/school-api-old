"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyTransaction = verifyTransaction;
exports.getTransaction = getTransaction;
exports.getSettlement = getSettlement;
exports.getSubaccount = getSubaccount;
exports.createSubaccount = createSubaccount;
exports.updateSubaccount = updateSubaccount;
exports.deleteSubaccount = deleteSubaccount;
exports.getBVn = getBVn;

var _requestPromise = require("request-promise");

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secretKey = "FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X";

var FLW_URL = _constants.FLUTTERWAVE.TEST_URL;
if (process.env.NODE_ENV === "production") {
    //  FLW_URL = FLUTTERWAVE.LIVE_URL;
    // publicKey = process.env.FLUTTERWAVE_PUBLIC_KEY;
    // secretKey = process.env.FLUTTERWAVE_SECRET_KEY;
    // tnxHash = process.env.FLUTTERWAVE_HASH;
}

var headersObj = {
    Accept: "application/json",
    "Content-Type": "application/json",
    json: true
};

function verifyTransaction(txRef) {
    var payload = { SECKEY: secretKey, txref: txRef };
    var options = {
        method: "POST",
        uri: "" + FLW_URL + _constants.FLUTTERWAVE.VERIFY,
        body: payload,
        headers: headersObj,
        json: true // Automatically stringifies the body to JSON
    };
    return (0, _requestPromise2.default)(options).then(function (response) {
        return response;
    }) // const { status, message, data } = response;
    .catch(function (e) {
        throw new Error(e.error);
        // const { name, statusCode, message, error, options, response } = e;
    });
}

function getTransaction() {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var timeline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    payload.seckey = secretKey;
    var url = "" + FLW_URL + _constants.FLUTTERWAVE.TRANSACTION + "/query";
    if (timeline) {
        url = "" + FLW_URL + _constants.FLUTTERWAVE.TRANSACTION_EVENTS;
    }
    var options = {
        method: "POST",
        uri: url,
        headers: headersObj,
        body: payload,
        json: true
    };
    return (0, _requestPromise2.default)(options).then(function (response) {
        return response;
    }).catch(function (err) {
        return err;
    });
}

function getSettlement() {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    payload.seckey = secretKey;
    var options = {
        method: "POST",
        uri: "" + FLW_URL + _constants.FLUTTERWAVE.SETTLEMENT,
        headers: headersObj,
        body: payload,
        json: true
    };
    return (0, _requestPromise2.default)(options).then(function (response) {
        return response;
    }).catch(function (err) {
        return err;
    });
}

function getSubaccount() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var url = "" + FLW_URL + _constants.FLUTTERWAVE.SUBACCOUNT + "?seckey=" + secretKey + "&page=" + page;
    if (id) url = "" + FLW_URL + _constants.FLUTTERWAVE.SUBACCOUNT + "/get/" + id + "?seckey=" + secretKey;
    var options = {
        method: "GET",
        uri: url,
        headers: headersObj,
        json: true
    };
    return (0, _requestPromise2.default)(options).then(function (response) {
        return response;
    }).catch(function (err) {
        return err;
    });
}

function createSubaccount(payload) {
    payload.seckey = secretKey;
    var options = {
        method: "POST",
        uri: "" + FLW_URL + _constants.FLUTTERWAVE.SUBACCOUNT + "/create",
        body: payload,
        headers: headersObj,
        json: true
    };
    console.log(options);
    return (0, _requestPromise2.default)(options).then(function (response) {
        return response;
    }).catch(function (err) {
        return err;
    });
}

function updateSubaccount(payload) {
    payload.seckey = secretKey;
    var options = {
        method: "POST",
        uri: "" + FLW_URL + _constants.FLUTTERWAVE.SUBACCOUNT + "/edit",
        body: payload,
        headers: headersObj,
        json: true
    };
    return (0, _requestPromise2.default)(options).then(function (response) {
        return response;
    }).catch(function (err) {
        return err;
    });
}

function deleteSubaccount(id) {
    var payload = { id: id, seckey: secretKey };
    var options = {
        method: "POST",
        uri: "" + FLW_URL + _constants.FLUTTERWAVE.SUBACCOUNT + "/delete",
        body: payload,
        headers: headersObj,
        json: true
    };
    return (0, _requestPromise2.default)(options).then(function (response) {
        return response;
    }).catch(function (err) {
        return err;
    });
}

function getBVn(bvn) {
    var url = "" + FLW_URL + _constants.FLUTTERWAVE.BVN + "/" + bvn + "?seckey=" + secretKey;
    var options = {
        method: "GET",
        uri: url,
        headers: headersObj,
        json: true
    };
    return (0, _requestPromise2.default)(options).then(function (response) {
        return response;
    }).catch(function (err) {
        return err;
    });
}
//# sourceMappingURL=flutterwave.js.map