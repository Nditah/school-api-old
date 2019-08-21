"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.studentAuthenticate = exports.parentAuthenticate = exports.staffAuthenticate = undefined;

// eslint-disable-next-line complexity
var staffAuthenticate = exports.staffAuthenticate = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(loginPayload) {
        var email, phone, otp, password, user, token, filter, query, update, payload;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        // return next();
                        email = loginPayload.email, phone = loginPayload.phone, otp = loginPayload.otp, password = loginPayload.password;
                        user = void 0;
                        token = void 0;
                        _context.prev = 3;
                        filter = {};

                        if (phone) {
                            filter.phone = phone;
                        } else {
                            filter.email = email;
                        }
                        _context.next = 8;
                        return _model2.default.findOne(filter).populate("office_id").populate("role").populate("bank_name").populate("classe").populate("subject").populate("bank_name").populate("state").populate("county").exec();

                    case 8:
                        user = _context.sent;

                        if (user) {
                            _context.next = 11;
                            break;
                        }

                        throw new Error("User not found.");

                    case 11:
                        if (!(otp && phone)) {
                            _context.next = 14;
                            break;
                        }

                        if (user.otp_access) {
                            _context.next = 14;
                            break;
                        }

                        throw new Error("Authentication failed. OTP Access is " + user.otp_access);

                    case 14:
                        if (_bcryptjs2.default.compareSync(password || "", user.password) || _bcryptjs2.default.compareSync(otp || "", user.otp) && user.otp_access) {
                            _context.next = 16;
                            break;
                        }

                        throw new Error("Wrong password or otp credentials.");

                    case 16:
                        query = { _id: user._id };
                        update = { otp_access: false };
                        _context.next = 20;
                        return _model2.default.findOneAndUpdate(query, update, { new: true }).exec();

                    case 20:

                        // Delete private attributes
                        user.password = null;
                        user.otp = null;
                        delete user.password;
                        delete user.otp;
                        payload = {
                            id: user.id,
                            userType: "staff",
                            email: email,
                            phone: phone,
                            time: new Date()
                        };


                        token = _jsonwebtoken2.default.sign(payload, _constants.JWT.jwtSecret, {
                            expiresIn: "240h" // JWT.tokenExpireTime,
                        });
                        _context.next = 31;
                        break;

                    case 28:
                        _context.prev = 28;
                        _context.t0 = _context["catch"](3);
                        throw new Error("Authentication failed " + _context.t0.message);

                    case 31:
                        return _context.abrupt("return", { token: token, user: user });

                    case 32:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, null, [[3, 28]]);
    }));

    return function staffAuthenticate(_x) {
        return _ref.apply(this, arguments);
    };
}();

