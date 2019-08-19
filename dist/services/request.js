"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.localRequest = localRequest;
exports.foreignRequest = foreignRequest;

var _requestPromise = require("request-promise");

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _lib = require("../lib");

var _authorization = require("../middleware/authorization");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 5000;
var apiUrl = "http://0.0.0.0:" + port + "/api";
if (process.env.NODE_ENV === "production") {
    apiUrl = process.env.API_URL || "https://peacegroup-api.herokuapp.com/api";
}

function localRequest(req, httpMethod, data) {
    var token = (0, _authorization.getToken)(req);
    var headersObj = {
        Accept: "application/json",
        "Content-Type": "application/json",
        json: true
    };
    var payload = (0, _lib.cleanObject)(data);
    var options = {
        method: httpMethod,
        uri: apiUrl,
        body: payload,
        headers: headersObj,
        auth: { bearer: token }, // { 'user': 'myusername', 'pass': 'mypassword' },
        json: true // Automatically stringifies the body to JSON
    };
    return (0, _requestPromise2.default)(options).then(function (response) {
        return response;
    }).catch(function (err) {
        return err;
    });
}

function foreignRequest(req, httpMethod, httpUrl, data) {
    var token = (0, _authorization.getToken)(req);
    var headersObj = {
        Accept: "application/json",
        "Content-Type": "application/json",
        json: true
    };
    var payload = (0, _lib.cleanObject)(data);
    var options = {
        method: httpMethod,
        uri: httpUrl,
        body: payload,
        headers: headersObj,
        auth: { bearer: token }, // { 'user': 'myusername', 'pass': 'mypassword' },
        json: true // Automatically stringifies the body to JSON
    };
    return (0, _requestPromise2.default)(options).then(function (response) {
        return response;
    }).catch(function (err) {
        return err;
    });
}
//# sourceMappingURL=request.js.map