import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/offices?id={recordId} Retrieve one or all records
 * @apiName RetrieveOffice
 * @apiGroup Office
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/offices?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of Staff Office in a hierarchy that give staff certain privileges.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/offices", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/offices Create offices
 * @apiName CreateOffice
 * @apiGroup Office
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name Office name (required)
 * @apiParam {String} code Office code
 * @apiParam {String} email Office email
 * @apiParam {String} phone Office phone
 * @apiParam {String} functions Office description tasks the office performs
 * @apiParam {Number} hierarchy Office hierarchy [1-7]
 * @apiParam {Enum} office_type Office office_type "BOARD|DEPARTMENT|UNIT"
 * @apiParam {Enum} subsidiary Office subsidiary "PMT|PML|PET|PRESS"
 * @apiParam {ObjectId} office_above Office above this.
 * @apiParam {ObjectId} head Office Head Staff Id
 * @apiParam {ObjectId} assistant Office Assistant Head Staff Id
 * @apiSuccess {Object} Office Office's data.
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Office not found.
 * @apiError 500 server error.
 */
router.post("/offices", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/offices/{recordId} Update offices
 * @apiName UpdateOffice
 * @apiGroup Office
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name Office name (required)
 * @apiParam {String} code Office code
 * @apiParam {String} email Office email
 * @apiParam {String} phone Office phone
 * @apiParam {String} functions Office description tasks the office performs
 * @apiParam {Number} hierarchy Office hierarchy [1-7]
 * @apiParam {Enum} office_type Office office_type "BOARD|DEPARTMENT|UNIT"
 * @apiParam {Enum} subsidiary Office subsidiary "PMT|PML|PET|PRESS"
 * @apiParam {ObjectId} office_above Office above this.
 * @apiParam {ObjectId} head Office Head Staff Id
 * @apiParam {ObjectId} assistant Office Assistant Head Staff Id
 * @apiSuccess {Object} Office Office's data.
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Office not found.
 * @apiError 500 server error.
 */
router.put("/offices/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/offices/{recordId} Delete offices
 * @apiName DeleteOffice
 * @apiGroup Office
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Office not found.
 * @apiError 401 master office only.
 */
router.delete("/offices/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
//# sourceMappingURL=routes.js.map