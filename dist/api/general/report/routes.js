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
 * @api {get} /api/v1/reports?id={recordId} Retrieve Report records
 * @apiName RetrieveReport
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token
  * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/reports?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/reports", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/reports Create a Report record
 * @apiName CreateReport
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name Report name
 * @apiParam {String} description Report description
 * @apiParam {String} subsidiary Report subsidiary
 * @apiSuccess {Object} Report Report's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Report not found.
 * @apiError 401 master access only.
 */
router.post("/reports", [_authorization.checkAuth, _authorization.isValidStaff], _controller.generateReport);

/**
 * @api {put} /api/v1/reports/{recordId} Update a Report record
 * @apiName UpdateReport
 * @apiGroup Report
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name Report name
 * @apiParam {String} description Report description
 * @apiParam {String} subsidiary Report subsidiary
 * @apiSuccess {Object} Report Report's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Report not found.
 * @apiError 401 master access only.
 */
router.put("/reports/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map