var parentAuthenticate = exports.parentAuthenticate = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(loginPayload) {
        var email, phone, otp, password, user, token, filter, query, update, payload;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        // return next();
                        email = loginPayload.email, phone = loginPayload.phone, otp = loginPayload.otp, password = loginPayload.password;
                        user = void 0;
                        token = void 0;
                        _context2.prev = 3;
                        filter = {};

                        if (phone) {
                            filter.phone = phone;
                        } else {
                            filter.email = email;
                        }
                        _context2.next = 8;
                        return _model4.default.findOne(filter).populate("students_name").populate("state").populate("county").populate("staff").exec();

                    case 8:
                        user = _context2.sent;

                        if (user) {
                            _context2.next = 11;
                            break;
                        }

                        throw new Error("User not found.");

                    case 11:
                        if (!(otp && phone)) {
                            _context2.next = 14;
                            break;
                        }

                        if (user.otp_access) {
                            _context2.next = 14;
                            break;
                        }

                        throw new Error("Authentication failed. OTP Access is " + user.otp_access);

                    case 14:
                        if (_bcryptjs2.default.compareSync(password || "", user.password) || _bcryptjs2.default.compareSync(otp || "", user.otp) && user.otp_access) {
                            _context2.next = 16;
                            break;
                        }

                        throw new Error("Wrong password or otp credentials.");

                    case 16:
                        query = { _id: user._id };
                        update = { otp_access: false };
                        _context2.next = 20;
                        return _model4.default.findOneAndUpdate(query, update, { new: true }).exec();

                    case 20:

                        // Delete private attributes
                        user.password = null;
                        user.otp = null;
                        delete user.password;
                        delete user.otp;
                        payload = {
                            id: user.id,
                            userType: "parent",
                            email: email,
                            phone: phone,
                            time: new Date()
                        };


                        token = _jsonwebtoken2.default.sign(payload, _constants.JWT.jwtSecret, {
                            expiresIn: "240h" // JWT.tokenExpireTime,
                        });
                        _context2.next = 31;
                        break;

                    case 28:
                        _context2.prev = 28;
                        _context2.t0 = _context2["catch"](3);
                        throw new Error("Authentication failed " + _context2.t0.message);

                    case 31:
                        return _context2.abrupt("return", { token: token, user: user });

                    case 32:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, null, [[3, 28]]);
    }));

    return function parentAuthenticate(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var studentAuthenticate = exports.studentAuthenticate = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(loginPayload) {
        var email, phone, otp, password, user, token, filter, query, update, payload;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        // return next();
                        email = loginPayload.email, phone = loginPayload.phone, otp = loginPayload.otp, password = loginPayload.password;
                        user = void 0;
                        token = void 0;
                        _context3.prev = 3;
                        filter = {};

                        if (phone) {
                            filter.phone = phone;
                        } else {
                            filter.email = email;
                        }
                        _context3.next = 8;
                        return _model6.default.findOne(filter).populate("classe").populate("hostel").populate("state").populate("county").exec();

                    case 8:
                        user = _context3.sent;

                        if (user) {
                            _context3.next = 11;
                            break;
                        }

                        throw new Error("User not found.");

                    case 11:
                        if (!(otp && phone)) {
                            _context3.next = 14;
                            break;
                        }

                        if (user.otp_access) {
                            _context3.next = 14;
                            break;
                        }

                        throw new Error("Authentication failed. OTP Access is " + user.otp_access);

                    case 14:
                        if (_bcryptjs2.default.compareSync(password || "", user.password) || _bcryptjs2.default.compareSync(otp || "", user.otp) && user.otp_access) {
                            _context3.next = 16;
                            break;
                        }

                        throw new Error("Wrong password or otp credentials.");

                    case 16:
                        query = { _id: user._id };
                        update = { otp_access: false };
                        _context3.next = 20;
                        return _model6.default.findOneAndUpdate(query, update, { new: true }).exec();

                    case 20:

                        // Delete private attributes
                        user.password = null;
                        user.otp = null;
                        delete user.password;
                        delete user.otp;
                        payload = {
                            id: user.id,
                            userType: "student",
                            email: email,
                            phone: phone,
                            time: new Date()
                        };


                        token = _jsonwebtoken2.default.sign(payload, _constants.JWT.jwtSecret, {
                            expiresIn: "240h" // JWT.tokenExpireTime,
                        });
                        _context3.next = 31;
                        break;

                    case 28:
                        _context3.prev = 28;
                        _context3.t0 = _context3["catch"](3);
                        throw new Error("Authentication failed " + _context3.t0.message);

                    case 31:
                        return _context3.abrupt("return", { token: token, user: user });

                    case 32:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, null, [[3, 28]]);
    }));

    return function studentAuthenticate(_x3) {
        return _ref3.apply(this, arguments);
    };
}();

exports.staffAuthenticate2Old = staffAuthenticate2Old;

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _model = require("../api/general/staff/model");

var _model2 = _interopRequireDefault(_model);

var _constants = require("../constants");

var _model3 = require("../api/general/parent/model");

var _model4 = _interopRequireDefault(_model3);

var _model5 = require("../api/general/student/model");

var _model6 = _interopRequireDefault(_model5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function staffAuthenticate2Old(loginPayload) {
    // return next();
    var email = loginPayload.email,
        phone = loginPayload.phone,
        otp = loginPayload.otp,
        password = loginPayload.password;

    return _model2.default.findOne({ $or: [{ email: email }, { phone: phone }] })
    // eslint-disable-next-line complexity
    .then(function (user) {
        if (!user) {
            throw new Error("Authentication failed. User not found.");
        }
        if (otp && phone) {
            if (!user.otp_access) {
                throw new Error("Authentication failed. OTP Access is " + user.otp_access);
            }
        }
        if (!(_bcryptjs2.default.compareSync(password || "", user.password) || _bcryptjs2.default.compareSync(otp || "", user.otp))) {
            throw new Error("Authentication failed. Wrong password or otp.");
        }

        var query = { _id: user._id };
        var update = { otp_access: false };
        _model2.default.findOneAndUpdate(query, update, { new: true }).exec();
        // Delete private attributes
        delete user.password;
        delete user.otp;
        var payload = {
            id: user.id,
            userType: "staff",
            // terminal_id: user.terminal_id,
            role: user.role,
            // vehicle_id: user.vehicle_id,
            email: email,
            phone: phone,
            time: new Date()
        };

        var token = _jsonwebtoken2.default.sign(payload, _constants.JWT.jwtSecret, {
            expiresIn: "240h" // JWT.tokenExpireTime,
        });
        return { token: token, user: user };
    });
}
//# sourceMappingURL=authenticate.js.map