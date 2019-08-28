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
 * @api {get} /api/v1/parents?id={recordId} Retrieve one or all records
 * @apiName RetrieveParent
 * @apiGroup Parent
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/parents?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of consolidated list of parents of students in the school.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/parents", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/parents Create parents
 * @apiName CreateParent
 * @apiGroup Parent
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} title Parent title (optional)
 * @apiParam {String} surname Parent surname (optional)
 * @apiParam {String} given_name Parent given_name (optional)
 * @apiParam {String} gender Parent gender (optional)
 * @apiParam {Date} birth_date Parent birth_date (optional)
 * @apiParam {String} marital_status Parent marital_status (optional)
 * @apiParam {String} address Parent address (optional)
 * @apiParam {ObjectId} state Parent state (optional)
 * @apiParam {ObjectId} county Parent county (optional)
 * @apiParam {String} email Parent email (optional)
 * @apiParam {String} phone Parent office phone (optional)
 * @apiParam {String} password Parent password (optional)
 * @apiParam {String} profession Parent profession (optional)
 * @apiParam {String} employment_status Parent employment_status (required)
 * @apiParam {ObjectId} students Parent students (optional)
 * @apiSuccess {Object} Parent Parent's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Parent not found.
 * @apiError 401 master access only.
 */
router.post("/parents", _controller.createRecord);

/**
 * @api {put} /api/v1/parents/{recordId} Update parents
 * @apiName UpdateParent
 * @apiGroup Parent
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId required record ObjectId
 * @apiParam {String} title Parent title (optional)
 * @apiParam {String} surname Parent surname (optional)
 * @apiParam {String} given_name Parent given_name (optional)
 * @apiParam {String} gender Parent gender (optional)
 * @apiParam {Date} birth_date Parent birth_date (optional)
 * @apiParam {String} marital_status Parent marital_status (optional)
 * @apiParam {String} address Parent address (optional)
 * @apiParam {ObjectId} state Parent state (optional)
 * @apiParam {ObjectId} county Parent county (optional)
 * @apiParam {String} email Parent email (optional)
 * @apiParam {String} phone Parent office phone (optional)
 * @apiParam {String} password Parent password (optional)
 * @apiParam {String} profession Parent profession (optional)
 * @apiParam {String} employment_status Parent employment_status (required)
 * @apiParam {ObjectId} students Parent students (optional)
 * @apiParam {ObjectId} updated_by id of the staff who created the record
 * @apiSuccess {Object} Parent Parent's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Parent not found.
 * @apiError 401 master access only.
 */
router.put("/parents/:recordId", [_authorization.checkAuth], _controller.updateRecord);

/**
 * @api {delete} /api/v1/parents/{recordId} Delete parents
 * @apiName DeleteParent
 * @apiGroup Parent
 * @apiParam {ObjectId} recordId record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Parent not found.
 * @apiError 401 master access only.
 */
router.delete("/parents/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

/**
 * @api {post} /api/v1/parents/login Login Parent
 * @apiName LoginParent
 * @apiGroup Parent
 * @apiParam {String} email Parent email address (optional)
 * @apiParam {String} password Parent password (optional)
 * @apiParam {String} phone Parent mobile phone number (optional)
 * @apiParam {String} otp Parent One-Time-Password sent to phone (optional)
 * @apiParam {String} type Login type "EMAIL", "PHONE", "OTP" (required)
 * @apiSuccess (Success 200) 200 Login Successful.
 * @apiError 404 Parent not found.
 */
router.post("/parents/login", _controller.login);

exports.default = router;
//# sourceMappingURL=routes.js.map