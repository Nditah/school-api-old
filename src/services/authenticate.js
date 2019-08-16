import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import Staff from "../api/general/staff/model";
import { JWT } from "../constants";

export function staffAuthenticate2Old(loginPayload) {
    // return next();
    const { email, phone, otp, password, type } = loginPayload;
    return Staff.findOne({ $or: [{ email }, { phone }] })
        // eslint-disable-next-line complexity
        .then((user) => {
            if (!user) { throw new Error("Authentication failed. User not found."); }
            if (otp && phone) {
                if (!user.otp_access) {
                    throw new Error(`Authentication failed. OTP Access is ${user.otp_access}`);
                }
            }
            if (!(bcryptjs.compareSync(password || "", user.password)
            || bcryptjs.compareSync(otp || "", user.otp))) {
                throw new Error("Authentication failed. Wrong password or otp.");
            }

            const query = { _id: user._id };
            const update = { otp_access: false };
            Staff.findOneAndUpdate(query, update, { new: true }).exec();
            // Delete private attributes
            delete user.password;
            delete user.otp;
            const payload = {
                id: user.id,
                userType: "staff",
                terminal_id: user.terminal_id,
                role: user.role,
                vehicle_id: user.vehicle_id,
                email,
                phone,
                time: new Date(),
            };

            const token = jwt.sign(payload, JWT.jwtSecret, {
                expiresIn: "240h", // JWT.tokenExpireTime,
            });
            return { token, user };
        });
}

// eslint-disable-next-line complexity
export async function staffAuthenticate(loginPayload) {
    // return next();
    const { email, phone, otp, password, type } = loginPayload;
    let user;
    let token;
    try {
        const filter = {};
        if (phone) {
            filter.phone = phone;
        } else {
            filter.email = email;
        }
        user = await Staff
            .findOne(filter)
            .populate("terminal_id")
            .populate("role")
            .populate("bank_id")
            .populate("vehicle_id")
            .populate("asset_request_assigment_ids")
            .populate("rating_ids")
            .populate("state_id")
            .populate("county_id")
            .exec();

        if (!user) {
            throw new Error("User not found.");
        }
        if (otp && phone) {
            if (!user.otp_access) {
                throw new Error(`Authentication failed. OTP Access is ${user.otp_access}`);
            }
        }
        if (!(bcryptjs.compareSync(password || "", user.password)
        || (bcryptjs.compareSync(otp || "", user.otp) && user.otp_access))) {
            throw new Error("Wrong password or otp credentials.");
        }
        const query = { _id: user._id };
        const update = { otp_access: false };
        await Staff.findOneAndUpdate(query, update, { new: true }).exec();

        // Delete private attributes
        user.password = null;
        user.otp = null;
        delete user.password;
        delete user.otp;
        const payload = {
            id: user.id,
            userType: "staff",
            terminal: user.terminal_id,
            role: user.role,
            email,
            phone,
            time: new Date(),
        };

        token = jwt.sign(payload, JWT.jwtSecret, {
            expiresIn: "240h", // JWT.tokenExpireTime,
        });
    } catch (err) {
        throw new Error(`Authentication failed ${err.message}`);
    }
    return { token, user };
}

