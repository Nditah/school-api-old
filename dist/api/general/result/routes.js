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
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/results", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

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
 * @apiError 404 Report not found.
 * @apiError 401 master access only.
 */
router.post("/results", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

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
 * @apiError 404 Report not found.
 * @apiError 401 master access only.
 */
router.put("/results/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

router.delete("/results/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map