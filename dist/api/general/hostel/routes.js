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
 * @api {get} /api/subjects?id={recordId} Retrieve one or all records
 * @apiName RetrieveSubject
 * @apiGroup Subject
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/subjects?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of Subject the school.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/subjects", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/subjects Create subjects
 * @apiName CreateSubject
 * @apiGroup Subject
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} block Subject block name (required)
 * @apiParam {Number} room_no Subject room_no (required)
 * @apiParam {Number} no_of_beds Subject no_of_beds (required)
 * @apiParam {String} fee_id Subject fee_id (optional)
 * @apiParam {String} description Subject description (optional)
 * @apiParam {String} status Subject Status (Occupied or not Occupied)(optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Subject not found.
 * @apiError 500 server error.
 */
router.post("/subjects", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/subjects/{recordId} Update subjects
 * @apiName UpdateSubject
 * @apiGroup Subject
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} block Subject block name (required)
 * @apiParam {Number} room_no Subject room_no (required)
 * @apiParam {Number} no_of_beds Subject no_of_beds (required)
 * @apiParam {String} fee_id Subject fee_id (optional)
 * @apiParam {String} description Subject description (optional)
 * @apiParam {String} status Subject Status (Occupied or not Occupied)(optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Subject not found.
 * @apiError 500 server error.
 */
router.put("/subjects/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/subjects/{recordId} Delete subjects
 * @apiName DeleteSubject
 * @apiGroup Subject
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Subject not found.
 * @apiError 401 master Subject only.
 */
router.delete("/subjects/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map