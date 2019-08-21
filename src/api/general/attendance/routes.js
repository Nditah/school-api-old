/**
 * @author 4Decoder
 * @description Attendance holds record of all attendances involving company vehicles
 */
import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/attendances?id={recordId} Retrieve one or all records
 * @apiName RetrieveAttendance
 * @apiGroup Attendance
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/attendances?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/attendances", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/attendances Create attendances
 * @apiName CreateAttendance
 * @apiGroup Attendance
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {Number} staff_id Attendance staff_id
 * @apiParam {Number} paid_by Attendance paid_by
 * @apiParam {Date} paid_date Attendance paid_date
 * @apiParam {String} pay_status Attendance pay_status
 * @apiParam {String} subsidiary Attendance subsidiary
 * @apiParam {Number} terminal_id Attendance terminal_id
 * @apiParam {Date} arrival_time Attendance arrival_time
 * @apiParam {Date} departure_time Attendance departure_time
 * @apiSuccess {Object} Attendance Attendance's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Attendance not found.
 * @apiError 401 master access only.
 */
router.post("/attendances", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/attendances/{recordId} Update attendances
 * @apiName UpdateAttendance
 * @apiGroup Attendance
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {Number} staff_id Attendance staff_id
 * @apiParam {Number} paid_by Attendance paid_by
 * @apiParam {Date} paid_date Attendance paid_date
 * @apiParam {String} pay_status Attendance pay_status
 * @apiParam {String} subsidiary Attendance subsidiary
 * @apiParam {Number} terminal_id Attendance terminal_id
 * @apiParam {Date} arrival_time Attendance arrival_time
 * @apiParam {Date} departure_time Attendance departure_time
 * @apiSuccess {Object} Attendance Attendance's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Attendance not found.
 * @apiError 401 master access only.
 */
router.put("/attendances/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/attendances/{recordId} Delete attendances
 * @apiName DeleteAttendance
 * @apiGroup Attendance
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Attendance not found.
 * @apiError 401 master access only.
 */
router.delete("/attendances/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
