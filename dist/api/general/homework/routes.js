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
 * @api {get} /api/v1/homeworks?id={recordId} Retrieve one or all records
 * @apiName RetrieveHomeworks
 * @apiGroup Homework
 * @apiHeader {String} Authorization Bearer token
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/homeworks?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Homeworks  of permissible api routes staff can access
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/homeworks", [_authorization.checkAuth], _controller.fetchHomework);

/**
 * @api {post} /api/v1/homeworks Create homeworks
 * @apiName CreateHomework
 * @apiGroup Homework
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} code Homework code
 * @apiParam {String} code Homework code "TEST|CA|EXAM"
 * @apiParam {String} mode Homework mode "ORAL|PAPER|CBT|DEMO"
 * @apiParam {Date} written_date Homework written_date
 * @apiParam {Date} started_at Homework started dateime
 * @apiParam {Date} ended_at Homework ended dateime
 * @apiParam {Number} duration Homework duration
 * @apiParam {ObjectId} course Homework course
 * @apiParam {ObjectId} examiner Homework examiner ObjectId
 * @apiParam {Array} questionnaires Homework questionnaires array of ObjectId
 * @apiParam {ObjectId} classroom Homeworkclassroom or venue ObjectId
 * @apiParam {String} students Homework students or candidates array ObjectId
 * @apiParam {String} status Homework status "PENDING|DONE|CLOSED"
 * @apiSuccess {Object} Homework Homework's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Homework not found.
 * @apiError 401 master access only.
 */
router.post("/homeworks", [_authorization.checkAuth, _authorization.isValidCustomer], _controller.createHomework);

/**
 * @api {put} /api/v1/homeworks/{recordId} Update homeworks
 * @apiName UpdateHomework
 * @apiGroup Homework
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId.
 * @apiParam {String} code Homework code
 * @apiParam {String} code Homework code "TEST|CA|EXAM"
 * @apiParam {String} mode Homework mode "ORAL|PAPER|CBT|DEMO"
 * @apiParam {Date} written_date Homework written_date
 * @apiParam {Date} started_at Homework started dateime
 * @apiParam {Date} ended_at Homework ended dateime
 * @apiParam {Number} duration Homework duration
 * @apiParam {ObjectId} course Homework course
 * @apiParam {ObjectId} examiner Homework examiner ObjectId
 * @apiParam {Array} questionnaires Homework questionnaires array of ObjectId
 * @apiParam {ObjectId} classroom Homeworkclassroom or venue ObjectId
 * @apiParam {String} students Homework students or candidates array ObjectId
 * @apiParam {String} status Homework status "PENDING|DONE|CLOSED"
 * @apiSuccess {Object} Homework Homework's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Homework not found.
 * @apiError 401 master access only.
 */
router.put("/homeworks/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateHomework);

/**
 * @api {delete} /api/v1/homeworks/{recordId} Delete homeworks
 * @apiName DeleteHomework
 * @apiGroup Homework
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Homework not found.
 * @apiError 401 master access only.
 */
router.delete("/homeworks/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteHomework);

exports.default = router;
//# sourceMappingURL=routes.js.map