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
 * @apiDescription Records  of permissible api routes staff can access
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/assessments", [_authorization.checkAuth], _controller.fetchRecord);

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
router.post("/assessments", [_authorization.checkAuth, _authorization.isValidCustomer], _controller.createRecord);

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
router.put("/assessments/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

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
router.delete("/assessments/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map