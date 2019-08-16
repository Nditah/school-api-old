import { verify } from "jsonwebtoken";
import { JWT } from "../constants";
import { fail } from "../lib/response";
import { hasProp } from "../lib/helpers";

// Retrieve token from request header
export function getToken(req) {
    if (req.headers.authorization && req.headers.authorization.split(" ")[ 0 ] === "Bearer") {
        return req.headers.authorization.split(" ")[ 1 ];
    } if (req.query && hasProp(req.query, "token")) {
        return req.query.token;
    }
    return null;
}

export function checkAuth(req, res, next) {
    const token = getToken(req);
    if (!token) return fail(res, 403, "No token found in request header!");
    return verify(token, JWT.jwtSecret, (err, decoded) => {
        if (err) return fail(res, 403, "Failed to authenticate token.!");
        req.user = {
            userType: decoded.userType,
            id: decoded.id,
            email: decoded.email,
            terminal: decoded.terminal,
            vehicle: decoded.vehicle,
            role: decoded.role,
            phone: decoded.phone,
        };
        if (req.method === "POST") {
            req.body.created_by = req.user.id;
        } else if (req.method === "PUT") {
            req.body.updated_by = req.user.id;
        }
        return next();
    });
}

export function isValidStaff(req, res, next) {
    const { userType, id, email, terminal, phone, role } = req.user;
    if (userType !== "staff") return fail(res, 403, "Invalid Staff credentials!");
    console.log(`\nValidating userType ${userType}, id ${id}, email ${email}, 
    Terminal ${terminal}, phone ${phone}, role ${role}`);
    return next();
}

export function isValidPartner(req, res, next) {
    const { userType, id, email } = req.user;
    if (userType !== "partner") return fail(res, 403, "Invalid Partner credentials!");
    console.log(`\nValidating userType ${userType}, id ${id}, email ${email}`);
    return next();
}

export function isValidDriver(req, res, next) {
    const { userType, id, email, vehicle } = req.user;
    if (userType !== "driver") return fail(res, 403, "Invalid Partner credentials!");
    console.log(`\nValidating userType ${userType}, id ${id}, email ${email} vehicle ${vehicle}`);
    return next();
}

export function isValidCustomer(req, res, next) {
    const { userType, id, email, phone } = req.user;
    if (userType !== "customer") return fail(res, 403, "Invalid Customer credentials!");
    console.log(`\nValidating userType ${userType}, id ${id}, email ${email} phone ${phone}`);
    return next();
}

function isValidRole(officeArray = [], roleCode) {
    const result = officeArray.find(office => office.code === roleCode);
    return (result != null);
}

//* =============== TERMINAL ROLES ===================== //

export function isValidPmlTerminalClerk(req, res, next) {
    const { role } = req.user;
    if (!isValidRole(role, "PML_TERMINAL_CLERK")) {
        return fail(res, 403, "Invalid user-role. Required: PML_TERMINAL_CLERK");
    }
    return next();
}

export function isValidPmtTerminalClerk(req, res, next) {
    const { role } = req.user;
    if (!isValidRole(role, "PMT_TERMINAL_CLERK")) {
        return fail(res, 403, "Invalid user-role. Required: PMT_TERMINAL_CLERK");
    }
    return next();
}

export function isValidPmlTerminalSupervisor(req, res, next) {
    const { role } = req.user;
    if (!isValidRole(role, "PML_TERMINAL_SUPERVISOR")) {
        return fail(res, 403, "Invalid user-role. Required: PML_TERMINAL_SUPERVISOR");
    }
    return next();
}

export function isValidPmtTerminalSupervisor(req, res, next) {
    const { role } = req.user;
    if (!isValidRole(role, "PMT_TERMINAL_SUPERVISOR")) {
        return fail(res, 403, "Invalid user-role. Required: PMT_TERMINAL_SUPERVISOR");
    }
    return next();
}

export function isValidPmtTerminalAccountant(req, res, next) {
    const { role } = req.user;
    if (!isValidRole(role, "PMT_TERMINAL_ACCOUNTANT")) {
        return fail(res, 403, "Invalid user-role. Required: PMT_TERMINAL_ACCOUNTANT");
    }
    return next();
}

export function isValidPmlTerminalAccountant(req, res, next) {
    const { role } = req.user;
    if (!isValidRole(role, "PML_TERMINAL_ACCOUNTANT")) {
        return fail(res, 403, "Invalid user-role. Required: PML_TERMINAL_ACCOUNTANT");
    }
    return next();
}

export function isValidPmlDispatchRider(req, res, next) {
    const { role } = req.user;
    if (!isValidRole(role, "PML_DISPATCH_RIDER")) {
        return fail(res, 403, "Invalid user-role. Required: PML_DISPATCH_RIDER");
    }
    return next();
}

export function isValidPmtTerminalLoader(req, res, next) {
    const { role } = req.user;
    if (!isValidRole(role, "PMT_TERMINAL_LOADER")) {
        return fail(res, 403, "Invalid user-role. Required: PMT_TERMINAL_LOADER");
    }
    return next();
}

export function isValidTerminalSecurity(req, res, next) {
    const { role } = req.user;
    if (!isValidRole(role, "TERMINAL_SECURITY")) {
        return fail(res, 403, "Invalid user-role. Required: TERMINAL_SECURITY");
    }
    return next();
}
