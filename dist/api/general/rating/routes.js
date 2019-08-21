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
 * @api {get} /api/v1/ratings?id={recordId} Retrieve one or all records
 * @apiName RetrieveRatings
 * @apiGroup Rating
  * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/ratings?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of permissible api routes staff can access
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/ratings", [_authorization.checkAuth], _controller.fetchRecord);

/**
 * @api {post} /api/v1/ratings Create ratings
 * @apiName CreateRating
 * @apiGroup Rating
 * @apiParam {Number} star Rating star from 0 to 5 (required)
 * @apiParam {String} subject Rating subject STAFF|PARTNER|TERMINAL|VEHICLE" (required)
 * @apiParam {String} staff_id Rated Staff subject ObjectId
 * @apiParam {String} partner_id Rated Partner subject ObjectId
 * @apiParam {String} terminal_id Rated Terminal subject ObjectId
 * @apiParam {String} vehicle_id Rated Vehicle subject ObjectId
 * @apiParam {String} review Rating review comment
 * @apiSuccess {Object} Rating Rating's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Rating not found.
 * @apiError 401 master access only.
 */
router.post("/ratings", [_authorization.checkAuth, _authorization.isValidCustomer], _controller.createRecord);

/**
 * @api {put} /api/v1/ratings/{recordId} Update ratings
 * @apiName UpdateRating
 * @apiGroup Rating
 * @apiPermission master
 * @apiParam {Number} star Rating star from 0 to 5
 * @apiParam {String} subject Rating subject STAFF|PARTNER|TERMINAL|VEHICLE"
 * @apiParam {String} staff_id Rated Staff subject ObjectId
 * @apiParam {String} partner_id Rated Partner subject ObjectId
 * @apiParam {String} terminal_id Rated Terminal subject ObjectId
 * @apiParam {String} vehicle_id Rated Vehicle subject ObjectId
 * @apiParam {String} review Rating review comment
 * @apiSuccess {Object} Rating Rating's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Rating not found.
 * @apiError 401 master access only.
 */
router.put("/ratings/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/ratings/{recordId} Delete ratings
 * @apiName DeleteRating
 * @apiGroup Rating
 * @apiPermission master
 * @apiParam {ObjectId} recordId record ObjectId.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Rating not found.
 * @apiError 401 master access only.
 */
router.delete("/ratings/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map