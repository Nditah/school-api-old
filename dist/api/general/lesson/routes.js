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
 * @api {get} /api/lessons?id={recordId} Retrieve one or all records
 * @apiName RetrieveLesson
 * @apiGroup Lesson
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/lessons?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of Lesson the school.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/lessons", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/lessons Create lessons
 * @apiName CreateLesson
 * @apiGroup Lesson
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} title Lesson title (required)
 * @apiParam {Date} duration Lesson time duration (required)
 * @apiParam {String} objective Lesson objective (required)
 * @apiParam {Number} unit Lesson unit (required)
 * @apiParam {ObjectId} teacher Lesson teacher (optional)
 * @apiParam {String} description Lesson description (optional)
 * @apiParam {ObjectId} course Lesson Course (optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Lesson not found.
 * @apiError 500 server error.
 */
router.post("/lessons", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/lessons/{recordId} Update lessons
 * @apiName UpdateLesson
 * @apiGroup Lesson
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} title Lesson title (required)
 * @apiParam {Date} duration Lesson time duration (required)
 * @apiParam {String} objective Lesson objective (required)
 * @apiParam {Number} unit Lesson unit (required)
 * @apiParam {ObjectId} teacher Lesson teacher (optional)
 * @apiParam {String} description Lesson description (optional)
 * @apiParam {ObjectId} course Lesson Course (optional)
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Lesson not found.
 * @apiError 500 server error.
 */
router.put("/lessons/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/lessons/{recordId} Delete lessons
 * @apiName DeleteLesson
 * @apiGroup Lesson
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Lesson not found.
 * @apiError 401 master Lesson only.
 */
router.delete("/lessons/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map