"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _authorization = require("../../../middleware/authorization");

var _controller = require("./controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/**
 * @api {get} /api/v1/assessments?id={recordId} Retrieve one or all records
 * @apiName RetrieveAssessments
 * @apiGroup Assessment
 * @apiHeader {String} Authorization Bearer token
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/assessments?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Assessments  of permissible api routes staff can access
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/assessments", [_authorization.checkAuth], _controller.fetchAssessment);

/**
 * @api {post} /api/v1/assessments Create assessments
 * @apiName CreateAssessment
 * @apiGroup Assessment
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} code Assessment code
 * @apiParam {String} code Assessment code "TEST|CA|EXAM"
 * @apiParam {String} mode Assessment mode "ORAL|PAPER|CBT|DEMO"
 * @apiParam {Date} written_date Assessment written_date
 * @apiParam {Date} started_at Assessment started dateime
 * @apiParam {Date} ended_at Assessment ended dateime
 * @apiParam {Number} duration Assessment duration
 * @apiParam {ObjectId} course Assessment course
 * @apiParam {ObjectId} examiner Assessment examiner ObjectId
 * @apiParam {Array} questionnaires Assessment questionnaires array of ObjectId
 * @apiParam {ObjectId} classroom Assessmentclassroom or venue ObjectId
 * @apiParam {String} students Assessment students or candidates array ObjectId
 * @apiParam {String} status Assessment status "PENDING|DONE|CLOSED"
 * @apiSuccess {Object} Assessment Assessment's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Assessment not found.
 * @apiError 401 master access only.
 */
router.post("/assessments", [_authorization.checkAuth, _authorization.isValidCustomer], _controller.createAssessment);

/**
 * @api {put} /api/v1/assessments/{recordId} Update assessments
 * @apiName UpdateAssessment
 * @apiGroup Assessment
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId.
 * @apiParam {String} code Assessment code
 * @apiParam {String} code Assessment code "TEST|CA|EXAM"
 * @apiParam {String} mode Assessment mode "ORAL|PAPER|CBT|DEMO"
 * @apiParam {Date} written_date Assessment written_date
 * @apiParam {Date} started_at Assessment started dateime
 * @apiParam {Date} ended_at Assessment ended dateime
 * @apiParam {Number} duration Assessment duration
 * @apiParam {ObjectId} course Assessment course
 * @apiParam {ObjectId} examiner Assessment examiner ObjectId
 * @apiParam {Array} questionnaires Assessment questionnaires array of ObjectId
 * @apiParam {ObjectId} classroom Assessmentclassroom or venue ObjectId
 * @apiParam {String} students Assessment students or candidates array ObjectId
 * @apiParam {String} status Assessment status "PENDING|DONE|CLOSED"
 * @apiSuccess {Object} Assessment Assessment's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Assessment not found.
 * @apiError 401 master access only.
 */
router.put("/assessments/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateAssessment);

/**
 * @api {delete} /api/v1/assessments/{recordId} Delete assessments
 * @apiName DeleteAssessment
 * @apiGroup Assessment
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Assessment not found.
 * @apiError 401 master access only.
 */
router.delete("/assessments/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteAssessment);

//* =======ASSESSMENT-SITTING==========

/**
 * @api {get} /api/v1/assesment-sittings?id={recordId} Retrieve one or all records
 * @apiName RetrieveAssessmentSittings
 * @apiGroup AssessmentSitting
 * @apiHeader {String} Authorization Bearer token
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/assesment-sittings?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription AssessmentSittings  of permissible api routes staff can access
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/assesment-sittings", [_authorization.checkAuth], _controller.fetchAssessmentSitting);

/**
 * @api {post} /api/v1/assesment-sittings Create assesment-sittings
 * @apiName CreateAssessmentSitting
 * @apiGroup AssessmentSitting
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} student AssessmentSitting student
 * @apiParam {String} assessment AssessmentSitting assessment
 * @apiParam {Date} started_at AssessmentSitting started_at dateime
 * @apiParam {Date} ended_at AssessmentSitting ended dateime
 * @apiParam {String} responses AssessmentSitting responses
 *  "answer1|answer2|answer3|answer4|answer5"
 * @apiParam {Number} score AssessmentSitting score
 * @apiParam {String} status AssessmentSitting status "OPEN|CLOSED"
 *  Open - when the students starts and Close - when stopped.
 * @apiSuccess {Object} AssessmentSitting AssessmentSitting's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 AssessmentSitting not found.
 * @apiError 401 master access only.
 */
router.post("/assesment-sittings", [_authorization.checkAuth, _authorization.isValidCustomer], _controller.createAssessmentSitting);

/**
 * @api {put} /api/v1/assesment-sittings/{recordId} Update assesment-sittings
 * @apiName UpdateAssessmentSitting
 * @apiGroup AssessmentSitting
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId.
 * @apiParam {String} student AssessmentSitting student
 * @apiParam {String} assessment AssessmentSitting assessment
 * @apiParam {Date} started_at AssessmentSitting started_at dateime
 * @apiParam {Date} ended_at AssessmentSitting ended dateime
 * @apiParam {String} responses AssessmentSitting responses
 *  "answer1|answer2|answer3|answer4|answer5"
 * @apiParam {Number} score AssessmentSitting score
 * @apiParam {String} status AssessmentSitting status "OPEN|CLOSED"
 *  Open - when the students starts and Close - when stopped.
 * @apiSuccess {Object} AssessmentSitting AssessmentSitting's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 AssessmentSitting not found.
 * @apiError 401 master access only.
 */
router.put("/assesment-sittings/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateAssessmentSitting);

/**
 * @api {delete} /api/v1/assesment-sittings/{recordId} Delete assesment-sittings
 * @apiName DeleteAssessmentSitting
 * @apiGroup AssessmentSitting
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 AssessmentSitting not found.
 * @apiError 401 master access only.
 */
router.delete("/assesment-sittings/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteAssessmentSitting);

exports.default = router;
//# sourceMappingURL=routes.js.map