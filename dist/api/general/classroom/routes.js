"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _authorization = require("../../../middleware/authorization");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

var router = _express2.default.Router();

/**
 * @api {get} /api/class-rooms?id={recordId} Retrieve one or all records
 * @apiName RetrieveClassRoom
 * @apiGroup ClassRoom
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/class-rooms?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of Class Rooms in the school.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/class-rooms", [_authorization.checkAuth, _authorization.isValidStaff], fetchRecord);

/**
 * @api {post} /api/class-rooms Create class-rooms
 * @apiName CreateClassRoom
 * @apiGroup ClassRoom
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name ClassRoom full name (required)
 * @apiParam {String} block ClassRoom block code (required)
 * @apiParam {String} level ClassRoom levels (required)
 * @apiParam {String} subsidiary ClassRoom subsidiary (required)
 * @apiParam {String} classe ClassRoom classe (required)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 ClassRoom not found.
 * @apiError 500 server error.
 */
router.post("/class-rooms", [_authorization.checkAuth, _authorization.isValidStaff], createRecord);

/**
 * @api {put} /api/class-rooms/{recordId} Update class-rooms
 * @apiName UpdateClassRoom
 * @apiGroup ClassRoom
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name ClassRoom full name (required)
 * @apiParam {String} block ClassRoom block code (required)
 * @apiParam {String} level ClassRoom levels (required)
 * @apiParam {String} subsidiary ClassRoom subsidiary (required)
 * @apiParam {String} classe ClassRoom classe (required)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 ClassRoom not found.
 * @apiError 500 server error.
 */
router.put("/class-rooms/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], updateRecord);

/**
 * @api {delete} /api/class-rooms/{recordId} Delete class-rooms
 * @apiName DeleteClassRoom
 * @apiGroup ClassRoom
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 ClassRoom not found.
 * @apiError 401 master ClassRoom only.
 */
router.delete("/class-rooms/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map