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
 * @api {get} /api/v1/stages?id={recordId} Retrieve Stage records
 * @apiName RetrieveStage
 * @apiGroup Stage
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/stages
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/stages", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/stages Create stages
 * @apiName CreateStage
 * @apiGroup Stage
 * @apiHeader {String} Authorization authorization token
 * @apiParam {Number} step Stage serial number
 * @apiParam {String} name Stage name (required)
 * @apiParam {String} type Stage type (required)
 *  "PRODUCTION", "VOUCHER", "MAINTENANCE", "ORDER", "REGISTRATION"
 * @apiParam {String} description Stage  description (required)
 * @apiParam {String} subsidiary Stage  subsidiary (required)
 * @apiParam {ObjectId} officer Stage  officer Staff ObjectId
 * @apiSuccess {Object} Stage Stage's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Stage not found.
 * @apiError 401 master access only.
 */
router.post("/stages", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/stages/{recordId} Update stages
 * @apiName UpdateStage
 * @apiGroup Stage
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {Number} step Stage serial number
 * @apiParam {String} name Stage name (required)
 * @apiParam {String} type Stage type (required)
 * @apiParam {String} description Stage  description (required)
 * @apiParam {String} subsidiary Stage  subsidiary (required)
 * @apiParam {ObjectId} officer Stage  officer Staff ObjectId
 * @apiSuccess {Object} Stage Stage's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Stage not found.
 * @apiError 401 master access only.
 */
router.put("/stages/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/stages/{recordId} Delete stages
 * @apiName DeleteStage
 * @apiGroup Stage
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Stage not found.
 * @apiError 401 master access only.
 */
router.delete("/stages/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map