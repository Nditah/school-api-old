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
 * @api {get} /api/v1/curriculums?id={recordId} Retrieve one or all records
 * @apiName RetrieveCurriculum
 * @apiGroup Curriculum
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/curriculums?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {String} description Curriculum description String (required)
 * @apiParam {String} scheme Curriculum scheme String
 * @apiParam {ObjectId} staff_id Curriculum staff ObjectId
 * @apiParam {ObjectId} book_id Curriculum Book ObjectId
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/curriculums", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchCurriculum);

/**
 * @api {post} /api/v1/curriculums Create curriculums
 * @apiName CreateCurriculum
 * @apiGroup Curriculum
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} code Curriculum code (required)
 * @apiParam {String} title Curriculum title (required)
 * @apiParam {String} description Curriculum description (required)
 * @apiParam {Number} duration Curriculum duration (required)
 * @apiParam {String} term Curriculum term (required)
 * @apiParam {Number} level Curriculum level (required)
 * @apiParam {String} subsidiary Curriculum subsidiary (required)
 * @apiParam {ObjectId} course Curriculum course
 * @apiParam {ObjectId} classes Curriculum classes Array<ObjectId>
 * @apiParam {ObjectId} subject Curriculum subject (required)
 * @apiParam {Array} books Curriculum books Array<ObjectId>
 * @apiParam {Array} materials Curriculum materials Array<ObjectId>
 * @apiParam {ObjectId} staff Curriculum staff ObjectId
 * @apiParam {ObjectId} book Curriculum Book ObjectId
 * @apiSuccess {Object} Curriculum Staff's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Curriculum not found.
 * @apiError 401 master access only.
 */
router.post("/curriculums", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createCurriculum);

/**
 * @api {put} /api/v1/curriculums/{recordId} Update curriculums
 * @apiName UpdateCurriculum
 * @apiGroup Curriculum
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId ObjectId
 * @apiParam {String} code Curriculum code (required)
 * @apiParam {String} title Curriculum title (required)
 * @apiParam {String} description Curriculum description (required)
 * @apiParam {Number} duration Curriculum duration (required)
 * @apiParam {String} term Curriculum term (required)
 * @apiParam {Number} level Curriculum level (required)
 * @apiParam {String} subsidiary Curriculum subsidiary (required)
 * @apiParam {ObjectId} course Curriculum course
 * @apiParam {ObjectId} classes Curriculum classes Array<ObjectId>
 * @apiParam {ObjectId} subject Curriculum subject (required)
 * @apiParam {Array} books Curriculum books Array<ObjectId>
 * @apiParam {Array} materials Curriculum materials Array<ObjectId>
 * @apiParam {ObjectId} staff Curriculum staff ObjectId
 * @apiParam {ObjectId} book Curriculum Book ObjectId
 * @apiSuccess {Object} Curriculum Staff's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Curriculum not found.
 * @apiError 401 master access only.
 */
router.put("/curriculums/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateCurriculum);

/**
 * @api {delete} /api/v1/curriculums/{recordId} Delete curriculums
 * @apiName DeleteCurriculum
 * @apiGroup Curriculum
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Curriculum not found.
 * @apiError 401 master access only.
 */
router.delete("/curriculums/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteCurriculum);

//* ==============LESSON ==================

/**
 * @api {get} /api/v1/lessons?id={recordId} Retrieve one or all records
 * @apiName RetrieveLesson
 * @apiGroup Lesson
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/lessons?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Lessons of Lesson the school.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/lessons", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchLesson);

/**
 * @api {post} /api/v1/lessons Create lessons
 * @apiName CreateLesson
 * @apiGroup Lesson
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} code Lesson code (required)
 * @apiParam {String} title Lesson title (required)
 * @apiParam {Number} duration Lesson duration (required)
 * @apiParam {Date} start_date Lesson start_date (required)
 * @apiParam {Date} end_date Lesson end_date (required)
 * @apiParam {String} objective Lesson objective (required)
 * @apiParam {Number} module Lesson module (required)
 * @apiParam {Number} unit Lesson unit (required)
 * @apiParam {String} description Lesson description
 * @apiParam {ObjectId} teacher Lesson teacher (required)
 * @apiParam {ObjectId} timetable Lesson timetable
 * @apiParam {ObjectId} classe Lesson classe
 * @apiParam {ObjectId} course Lesson course
 * @apiParam {ObjectId} curriculum Lesson curriculum (required)
 * @apiParam {String} remark Lesson remark
 * @apiParam {String} status Lesson status
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Lesson not found.
 * @apiError 500 server error.
 */
router.post("/lessons", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createLesson);

/**
 * @api {put} /api/v1/lessons/{recordId} Update lessons
 * @apiName UpdateLesson
 * @apiGroup Lesson
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} code Lesson code (required)
 * @apiParam {String} title Lesson title (required)
 * @apiParam {Number} duration Lesson duration (required)
 * @apiParam {Date} start_date Lesson start_date (required)
 * @apiParam {Date} end_date Lesson end_date (required)
 * @apiParam {String} objective Lesson objective (required)
 * @apiParam {Number} module Lesson module (required)
 * @apiParam {Number} unit Lesson unit (required)
 * @apiParam {String} description Lesson description
 * @apiParam {ObjectId} teacher Lesson teacher (required)
 * @apiParam {ObjectId} timetable Lesson timetable
 * @apiParam {ObjectId} classe Lesson classe
 * @apiParam {ObjectId} course Lesson course
 * @apiParam {ObjectId} curriculum Lesson curriculum (required)
 * @apiParam {String} remark Lesson remark
 * @apiParam {String} status Lesson status
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Lesson not found.
 * @apiError 500 server error.
 */
router.put("/lessons/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateLesson);

/**
 * @api {delete} /api/v1/lessons/{recordId} Delete lessons
 * @apiName DeleteLesson
 * @apiGroup Lesson
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Lesson not found.
 * @apiError 401 master Lesson only.
 */
router.delete("/lessons/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteLesson);

exports.default = router;
//# sourceMappingURL=routes.js.map