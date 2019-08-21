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
 * @api {get} /api/v1/hostel-allocations?id={recordId} Retrieve one or all records
 * @apiName RetrieveHostelAllocation
 * @apiGroup HostelAllocation
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/hostel-allocations?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of HostelAllocation the school.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/hostel-allocations", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchHostelAllocation);

/**
 * @api {post} /api/v1/hostel-allocations Create hostel-allocations
 * @apiName CreateHostelAllocation
 * @apiGroup HostelAllocation
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} block HostelAllocation block name (required)
 * @apiParam {Number} room_no HostelAllocation room_no (required)
 * @apiParam {Number} no_of_beds HostelAllocation no_of_beds (required)
 * @apiParam {String} fee_id HostelAllocation fee_id (optional)
 * @apiParam {String} description HostelAllocation description (optional)
 * @apiParam {String} status HostelAllocation Status (Occupied or not Occupied)(optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 HostelAllocation not found.
 * @apiError 500 server error.
 */
router.post("/hostel-allocations", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createHostelAllocation);

/**
 * @api {put} /api/v1/hostel-allocations/{recordId} Update hostel-allocations
 * @apiName UpdateHostelAllocation
 * @apiGroup HostelAllocation
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} block HostelAllocation block name (required)
 * @apiParam {Number} room_no HostelAllocation room_no (required)
 * @apiParam {Number} no_of_beds HostelAllocation no_of_beds (required)
 * @apiParam {String} fee_id HostelAllocation fee_id (optional)
 * @apiParam {String} description HostelAllocation description (optional)
 * @apiParam {String} status HostelAllocation Status (Occupied or not Occupied)(optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 HostelAllocation not found.
 * @apiError 500 server error.
 */
router.put("/hostel-allocations/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateHostelAllocation);

/**
 * @api {delete} /api/v1/hostel-allocations/{recordId} Delete hostel-allocations
 * @apiName DeleteHostelAllocation
 * @apiGroup HostelAllocation
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 HostelAllocation not found.
 * @apiError 401 master HostelAllocation only.
 */
router.delete("/hostel-allocations/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteHostelAllocation);

exports.default = router;
//# sourceMappingURL=routes.js.map