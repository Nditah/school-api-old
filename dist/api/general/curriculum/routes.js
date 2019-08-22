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
router.get("/curriculums", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/curriculums Create curriculums
 * @apiName CreateCurriculum
 * @apiGroup Curriculum
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} description Curriculum description String (required)
 * @apiParam {String} scheme Curriculum scheme String
 * @apiParam {ObjectId} staff_id Curriculum staff ObjectId
 * @apiParam {ObjectId} book_id Curriculum Book ObjectId
 * @apiSuccess {Object} Curriculum Staff's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Curriculum not found.
 * @apiError 401 master access only.
 */
router.post("/curriculums", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/curriculums/{recordId} Update curriculums
 * @apiName UpdateCurriculum
 * @apiGroup Curriculum
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} book_id Curriculum Book ObjectId (required)
 * @apiParam {String} description Curriculum description
 * @apiSuccess {Object} Curriculum Staff's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Curriculum not found.
 * @apiError 401 master access only.
 */
router.put("/curriculums/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/curriculums/{recordId} Delete curriculums
 * @apiName DeleteCurriculum
 * @apiGroup Curriculum
 * @apiPermission master
 * @apiParam {String} recordId ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Curriculum not found.
 * @apiError 401 master access only.
 */
router.delete("/curriculums/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map