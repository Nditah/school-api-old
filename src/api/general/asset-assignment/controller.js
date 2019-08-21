import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import AssetAssignment, { schemaCreate, schemaUpdate } from "./model";
import { success, fail, notFound, isObjecId, timestamp } from "../../../lib";
import { STATUS_MSG } from "../../../constants";
import Staff from "../staff/model";
import Student from "../student/model";
import Vehicle from "../vehicle/model";
import Asset from "../asset/model";

// Logging
const logger = log4js.getLogger("[asset-assignments]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/asset-assignments.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

export async function fetchRecord(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await AssetAssignment.find(filter)
            .populate("asset_id")
            .populate("vehicle_id")
            .populate("task_id")
            .populate({ path: "staff_id", select: "-password -otp" })
            .populate({ path: "student_id", select: "-password -otp" })
            .populate({ path: "created_by", select: "surname given_name email phone" })
            .populate({ path: "updated_by", select: "surname given_name email phone" })
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .select(projection)
            .exec();
        if (!result) {
            return notFound(res, "Error: Bad Request: Model not found");
        }
        logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
        return success(res, 201, result, null);
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error retrieving record. ${err.message}`);
    }
}

// eslint-disable-next-line complexity
export async function createRecord(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, schemaCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);

    if (data.assignment_status === "ISSUED") {
        data.issued_date = data.issued_date ? data.issued_date : timestamp();
        data.issued_by = data.created_by;
    }
    let UserModel;
    let userId;
    switch (data.user_type) {
    case "STUDENT": UserModel = Student; userId = "student_id"; break;
    case "STAFF": UserModel = Staff; userId = "staff_id"; break;
    default: return fail(res, 422, `Error invalid user_type ${data.user_type}`);
    }
    let AssetModel;
    let assetId;
    switch (data.asset_type) {
    case "VEHICLE": AssetModel = Vehicle; assetId = "vehicle_id"; break;
    case "INVENTORY": AssetModel = Asset; assetId = "asset_id"; break;
    default: return fail(res, 422, `Error invalid asset_type ${data.asset_type}`);
    }
    try {
        const newRecord = new AssetAssignment(data);
        const result = await newRecord.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }

        const updateVehicle = { vehicle_custodian: data.user_type };
        updateVehicle[ `current_${userId}` ] = result[ userId ];
        updateVehicle.vehicle_assignment = "ASSIGNED";
        const updateUser = { $push: { asset_assigment_ids: result._id } };
        if (result.asset_type === "VEHICLE") {
            await Vehicle.update({ _id: result[ assetId ] }, updateVehicle).exec();
            updateUser.vehicle_id = result[ assetId ];
        }

        await UserModel.update({ _id: result[ userId ] }, updateUser).exec();
        return success(res, 201, result, "Record created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

/*
    vehicle_custodian: {
        type: String,
        enum: Object.values(VEHICLE_CUSTODIAN),
        default: VEHICLE_CUSTODIAN.UNKNOWN,
        required: [true, "Why no vehicle_custodian?"],
    },
    current_staff_id: { type: ObjectId, ref: "Staff" },
    current_student_id: { type: ObjectId, ref: "Student" },
*/
// eslint-disable-next-line complexity
export async function updateRecord(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, schemaUpdate);
    if (data.assignment_status === "ISSUED") {
        data.issued_date = data.issued_date ? data.issued_date : timestamp();
        data.issued_by = data.updated_by;
    }
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await AssetAssignment
            .findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Record updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

// eslint-disable-next-line complexity
export async function deleteRecord(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await AssetAssignment.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        let UserModel;
        let userId;
        switch (result.user_type) {
        case "STUDENT": UserModel = Student; userId = "student_id"; break;
        case "STAFF": UserModel = Staff; userId = "staff_id"; break;
        default: return fail(res, 422, `Error invalid user_type ${result.user_type}`);
        }
        let AssetModel;
        let assetId;
        switch (result.asset_type) {
        case "VEHICLE": AssetModel = Vehicle; assetId = "vehicle_id"; break;
        case "INVENTORY": AssetModel = Asset; assetId = "asset_id"; break;
        default: return fail(res, 422, `Error invalid asset_type ${result.asset_type}`);
        }
        const updateUser = { $pull: { asset_assigment_ids: result._id } };
        if (result.asset_type === "VEHICLE") {
            updateUser.vehicle_id = null;
        }
        const result2 = await UserModel.update({ _id: result[ userId ] }, updateUser).exec();

        const updateVehicle = {};
        updateVehicle[ `current_${userId}` ] = null;
        updateVehicle.vehicle_assignment = "UNASSIGNED";
        await Vehicle.update({ _id: result[ assetId ] }, updateVehicle).exec();

        return success(res, 200, result2, "Record deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}
