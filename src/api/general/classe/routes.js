import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/classes?id={recordId} Retrieve one or all records
 * @apiName RetrieveClasse
 * @apiGroup Classe
* @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/classes?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of classes in the school
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/classes", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/classes Create classes
 * @apiName CreateClasse
 * @apiGroup Classe
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name Classe name - external (required)
 * @apiParam {String} code Classe code - internal (required)
 * @apiParam {String} subsidiary Classe subsidiary (required)
 * @apiParam {String} level Classe level [1-7]
 * @apiParam {ObjectId} master Classe master or form teacher (optional)
 * @apiParam {ObjectId} prefect Classe prefect or class captain (optional)
 * @apiParam {ObjectId} classroom Classe classroom or lesson venue (optional)
 * @apiParam {ObjectId} category Classe category or type (optional)
 * @apiSuccess {Object} Classe Classe's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Classe not found.
 * @apiError 401 master access only.
 */
router.post("/classes", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/classes/{recordId} Update classes
 * @apiName UpdateClasse
 * @apiGroup Classe
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId required record ObjectId
 * @apiParam {String} name Classe name - external (required)
 * @apiParam {String} code Classe code - internal (required)
 * @apiParam {String} subsidiary Classe subsidiary (required)
 * @apiParam {String} level Classe level [1-7]
 * @apiParam {ObjectId} master Classe master or form teacher (optional)
 * @apiParam {ObjectId} prefect Classe prefect or class captain (optional)
 * @apiParam {ObjectId} classroom Classe classroom or lesson venue (optional)
 * @apiParam {ObjectId} category Classe category or type (optional)
 * @apiSuccess {Object} Classe Classe's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Classe not found.
 * @apiError 401 master access only.
 */
router.put("/classes/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/classes/{recordId} Delete classes
 * @apiName DeleteClasse
 * @apiGroup Classe
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Classe not found.
 * @apiError 401 master access only.
 */
router.delete("/classes/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
