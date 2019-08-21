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
 * @api {get} /api/v1/marksheets?id={recordId} Retrieve Marksheet records
 * @apiName RetrieveMarksheet
 * @apiGroup Marksheet
 * @apiHeader {String} Authorization Bearer token
  * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/marksheets?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Markheet records score per student per course
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/marksheets", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchMarksheet);

/**
 * @api {post} /api/v1/marksheets Create a Marksheet record
 * @apiName CreateMarksheet
 * @apiGroup Marksheet
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} type Marksheet type "PAPER|CBT"
 * @apiParam {ObjectId} course Marksheet course
 * @apiParam {ObjectId} student Marksheet student
 * @apiParam {Number} score Marksheet score
 * @apiParam {ObjectId} assessment_sitting Marksheet AssessmentSitting
 * @apiSuccess {Object} Marksheet Marksheet's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marksheet not found.
 * @apiError 401 master access only.
 */
router.post("/marksheets", [_authorization.checkAuth, _authorization.isValidStaff], _controller.generateMarksheet);

/**
 * @api {put} /api/v1/marksheets/{recordId} Update a Marksheet record
 * @apiName UpdateMarksheet
 * @apiGroup Marksheet
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} type Marksheet type "PAPER|CBT"
 * @apiParam {ObjectId} course Marksheet course
 * @apiParam {ObjectId} student Marksheet student
 * @apiParam {Number} score Marksheet score
 * @apiParam {ObjectId} assessment_sitting Marksheet AssessmentSitting
 * @apiSuccess {Object} Marksheet Marksheet's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marksheet not found.
 * @apiError 401 master access only.
 */
router.put("/marksheets/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateMarksheet);

//* ====== RESULT =============

/**
 * @api {get} /api/v1/results?id={recordId} Retrieve Report records
 * @apiName RetrieveReport
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token
  * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/results?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Results  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/results", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchResult);

/**
 * @api {post} /api/v1/results Create a Report record
 * @apiName CreateReport
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} type Report type "EVALUATION|TERMLY|ANNUAL" required
 * @apiParam {String} term Report type "FIRST|SECOND|THRID|ANNUAL" required
 * @apiParam {Array} cumulated Report cumulated Result Array
 * @apiParam {ObjectId} student Report student ObjectId
 * @apiParam {Array} marksheets Report marksheets Array<Marksheet>
 * @apiParam {Number} evaluation Report evaluation [1, 2, 3, 4]
 * @apiParam {Number} total Report total
 * @apiParam {Number} rank Report rank for that report
 * @apiSuccess {Object} Report Report's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marksheet not found.
 * @apiError 401 master access only.
 */
router.post("/results", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createResult);

/**
 * @api {put} /api/v1/results/{recordId} Update a Report record
 * @apiName UpdateReport
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} type Report type "EVALUATION|TERMLY|ANNUAL" required
 * @apiParam {String} term Report type "FIRST|SECOND|THRID|ANNUAL" required
 * @apiParam {Array} cumulated Report cumulated Result Array
 * @apiParam {ObjectId} student Report student ObjectId
 * @apiParam {Array} marksheets Report marksheets Array<Marksheet>
 * @apiParam {Number} evaluation Report evaluation [1, 2, 3, 4]
 * @apiParam {Number} total Report total
 * @apiParam {Number} rank Report rank for that report
 * @apiSuccess {Object} Report Report's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Marksheet not found.
 * @apiError 401 master access only.
 */
router.put("/results/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateResult);

router.delete("/results/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteResult);

exports.default = router;
//# sourceMappingURL=routes.js.map