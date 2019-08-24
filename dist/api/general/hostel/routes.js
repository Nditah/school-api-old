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

///////////////////// HOSTEL ALLOCATIONS /////////////////////////

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
* @apiParam {Number} id hostelAllocation primaryKey
 * @apiParam {String} bedspace hostelAllocation room name (required)
 * @apiParam {String} fees_payment hostelAllocation code name (required)
 * @apiParam {ObjectId} occupant hostelAllocation occupant (required)
 * @apiParam {String} description hostelAllocation description (optional)
 * @apiParam {String} status hostelAllocation Status (Occupied or not Occupied)(optional)
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
 * @apiParam {Number} id hostelAllocation primaryKey
 * @apiParam {String} bedspace hostelAllocation room name (required)
 * @apiParam {String} fees_payment hostelAllocation code name (required)
 * @apiParam {ObjectId} occupant hostelAllocation occupant (required)
 * @apiParam {String} description hostelAllocation description (optional)
 * @apiParam {String} status hostelAllocation Status (Occupied or not Occupied)(optional)
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

///////////////////// HOSTEL /////////////////////////

/**
 * @api {get} /api/v1/hostels?id={recordId} Retrieve one or all records
 * @apiName RetrieveHostel
 * @apiGroup Hostel
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/hostels?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of Hostel the school.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/hostels", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchHostel);

/**
 * @api {post} /api/v1/hostels Create hostels
 * @apiName CreateHostel
 * @apiGroup Hostel
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} hall Hostel hall name (required)
 * @apiParam {String} block Hostel block name (required)
 * @apiParam {Number} hostel_fees Hostel fees (required)
 * @apiParam {String} description Hostel description (optional)
 * @apiParam {String} status Hostel Status (Occupied or not Occupied)(optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 HostelAllocation not found.
 * @apiError 500 server error.
 */
router.post("/hostels", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createHostel);

/**
 * @api {put} /api/v1/hostels/{recordId} Update hostels
 * @apiName UpdateHostel
 * @apiGroup Hostel
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} hall Hostel hall name (required)
 * @apiParam {String} block Hostel block name (required)
 * @apiParam {Number} hostel_rooms Hostel Rooms (required)
 * @apiParam {Number} hostel_fees Hostel fees (required)
 * @apiParam {String} description Hostel description (optional)
 * @apiParam {String} status Hostel Status (Occupied or not Occupied)(optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Hostel not found.
 * @apiError 500 server error.
 */
router.put("/hostels/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateHostel);

/**
 * @api {delete} /api/v1/hostels/{recordId} Delete hostel-allocations
 * @apiName DeleteHostel
 * @apiGroup Hostel
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Hostel not found.
 * @apiError 401 master Hostel only.
 */
router.delete("/hostels/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteHostel);

///////////////////// HOSTEL- ROOM /////////////////////////

/**
 * @api {get} /api/v1/hostel-rooms?id={recordId} Retrieve one or all records
 * @apiName RetrieveHostelRoom
 * @apiGroup HostelRoom
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/hostel-rooms?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of HostelRoom the school.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/hostel-rooms", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchHostelRoom);

/**
 * @api {post} /api/v1/hostel-rooms Create hostel-rooms
 * @apiName CreateHostelRoom
 * @apiGroup HostelRoom
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} hostel hostelRoom hostel name (required)
 * @apiParam {String} code hostelRoom code name (required)
 * @apiParam {Number} floor hostelRoom floor (required)
 * @apiParam {String} description hostelRoom description (optional)
 * @apiParam {String} status hostelRoom Status (Occupied or not Occupied)(optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 HostelRoom not found.
 * @apiError 500 server error.
 */
router.post("/hostel-rooms", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createHostelRoom);

/**
 * @api {put} /api/v1/hostel-rooms/{recordId} Update hostel-rooms
 * @apiName UpdateHostelRoom
 * @apiGroup HostelRoom
 * @apiHeader {String} Authorization Bearer token
* @apiParam {String} hostel hostelRoom hostel name (required)
 * @apiParam {String} code hostelRoom code name (required)
 * @apiParam {Number} floor hostelRoom floor (required)
 * @apiParam {Number} hostel_bedspaces hostelRoom floor (required)
 * @apiParam {String} description hostelRoom description (optional)
 * @apiParam {String} status hostelRoom Status (Occupied or not Occupied)(optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Hostel not found.
 * @apiError 500 server error.
 */
router.put("/hostel-rooms/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateHostelRoom);

/**
 * @api {delete} /api/v1/hostel-rooms/{recordId} Delete hostel-rooms
 * @apiName DeleteHostelRoom
 * @apiGroup HostelRoom
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 HostelRoom not found.
 * @apiError 401 master HostelRoom only.
 */
router.delete("/hostels/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteHostelRoom);

///////////////////// HOSTEL- BEDSPACE /////////////////////////

/**
 * @api {get} /api/v1/hostel-bedspaces?id={recordId} Retrieve one or all records
 * @apiName RetrieveHostelBedspace
 * @apiGroup HostelBedspace
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/hostel-bedspaces?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of HostelBedspace the school.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/hostel-bedspaces", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchHostelBedspace);

/**
 * @api {post} /api/v1/hostel-bedspaces Create hostel-bedspaces
 * @apiName CreateHostelBedspace
 * @apiGroup HostelBedspace
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} room hostelBedspace room name (required)
 * @apiParam {String} code hostelBedspace code name (required)
 * @apiParam {Number} occupant hostelBedspace occupant (required)
 * @apiParam {String} description hostelBedspace description (optional)
 * @apiParam {String} status hostelBedspace Status (Occupied or not Occupied)(optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 HostelBedspace not found.
 * @apiError 500 server error.
 */
router.post("/hostel-bedspaces", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createHostelBedspace);

/**
 * @api {put} /api/v1/hostel-bedspaces/{recordId} Update hostel-bedspaces
 * @apiName UpdateHostelBedspace
 * @apiGroup HostelBedspace
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} room hostelBedspace room name (required)
 * @apiParam {String} code hostelBedspace code name (required)
 * @apiParam {Number} occupant hostelBedspace occupant (required)
 * @apiParam {String} description hostelBedspace description (optional)
 * @apiParam {String} status hostelBedspace Status (Occupied or not Occupied)(optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 HostelBedspace not found.
 * @apiError 500 server error.
 */
router.put("/hostel-bedspaces/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateHostelBedspace);

/**
 * @api {delete} /api/v1/hostel-bedspaces/{recordId} Delete hostel-bedspaces
 * @apiName DeleteHostelBedspace
 * @apiGroup HostelBedspace
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 HostelBedspace not found.
 * @apiError 401 master HostelBedspace only.
 */
router.delete("/hostel-bedspaces/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteHostelBedspace);

exports.default = router;
//# sourceMappingURL=routes.js.map