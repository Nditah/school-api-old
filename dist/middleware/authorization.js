"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getToken = getToken;
exports.checkAuth = checkAuth;
exports.isValidStaff = isValidStaff;
exports.isValidPartner = isValidPartner;
exports.isValidDriver = isValidDriver;
exports.isValidCustomer = isValidCustomer;
exports.isValidPmlTerminalClerk = isValidPmlTerminalClerk;
exports.isValidPmtTerminalClerk = isValidPmtTerminalClerk;
exports.isValidPmlTerminalSupervisor = isValidPmlTerminalSupervisor;
exports.isValidPmtTerminalSupervisor = isValidPmtTerminalSupervisor;
exports.isValidPmtTerminalAccountant = isValidPmtTerminalAccountant;
exports.isValidPmlTerminalAccountant = isValidPmlTerminalAccountant;
exports.isValidPmlDispatchRider = isValidPmlDispatchRider;
exports.isValidPmtTerminalLoader = isValidPmtTerminalLoader;
exports.isValidTerminalSecurity = isValidTerminalSecurity;

var _jsonwebtoken = require("jsonwebtoken");

var _constants = require("../constants");

var _response = require("../lib/response");

var _helpers = require("../lib/helpers");

// Retrieve token from request header
function getToken(req) {
    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
        return req.headers.authorization.split(" ")[1];
    }if (req.query && (0, _helpers.hasProp)(req.query, "token")) {
        return req.query.token;
    }
    return null;
}

function checkAuth(req, res, next) {
    var token = getToken(req);
    if (!token) return (0, _response.fail)(res, 403, "No token found in request header!");
    return (0, _jsonwebtoken.verify)(token, _constants.JWT.jwtSecret, function (err, decoded) {
        if (err) return (0, _response.fail)(res, 403, "Failed to authenticate token.!");
        req.user = {
            userType: decoded.userType,
            id: decoded.id,
            email: decoded.email,
            terminal: decoded.terminal,
            vehicle: decoded.vehicle,
            role: decoded.role,
            phone: decoded.phone
        };
        if (req.method === "POST") {
            req.body.created_by = req.user.id;
        } else if (req.method === "PUT") {
            req.body.updated_by = req.user.id;
        }
        return next();
    });
}

function isValidStaff(req, res, next) {
    var _req$user = req.user,
        userType = _req$user.userType,
        id = _req$user.id,
        email = _req$user.email,
        terminal = _req$user.terminal,
        phone = _req$user.phone,
        role = _req$user.role;

    if (userType !== "staff") return (0, _response.fail)(res, 403, "Invalid Staff credentials!");
    console.log("\nValidating userType " + userType + ", id " + id + ", email " + email + ", \n    Terminal " + terminal + ", phone " + phone + ", role " + role);
    return next();
}

function isValidPartner(req, res, next) {
    var _req$user2 = req.user,
        userType = _req$user2.userType,
        id = _req$user2.id,
        email = _req$user2.email;

    if (userType !== "partner") return (0, _response.fail)(res, 403, "Invalid Partner credentials!");
    console.log("\nValidating userType " + userType + ", id " + id + ", email " + email);
    return next();
}

function isValidDriver(req, res, next) {
    var _req$user3 = req.user,
        userType = _req$user3.userType,
        id = _req$user3.id,
        email = _req$user3.email,
        vehicle = _req$user3.vehicle;

    if (userType !== "driver") return (0, _response.fail)(res, 403, "Invalid Partner credentials!");
    console.log("\nValidating userType " + userType + ", id " + id + ", email " + email + " vehicle " + vehicle);
    return next();
}

function isValidCustomer(req, res, next) {
    var _req$user4 = req.user,
        userType = _req$user4.userType,
        id = _req$user4.id,
        email = _req$user4.email,
        phone = _req$user4.phone;

    if (userType !== "customer") return (0, _response.fail)(res, 403, "Invalid Customer credentials!");
    console.log("\nValidating userType " + userType + ", id " + id + ", email " + email + " phone " + phone);
    return next();
}

function isValidRole() {
    var officeArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var roleCode = arguments[1];

    var result = officeArray.find(function (office) {
        return office.code === roleCode;
    });
    return result != null;
}

//* =============== TERMINAL ROLES ===================== //

function isValidPmlTerminalClerk(req, res, next) {
    var role = req.user.role;

    if (!isValidRole(role, "PML_TERMINAL_CLERK")) {
        return (0, _response.fail)(res, 403, "Invalid user-role. Required: PML_TERMINAL_CLERK");
    }
    return next();
}

function isValidPmtTerminalClerk(req, res, next) {
    var role = req.user.role;

    if (!isValidRole(role, "PMT_TERMINAL_CLERK")) {
        return (0, _response.fail)(res, 403, "Invalid user-role. Required: PMT_TERMINAL_CLERK");
    }
    return next();
}

function isValidPmlTerminalSupervisor(req, res, next) {
    var role = req.user.role;

    if (!isValidRole(role, "PML_TERMINAL_SUPERVISOR")) {
        return (0, _response.fail)(res, 403, "Invalid user-role. Required: PML_TERMINAL_SUPERVISOR");
    }
    return next();
}

function isValidPmtTerminalSupervisor(req, res, next) {
    var role = req.user.role;

    if (!isValidRole(role, "PMT_TERMINAL_SUPERVISOR")) {
        return (0, _response.fail)(res, 403, "Invalid user-role. Required: PMT_TERMINAL_SUPERVISOR");
    }
    return next();
}

function isValidPmtTerminalAccountant(req, res, next) {
    var role = req.user.role;

    if (!isValidRole(role, "PMT_TERMINAL_ACCOUNTANT")) {
        return (0, _response.fail)(res, 403, "Invalid user-role. Required: PMT_TERMINAL_ACCOUNTANT");
    }
    return next();
}

function isValidPmlTerminalAccountant(req, res, next) {
    var role = req.user.role;

    if (!isValidRole(role, "PML_TERMINAL_ACCOUNTANT")) {
        return (0, _response.fail)(res, 403, "Invalid user-role. Required: PML_TERMINAL_ACCOUNTANT");
    }
    return next();
}

function isValidPmlDispatchRider(req, res, next) {
    var role = req.user.role;

    if (!isValidRole(role, "PML_DISPATCH_RIDER")) {
        return (0, _response.fail)(res, 403, "Invalid user-role. Required: PML_DISPATCH_RIDER");
    }
    return next();
}

function isValidPmtTerminalLoader(req, res, next) {
    var role = req.user.role;

    if (!isValidRole(role, "PMT_TERMINAL_LOADER")) {
        return (0, _response.fail)(res, 403, "Invalid user-role. Required: PMT_TERMINAL_LOADER");
    }
    return next();
}

function isValidTerminalSecurity(req, res, next) {
    var role = req.user.role;

    if (!isValidRole(role, "TERMINAL_SECURITY")) {
        return (0, _response.fail)(res, 403, "Invalid user-role. Required: TERMINAL_SECURITY");
    }
    return next();
}
//# sourceMappingURL=authorization.js.map