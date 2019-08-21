/**
 * @author 4Decoder
 * @description Offence holds record of all offences involving company vehicles
 */
import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/offences?id={recordId} Retrieve one or all records
 * @apiName RetrieveOffence
 * @apiGroup Offence
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/offences?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/offences", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/offences Create offences
 * @apiName CreateOffence
 * @apiGroup Offence
 * @apiParam {String} offender_type Offence offender_type (required)
 * @apiParam {Number} offender_id Offence offender_id (required)
 * @apiParam {String} offence Offence offence (optional)
 * @apiParam {Date} offence_date Offence offence_date (optional)
 * @apiParam {String} description Offence description (optional)
 * @apiParam {String} offence_status Offence offence_status ("PENDING", "ARBITRATED")
 * @apiParam {String} verdict Offence verdict ("INNOCENT", "GUILTY")
 * @apiParam {Number} verdict_by Offence verdict_by (optional)
 * @apiParam {Date} verdict_date Offence verdict_date (optional)
 * @apiParam {String} verdict_remark Offence verdict_remark (optional)
 * @apiParam {Number} fine Offence fine (required)
 * @apiParam {String} discipline Offence discipline ("WARNING", "SUSPENSION", "DISMISSED")
 * @apiParam {String} suspension Offence suspension (optional)
 * @apiParam {Number} payment Offence paymentId (required)
 * @apiSuccess {Object} Offence Offence's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Offence not found.
 * @apiError 401 master access only.
 */
router.post("/offences", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/offences/{recordId} Update offences
 * @apiName UpdateOffence
 * @apiGroup Offence
 * @apiPermission master
 * @apiParam {String} offender_type Offence offender_type
 * @apiParam {Number} offender_id Offence offender_id
 * @apiParam {String} offence Offence offence
 * @apiParam {Date} offence_date Offence offence_date
 * @apiParam {String} description Offence description
 * @apiParam {String} offence_status Offence offence_status ("PENDING", "ARBITRATED")
 * @apiParam {String} verdict Offence verdict ("INNOCENT", "GUILTY")
 * @apiParam {Number} verdict_by Offence verdict_by
 * @apiParam {Date} verdict_date Offence verdict_date
 * @apiParam {String} verdict_remark Offence verdict_remark
 * @apiParam {Number} fine Offence fine
 * @apiParam {String} discipline Offence discipline ("WARNING", "SUSPENSION", "DISMISSED")
 * @apiParam {String} suspension Offence suspension
 * @apiParam {Number} payment Offence paymentId
 * @apiSuccess {Object} Offence Offence's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Offence not found.
 * @apiError 401 master access only.
 */
router.put("/offences/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/offences/{recordId} Delete offences
 * @apiName DeleteOffence
 * @apiGroup Offence
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Offence not found.
 * @apiError 401 master access only.
 */
router.delete("/offences/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
