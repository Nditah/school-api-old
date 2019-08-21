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
 * @api {get} /api/v1/class-rooms?id={recordId} Retrieve one or all records
 * @apiName RetrieveClassroom
 * @apiGroup Classroom
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
router.get("/class-rooms", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/class-rooms Create class-rooms
 * @apiName CreateClassroom
 * @apiGroup Classroom
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name Classroom full name (required)
 * @apiParam {String} block Classroom block code (required)
 * @apiParam {String} level Classroom levels (required)
 * @apiParam {String} subsidiary Classroom subsidiary (required)
 * @apiParam {String} classe Classroom classe (required)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Classroom not found.
 * @apiError 500 server error.
 */
router.post("/class-rooms", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/class-rooms/{recordId} Update class-rooms
 * @apiName UpdateClassroom
 * @apiGroup Classroom
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name Classroom full name (required)
 * @apiParam {String} block Classroom block code (required)
 * @apiParam {String} level Classroom levels (required)
 * @apiParam {String} subsidiary Classroom subsidiary (required)
 * @apiParam {String} classe Classroom classe (required)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Classroom not found.
 * @apiError 500 server error.
 */
router.put("/class-rooms/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/class-rooms/{recordId} Delete class-rooms
 * @apiName DeleteClassroom
 * @apiGroup Classroom
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Classroom not found.
 * @apiError 401 master Classroom only.
 */
router.delete("/class-rooms/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map