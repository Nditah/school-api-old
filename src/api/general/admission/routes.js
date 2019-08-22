import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/admissions?id={recordId} Retrieve one or all records
 * @apiName RetrieveAdmission
 * @apiGroup Admission
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/admissions?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of Staff Admission in a hierarchy that give staff certain privileges.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/admissions", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/admissions Create admissions
 * @apiName CreateAdmission
 * @apiGroup Admission
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} passport Admission passport (required)
 * @apiParam {String} surname Admission surname (required)
 * @apiParam {String} given_name Admission First Name
 * @apiParam {String} home_town Admission Home Town
 * @apiParam {String} address Admission village
 * @apiParam {String} county_id Admission county
 * @apiParam {String} state_id Admission state
 * @apiParam {Date}   birth_date Admission date
 * @apiParam {String} religion Admission Religion
 * @apiParam {String} denomination Admission Denomination
 * @apiParam {String} last_class Admission last class attended
 * @apiParam {String} intending_class Admission intending class
 * @apiParam {String} last_school Admission last school attended
 * @apiParam {String} father_name Admission father's name
 * @apiParam {String} mother_name Admission mother's name
 * @apiParam {String} home_address Admission guadians home address
 * @apiParam {String} phone Admission guadians phone number
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Admission not found.
 * @apiError 500 server error.
 */
router.post("/admissions", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/admissions/{recordId} Update admissions
 * @apiName UpdateAdmission
 * @apiGroup Admission
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} passport Admission passport (required)
 * @apiParam {String} surname Admission surname (required)
 * @apiParam {String} given_name Admission First Name
 * @apiParam {String} home_town Admission Home Town
 * @apiParam {String} address Admission village
 * @apiParam {String} county_id Admission county
 * @apiParam {String} state_id Admission state
 * @apiParam {Date}   birth_date Admission date
 * @apiParam {String} religion Admission Religion
 * @apiParam {String} denomination Admission Denomination
 * @apiParam {String} last_class Admission last class attended
 * @apiParam {String} intending_class Admission intending class
 * @apiParam {String} last_school Admission last school attended
 * @apiParam {String} father_name Admission father's name
 * @apiParam {String} mother_name Admission mother's name
 * @apiParam {String} home_address Admission guadians home address
 * @apiParam {String} phone Admission guadians phone number
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Admission not found.
 * @apiError 500 server error.
 */
router.put("/admissions/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/admissions/{recordId} Delete admissions
 * @apiName DeleteAdmission
 * @apiGroup Admission
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Admission not found.
 * @apiError 401 master Admission only.
 */
router.delete("/admissions/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
