"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.totalTransaction = exports.verifyPaystack = exports.verifyTransaction = exports.listTransaction = exports.timelineTransaction = exports.getTransaction = exports.checkAuthorization = undefined;

/*
if (process.env.NODE_ENV === "production") {
    publicKey = process.env.PAYSTACK_LIVE_PUBLIC_KEY;
    secretKey = process.env.PAYSTACK_LIVE_SECRET_KEY;
// tnxHash = process.env.FLUTTERWAVE_HASH;
}
*/

var checkAuthorization = exports.checkAuthorization = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var payload, options;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        payload = req.body;
                        options = {
                            method: "POST",
                            uri: transUrl + "/check_authorization",
                            body: payload,
                            headers: headersObj,
                            auth: { bearer: secretKey },
                            json: true // Automatically stringifies the body to JSON
                        };
                        return _context.abrupt("return", (0, _requestPromise2.default)(options).then(function (body) {
                            if (body.status) return (0, _lib.success)(res, 200, body.data, body.message);
                            return (0, _lib.fail)(res, 200, body.message);
                        }).catch(function (error) {
                            (0, _lib.fail)(res, 500, "Error checking Auth. " + error.message);
                        }));

                    case 3:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee);
    }));

    return function checkAuthorization(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var getTransaction = exports.getTransaction = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var id, options;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        id = req.params.id;
                        options = {
                            method: "GET",
                            uri: transUrl + "/" + id,
                            headers: headersObj,
                            auth: { bearer: secretKey },
                            json: true
                        };
                        return _context2.abrupt("return", (0, _requestPromise2.default)(options).then(function (body) {
                            if (body.status) return (0, _lib.success)(res, 200, body.data, body.message);
                            return (0, _lib.fail)(res, 200, body.message);
                        }).catch(function (error) {
                            (0, _lib.fail)(res, 500, "Error getting Tnx. " + error.message);
                        }));

                    case 3:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2);
    }));

    return function getTransaction(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var timelineTransaction = exports.timelineTransaction = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var id, options;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        id = req.params.id;
                        options = {
                            method: "GET",
                            uri: transUrl + "/timeline/" + id,
                            auth: { bearer: secretKey },
                            headers: headersObj,
                            json: true // Automatically stringifies the body to JSON
                        };
                        return _context3.abrupt("return", (0, _requestPromise2.default)(options).then(function (body) {
                            if (body.status) return (0, _lib.success)(res, 200, body.data, body.message);
                            return (0, _lib.fail)(res, 200, body.message);
                        }).catch(function (error) {
                            (0, _lib.fail)(res, 500, "Error getting timeline. " + error.message);
                        }));

                    case 3:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3);
    }));

    return function timelineTransaction(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

// eslint-disable-next-line complexity


var listTransaction = exports.listTransaction = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var _req$body, perPage, page, customer, status, from, to, amount, payload, options;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _req$body = req.body, perPage = _req$body.perPage, page = _req$body.page, customer = _req$body.customer, status = _req$body.status, from = _req$body.from, to = _req$body.to, amount = _req$body.amount;
                        payload = {};

                        if (perPage) payload.perPage = perPage;
                        if (page) payload.page = page;
                        if (customer) payload.customer = customer;
                        if (status) payload.status = status;
                        if (from) payload.from = from;
                        if (to) payload.to = to;
                        if (amount) payload.amount = amount;

                        console.log("query options", payload);
                        options = {
                            method: "GET",
                            uri: "" + transUrl,
                            body: payload,
                            headers: headersObj,
                            auth: { bearer: secretKey },
                            json: true // Automatically stringifies the body to JSON
                        };
                        return _context4.abrupt("return", (0, _requestPromise2.default)(options).then(function (body) {
                            if (body.status) return (0, _lib.success)(res, 200, body.data, body.message);
                            return (0, _lib.fail)(res, 200, body.message);
                        }).catch(function (error) {
                            (0, _lib.fail)(res, 500, "Error listing Tnx. " + error.message);
                        }));

                    case 12:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4);
    }));

    return function listTransaction(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

var verifyTransaction = exports.verifyTransaction = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var reference, options;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        reference = req.params.reference;
                        options = {
                            method: "GET",
                            uri: transUrl + "/verify/" + reference,
                            headers: headersObj,
                            auth: { bearer: secretKey },
                            json: true // Automatically stringifies the body to JSON
                        };
                        return _context5.abrupt("return", (0, _requestPromise2.default)(options).then(function (body) {
                            if (body.status) return (0, _lib.success)(res, 200, body.data, body.message);
                            return (0, _lib.fail)(res, 200, body.message);
                        }).catch(function (error) {
                            (0, _lib.fail)(res, 500, "Error list Tnx. " + error.message);
                        }));

                    case 3:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5);
    }));

    return function verifyTransaction(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var verifyPaystack = exports.verifyPaystack = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(reference) {
        var options;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        options = {
                            method: "GET",
                            uri: transUrl + "/verify/" + reference,
                            headers: headersObj,
                            auth: { bearer: secretKey },
                            json: true // Automatically stringifies the body to JSON
                        };
                        return _context6.abrupt("return", (0, _requestPromise2.default)(options).then(function (body) {
                            return body;
                        }).catch(function (error) {
                            return error;
                        }));

                    case 2:
                    case "end":
                        return _context6.stop();
                }
            }
        }, _callee6);
    }));

    return function verifyPaystack(_x11) {
        return _ref6.apply(this, arguments);
    };
}();

var totalTransaction = exports.totalTransaction = function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
        var _req$params, from, to, options;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _req$params = req.params, from = _req$params.from, to = _req$params.to;
                        options = {
                            method: "GET",
                            uri: transUrl + "/totals",
                            body: { from: from, to: to },
                            headers: headersObj,
                            auth: { bearer: secretKey },
                            json: true // Automatically stringifies the body to JSON
                        };
                        return _context7.abrupt("return", (0, _requestPromise2.default)(options).then(function (body) {
                            if (body.status) return (0, _lib.success)(res, 200, body.data, body.message);
                            return (0, _lib.fail)(res, 200, body.message);
                        }).catch(function (error) {
                            (0, _lib.fail)(res, 500, "Error getting total Tnx. " + error.message);
                        }));

                    case 3:
                    case "end":
                        return _context7.stop();
                }
            }
        }, _callee7);
    }));

    return function totalTransaction(_x12, _x13) {
        return _ref7.apply(this, arguments);
    };
}();

var _requestPromise = require("request-promise");

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _lib = require("../../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var transUrl = "https://api.paystack.co/transaction"; // list
// const verifyUrl = "/verify/reference";
// Fetch https://api.paystack.co/transaction/id
// Transaction Totals https://api.paystack.co/transaction/totals
// Export Transactions: https://api.paystack.co/transaction/export
// Check Authorization: https://api.paystack.co/transaction/check_authorization

var headersObj = {
    Accept: "application/json",
    "Content-Type": "application/json",
    json: true
};

var publicKey = process.env.PAYSTACK_TEST_PUBLIC_KEY;
var secretKey = process.env.PAYSTACK_TEST_SECRET_KEY;
//# sourceMappingURL=controller.js.map