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
 * @api {get} /api/timetables?id={recordId} Retrieve one or all records
 * @apiName RetrieveStore
 * @apiGroup Store
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i http://localhost/api/timetables?id=2&fields=id,created_at,updated_at
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i http://localhost/api/timetables?offset=10&limit=50
 * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} fields Comma-separated list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/timetables", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/timetables Create timetables
 * @apiName CreateTimetables
 * @apiGroup Timetables
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name Timetable name
 * @apiParam {String} description Timetable description
 * @apiParam {ObjectId} classe School Classes 
 * @apiParam {ObjectId} subject_id Subject ObjectId
 * @apiParam {Array} teacher_id Timetable teacher_id
 * @apiParam {Number} duration Duration of subject
 * @apiSuccess {Object} Timetable Timetable's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Timetable not found.
 * @apiError 401 master access only.
 */
router.post("/timetables", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/timetables/{recordId} Update timetables
 * @apiName UpdateTimetable
 * @apiGroup Timetable
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name Timetable name
 * @apiParam {String} description Timetable description
 * @apiParam {ObjectId} classe School Classes 
 * @apiParam {ObjectId} subject_id Subject ObjectId
 * @apiParam {Array} teacher_id Timetable teacher_id
 * @apiParam {Number} duration Duration of subject
 * @apiSuccess {Object} Timetable Timetable's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Timetable not found.
 * @apiError 401 master access only.
 */
router.put("/timetables/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/timetables/{recordId} Delete timetables
 * @apiName DeleteTimetable
 * @apiGroup Timetable
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Timetable not found.
 * @apiError 401 master access only.
 */
router.delete("/timetables/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map