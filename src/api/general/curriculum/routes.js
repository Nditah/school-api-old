import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/curriculums?id={recordId} Retrieve one or all records
 * @apiName RetrieveCurriculum
 * @apiGroup Curriculum
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/curriculums?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {String} description Curriculum description String (required)
 * @apiParam {String} scheme Curriculum scheme String
 * @apiParam {ObjectId} staff_id Curriculum staff ObjectId
 * @apiParam {ObjectId} book_id Curriculum Book ObjectId
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/curriculums", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/curriculums Create curriculums
 * @apiName CreateCurriculum
 * @apiGroup Curriculum
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} description Curriculum description String (required)
 * @apiParam {String} scheme Curriculum scheme String
 * @apiParam {ObjectId} staff_id Curriculum staff ObjectId
 * @apiParam {ObjectId} book_id Curriculum Book ObjectId
 * @apiSuccess {Object} Curriculum Staff's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Curriculum not found.
 * @apiError 401 master access only.
 */
router.post("/curriculums", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/curriculums/{recordId} Update curriculums
 * @apiName UpdateCurriculum
 * @apiGroup Curriculum
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} book_id Curriculum Book ObjectId (required)
 * @apiParam {String} description Curriculum description
 * @apiSuccess {Object} Curriculum Staff's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Curriculum not found.
 * @apiError 401 master access only.
 */
router.put("/curriculums/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/curriculums/{recordId} Delete curriculums
 * @apiName DeleteCurriculum
 * @apiGroup Curriculum
 * @apiPermission master
 * @apiParam {String} recordId ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Curriculum not found.
 * @apiError 401 master access only.
 */
router.delete("/curriculums/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
