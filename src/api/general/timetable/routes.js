import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/timetables?id={recordId} Retrieve one or all records
 * @apiName RetrieveStore
 * @apiGroup Store
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i https://mis-api.herokuapp.com/api/v1/timetables?id=2&fields=id,created_at,updated_at
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i https://mis-api.herokuapp.com/api/v1/timetables?offset=10&limit=50
 * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} fields Comma-separated list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/timetables", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/timetables Create timetables
 * @apiName CreateTimetables
 * @apiGroup Timetables
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} type Timetable type "REGULAR|ASSESSMENT"
 * @apiParam {String} activity Timetable activity
 *  "LESSON", "BREAK", "CLOSED", "PREP", "FREE", "LIBRARY"
* @apiParam {String} day Timetable day
 * @apiParam {String} from Timetable from
 * @apiParam {String} to Timetable to
 * @apiParam {Number} duration Timetable duration in Minutes
 * @apiParam {ObjectId} classe Timetable classe
 * @apiParam {ObjectId} course Timetable course
 * @apiParam {ObjectId} classroom Timetable classroom
 * @apiParam {String} subsidiary Timetable subsidiary
 * @apiParam {String} description Timetable description
 * @apiSuccess {Object} Timetable Timetable's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Timetable not found.
 * @apiError 401 master access only.
 */
router.post("/timetables", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/timetables/{recordId} Update timetables
 * @apiName UpdateTimetable
 * @apiGroup Timetable
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} type Timetable type "REGULAR|ASSESSMENT"
 * @apiParam {String} activity Timetable activity
 *  "LESSON", "BREAK", "CLOSED", "PREP", "FREE", "LIBRARY"
* @apiParam {String} day Timetable day
 * @apiParam {String} from Timetable from
 * @apiParam {String} to Timetable to
 * @apiParam {Number} duration Timetable duration in Minutes
 * @apiParam {ObjectId} classe Timetable classe
 * @apiParam {ObjectId} course Timetable course
 * @apiParam {ObjectId} classroom Timetable classroom
 * @apiParam {String} subsidiary Timetable subsidiary
 * @apiParam {String} description Timetable description
 * @apiSuccess {Object} Timetable Timetable's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Timetable not found.
 * @apiError 401 master access only.
 */
router.put("/timetables/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/timetables/{recordId} Delete timetables
 * @apiName DeleteTimetable
 * @apiGroup Timetable
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Timetable not found.
 * @apiError 401 master access only.
 */
router.delete("/timetables/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
