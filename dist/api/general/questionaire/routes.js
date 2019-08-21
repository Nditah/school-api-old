"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _authorization = require("../../../middleware/authorization");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

var router = _express2.default.Router();

/**
 * @api {get} /api/admissions?id={recordId} Retrieve one or all records
 * @apiName RetrieveAdmission
 * @apiGroup Questionaire
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/admissions?
 * @apiParam {String} code Questionaire code ObjectId
 * @apiParam {String} questionaire Questionaire 
 * @apiParam {String} answer Questionaire answer
 * @apiParam {String} correct_answer Questionaire correct_answer
 * @apiParam {String} score Questionaire score)
 * @apiParam {String} course_name Questionaire course_name
 * @apiDescription Records of Questionaire in a hierarchy that give certain privileges.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/admissions", [_authorization.checkAuth, _authorization.isValidStaff], fetchRecord);

/**
 * @api {post} /api/questionaire Create questionaire
 * @apiName CreateQuestionaire
 * @apiGroup Questionaire
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} code Questionaire code ObjectId
 * @apiParam {String} questionaire Questionaire 
 * @apiParam {String} answer Questionaire answer
 * @apiParam {String} correct_answer Questionaire correct_answer
 * @apiParam {String} score Questionaire score)
 * @apiParam {String} course_name Questionaire course_name
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Questionaire not found.
 * @apiError 500 server error.
 */
router.post("/admissions", [_authorization.checkAuth, _authorization.isValidStaff], createRecord);

/**
 * @api {put} /api/admissions/{recordId} Update admissions
 * @apiName UpdateAdmission
 * @apiGroup Admission
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} code Questionaire code ObjectId
 * @apiParam {String} questionaire Questionaire 
 * @apiParam {String} answer Questionaire answer
 * @apiParam {String} correct_answer Questionaire correct_answer
 * @apiParam {String} score Questionaire score)
 * @apiParam {String} course_name Questionaire course_name
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Admission not found.
 * @apiError 500 server error.
 */
router.put("/admissions/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], updateRecord);

/**
 * @api {delete} /api/admissions/{recordId} Delete admissions
 * @apiName DeleteAdmission
 * @apiGroup Admission
 * @apiHeader {String} Authorization Bearer token
 *@apiParam {String} code Questionaire code ObjectId
 * @apiParam {String} questionaire Questionaire 
 * @apiParam {String} answer Questionaire answer
 * @apiParam {String} correct_answer Questionaire correct_answer
 * @apiParam {String} score Questionaire score)
 * @apiParam {String} course_name Questionaire course_name
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Admission not found.
 * @apiError 401 master Admission only.
 */
router.delete("/admissions/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map