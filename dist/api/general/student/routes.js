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
 * @api {get} /api/v1/students?id={recordId} Retrieve one or all records
 * @apiName RetrieveStudent
 * @apiGroup Student
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/students?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of consolidated list of students from SECONDARY, PRIMARY, NURSERY etc
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
/**
 * @author 4Decoder
 * @description Student holds record of all students
 */
router.get("/students", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/students Create students
 * @apiName CreateStudent
 * @apiGroup Student
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} surname Student surname (optional)
 * @apiParam {String} given_name Student given_name (optional)
 * @apiParam {String} last_name Student surname (optional)
 * @apiParam {String} gender Student gender (optional)
 * @apiParam {Date} birth_date Student birth_date (optional)
 * @apiParam {String} address Student address (optional)
 * @apiParam {ObjectId} state Student state (optional)
 * @apiParam {ObjectId} county Student county (optional)
 * @apiParam {String} email Student email (optional)
 * @apiParam {String} phone Student office phone (optional)
 * @apiParam {String} password Student password (optional)
 * @apiParam {String} religion Student religion (optional)
 * @apiParam {ObjectId} classe Student classe (optional)
 * @apiParam {String} level Student level (optional)
 * @apiParam {String} subsidiary Student subsidiary (required)
 * @apiParam {ObjectId} hostel Student hostel (optional)
 * @apiParam {String} photo Student photo (optional)
 * @apiParam {Array} parents Student parents Array<ObjectId> (optional)
 * @apiSuccess {Object} Student Student's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Student not found.
 * @apiError 401 master access only.
 */
router.post("/students", _controller.createRecord);

/**
 * @api {put} /api/v1/students/{recordId} Update students
 * @apiName UpdateStudent
 * @apiGroup Student
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId required record ObjectId
 * @apiParam {String} surname Student surname (optional)
 * @apiParam {String} given_name Student given_name (optional)
 * @apiParam {String} gender Student gender (optional)
 * @apiParam {Date} birth_date Student birth_date (optional)
 * @apiParam {String} address Student address (optional)
 * @apiParam {String} state Student state (optional)
 * @apiParam {String} county Student county (optional)
 * @apiParam {String} email Student email (optional)
 * @apiParam {String} phone Student office phone (optional)
 * @apiParam {String} password Student password (optional)
 * @apiParam {String} religion Student religion (optional)
 * @apiParam {ObjectId} classe Student classe (optional)
 * @apiParam {String} level Student level (optional)
 * @apiParam {String} subsidiary Student subsidiary (required)
 * @apiParam {ObjectId} hostel Student hostel (optional)
 * @apiParam {String} photo Student photo (optional)
 * @apiParam {Array} parents Student parents Array<ObjectId> (optional)
 * @apiSuccess {Object} Student Student's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Student not found.
 * @apiError 401 master access only.
 */
router.put("/students/:recordId", [_authorization.checkAuth], _controller.updateRecord);

/**
 * @api {delete} /api/v1/students/{recordId} Delete students
 * @apiName DeleteStudent
 * @apiGroup Student
 * @apiParam {ObjectId} recordId record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Student not found.
 * @apiError 401 master access only.
 */
router.delete("/students/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

/**
 * @api {post} /api/v1/students/login Login Student
 * @apiName LoginStudent
 * @apiGroup Student
 * @apiPermission master
 * @apiParam {String} email Student email address (optional)
 * @apiParam {String} password Student password (optional)
 * @apiParam {String} phone Student mobile phone number (optional)
 * @apiParam {String} otp Student One-Time-Password sent to phone (optional)
 * @apiParam {String} type Login type "EMAIL", "PHONE", "OTP" (required)
 * @apiSuccess (Success 200) 200 Login Successful.
 * @apiError 404 Student not found.
 */
router.post("/students/login", _controller.login);

exports.default = router;
//# sourceMappingURL=routes.js.map