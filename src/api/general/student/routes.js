/**
 * @author 4Decoder
 * @description Student holds record of all students with terminals
 */
import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord, login } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/students?id={recordId} Retrieve one or all records
 * @apiName RetrieveStudent
 * @apiGroup Student
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/students?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of consolidated list of students from SECONDARY, PRIMARY, NURSERY etc
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/students", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/students Create students
 * @apiName CreateStudent
 * @apiGroup Student
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} first_name Student first_name (optional)
 * @apiParam {String} middle_name Student middle_name (optional)
 * @apiParam {String} last_name Student first_name (optional)
 * @apiParam {String} gender Student gender (optional)
 * @apiParam {Date} date_of_birth Student date_of_birth (optional)
 * @apiParam {String} address Student address (optional)
 * @apiParam {String} state_id Student state_id (optional)
 * @apiParam {String} county Student county (optional)
 * @apiParam {String} email Student email (optional)
 * @apiParam {String} phone Student office phone (optional)
 * @apiParam {String} password Student password (optional)
 * @apiParam {String} blood_group Student blood_group (optional)
 * @apiParam {String} classe Student classe (optional)
 * @apiParam {String} level Student level (optional)
 * @apiParam {String} subsidiary Student subsidiary (required)
 * @apiParam {String} hostel Student hostel (optional)
 * @apiParam {String} photo Student photo (optional)
 * @apiParam {String} parents_name Student parents_name (optional)
 * @apiSuccess {Object} Student Student's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Student not found.
 * @apiError 401 master access only.
 */
router.post("/students", createRecord);

/**
 * @api {put} /api/students/{recordId} Update students
 * @apiName UpdateStudent
 * @apiGroup Student
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} first_name Student first_name (optional)
 * @apiParam {String} middle_name Student middle_name (optional)
 * @apiParam {String} last_name Student first_name (optional)
 * @apiParam {String} gender Student gender (optional)
 * @apiParam {Date} date_of_birth Student date_of_birth (optional)
 * @apiParam {String} address Student address (optional)
 * @apiParam {String} state_id Student state_id (optional)
 * @apiParam {String} county Student county (optional)
 * @apiParam {String} email Student email (optional)
 * @apiParam {String} phone Student office phone (optional)
 * @apiParam {String} password Student password (optional)
 * @apiParam {String} blood_group Student blood_group (optional)
 * @apiParam {String} classe Student classe (optional)
 * @apiParam {String} level Student level (optional)
 * @apiParam {String} subsidiary Student subsidiary (required)
 * @apiParam {String} hostel Student hostel (optional)
 * @apiParam {String} photo Student photo (optional)
 * @apiParam {String} parents_name Student parents_name (optional)
 * @apiParam {ObjectId} updated_by id of the staff who created the record
 * @apiSuccess {Object} Student Student's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Student not found.
 * @apiError 401 master access only.
 */
router.put("/students/:recordId", [checkAuth], updateRecord);

/**
 * @api {delete} /api/students/{recordId} Delete students
 * @apiName DeleteStudent
 * @apiGroup Student
 * @apiParam {String} recordId record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Student not found.
 * @apiError 401 master access only.
 */
router.delete("/students/:recordId", [checkAuth, isValidStaff], deleteRecord);

/**
 * @api {post} /api/students/login Login Student
 * @apiName LoginStudent
 * @apiGroup Student
 * @apiPermission master
 * @apiParam {String} email Student email address (optional)
 * @apiParam {String} password Student password (optional)
 * @apiParam {String} phone Student mobile phone number (optional)
 * @apiParam {String} otp Student One-Time-Password sent to phone (optional)
 * @apiParam {String} type Login type "EMAIL", "PHONE", "OTP" (required)
 * @apiSuccess (Success 200) 200 Login Successful.
 * @apiError 404 Student not found.
 */
router.post("/students/login", login);

export default router;
