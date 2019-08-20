/**
 * @author 4Decoder
 * @description Parent holds record of all parents with terminals
 */
import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord, login } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/parents?id={recordId} Retrieve one or all records
 * @apiName RetrieveParent
 * @apiGroup Parent
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/parents?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of consolidated list of parents of students in the school.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/parents", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/parents Create parents
 * @apiName CreateParent
 * @apiGroup Parent
 * @apiHeader {String} Authorization Bearer token
 * @property {String} title Parent title (optional)
 * @property {String} first_name Parent first_name (optional)
 * @property {String} middle_name Parent middle_name (optional)
 * @property {String} last_name Parent first_name (optional)
 * @property {String} gender Parent gender (optional)
 * @property {Date} date_of_birth Parent date_of_birth (optional)
 * @property {String} marital_status Parent marital_status (optional)
 * @property {String} address Parent address (optional)
 * @property {String} state_id Parent state_id (optional)
 * @property {String} county_id Parent county_id (optional)
 * @property {String} email Parent email (optional)
 * @property {String} phone Parent office phone (optional)
 * @property {String} password Parent password (optional)
 * @property {String} profession Parent profession (optional)
 * @property {String} employment_status Parent employment_status (required)
 * @property {String} students_name Parent students_name (optional)
 * @apiSuccess {Object} Parent Parent's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Parent not found.
 * @apiError 401 master access only.
 */
router.post("/parents", createRecord);

/**
 * @api {put} /api/parents/{recordId} Update parents
 * @apiName UpdateParent
 * @apiGroup Parent
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @property {String} title Parent title (optional)
 * @property {String} first_name Parent first_name (optional)
 * @property {String} middle_name Parent middle_name (optional)
 * @property {String} last_name Parent first_name (optional)
 * @property {String} gender Parent gender (optional)
 * @property {Date} date_of_birth Parent date_of_birth (optional)
 * @property {String} marital_status Parent marital_status (optional)
 * @property {String} address Parent address (optional)
 * @property {String} state_id Parent state_id (optional)
 * @property {String} county_id Parent county_id (optional)
 * @property {String} email Parent email (optional)
 * @property {String} phone Parent office phone (optional)
 * @property {String} password Parent password (optional)
 * @property {String} profession Parent profession (optional)
 * @property {String} employment_status Parent employment_status (required)
 * @property {String} students_name Parent students_name (optional)
 * @apiParam {ObjectId} updated_by id of the staff who created the record
 * @apiSuccess {Object} Parent Parent's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Parent not found.
 * @apiError 401 master access only.
 */
router.put("/parents/:recordId", [checkAuth], updateRecord);

/**
 * @api {delete} /api/parents/{recordId} Delete parents
 * @apiName DeleteParent
 * @apiGroup Parent
 * @apiParam {String} recordId record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Parent not found.
 * @apiError 401 master access only.
 */
router.delete("/parents/:recordId", [checkAuth, isValidStaff], deleteRecord);

/**
 * @api {post} /api/parents/login Login Parent
 * @apiName LoginParent
 * @apiGroup Parent
 * @apiPermission master
 * @apiParam {String} email Parent email address (optional)
 * @apiParam {String} password Parent password (optional)
 * @apiParam {String} phone Parent mobile phone number (optional)
 * @apiParam {String} otp Parent One-Time-Password sent to phone (optional)
 * @apiParam {String} type Login type "EMAIL", "PHONE", "OTP" (required)
 * @apiSuccess (Success 200) 200 Login Successful.
 * @apiError 404 Parent not found.
 */
router.post("/parents/login", login);

export default router;
