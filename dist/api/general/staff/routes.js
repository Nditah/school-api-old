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
 * @api {get} /api/v1/staff?id={recordId} Retrieve Staff records
 * @apiName RetrieveStaff
 * @apiGroup Staff
 * @apiHeader {String} Authorization Bearer token
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/staff?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of staff in the school.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/staff", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/staff Create a Staff record
 * @apiName CreateStaff
 * @apiGroup Staff
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} title Staff title (optional)
 * @apiParam {String} surname Staff surname (optional)
 * @apiParam {String} given_name Staff given_name (optional)
 * @apiParam {String} gender Staff gender (optional)
 * @apiParam {Date} birth_date Staff birth_date (optional)
 * @apiParam {String} marital_status Staff marital_status (optional)
 * @apiParam {String} phone Staff office phone (optional)
 * @apiParam {String} phone_personal Staff phone_personal (optional)
 * @apiParam {String} address Staff address (optional)
 * @apiParam {ObjectId} state Staff state (optional)
 * @apiParam {ObjectId} county Staff county (optional)
 * @apiParam {String} email Staff email (optional)
 * @apiParam {String} staff_type Staff staff_type (optional)
 * @apiParam {ObjectId} classe Staff classe (optional)
 * @apiParam {ObjectId} subject Staff subject (optional)
 * @apiParam {String} password Staff password (optional)
 * @apiParam {String} kin Staff kin (required)
 * @apiParam {String} kin_phone Staff kin_phone (required)
 * @apiParam {String} kin_address Staff kin_address (required)
 * @apiParam {String} guarantor1 Staff guarantor1 (required)
 * @apiParam {String} guarantor1_phone Staff guarantor1_phone (required)
 * @apiParam {String} guarantor1_address Staff guarantor1_address (required)
 * @apiParam {String} guarantor2 Staff guarantor2 (optional)
 * @apiParam {String} guarantor2_phone Staff guarantor2_phone (optional)
 * @apiParam {String} guarantor2_address Staff guarantor2_address (optional)
 * @apiParam {String} profession Staff profession (optional)
 * @apiParam {String} qualification Staff qualification (optional)
 * @apiParam {String} employment_status Staff employment_status (required)
 * @apiParam {Number} tax Staff tax (optional)
 * @apiParam {Number} basic_salary Staff basic_salary (optional)
 * @apiParam {Number} bonus Staff bonus (optional)
 * @apiParam {Number} entertainment_allowance Staff entertainment_allowance (optional)
 * @apiParam {Number} house_allowance Staff house_allowance (optional)
 * @apiParam {Number} lunch_allowance Staff lunch_allowance (optional)
 * @apiParam {Number} medical_allowance Staff medical_allowance (optional)
 * @apiParam {Number} transport_allowance Staff transport_allowance (optional)
 * @apiParam {Number} utility_allowance Staff utility_allowance (optional)
 * @apiParam {Number} welfare_allowance Staff welfare_allowance (optional)
 * @apiParam {Number} pension Staff pension (optional)
 * @apiParam {Number} assurance Staff assurance (optional)
 * @apiParam {ObjectId} bank_name Staff bank_name (optional)
 * @apiParam {String} bank_account_number Staff bank_account_number (optional)
 * @apiParam {String} bank_account_name Staff bank_account_name (optional)
 * @apiParam {String} rank Staff rank (optional)
 * @apiParam {ObjectId} office Staff office (required)
 * @apiParam {String} role Staff role is an array of office duties (required)
 * @apiParam {String} subsidiary Staff subsidiary (required)
 * @apiParam {String} remark Staff remark (optional)
 * @apiParam {String} photo Staff photo (optional)
 * @apiParam {Boolean} is_salary_payable Staff is_salary_payable (optional)
 * @apiParam {Boolean} is_document_complete Staff is_document_complete (optional)
 * @apiParam {ObjectId} approved_by Staff approved_by (optional)
 * @apiParam {Date} approved_date Staff approved_date (optional)
 * @apiParam {ObjectId} disengaged_by Staff disengaged_by (optional)
 * @apiParam {Date} disengaged_date Staff disengaged_date (optional)
 * @apiSuccess {Object} Staff Staff's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Staff not found.
 * @apiError 401 master access only.
 */
router.post("/staff", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/staff/{recordId} Update a Staff record
 * @apiName UpdateStaff
 * @apiGroup Staff
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId required record ObjectId
 * @apiParam {String} title Staff title (optional)
 * @apiParam {String} surname Staff surname (optional)
 * @apiParam {String} given_name Staff given_name (optional)
 * @apiParam {String} gender Staff gender (optional)
 * @apiParam {Date} birth_date Staff birth_date (optional)
 * @apiParam {String} marital_status Staff marital_status (optional)
 * @apiParam {String} phone Staff office phone (optional)
 * @apiParam {String} phone_personal Staff phone_personal (optional)
 * @apiParam {String} address Staff address (optional)
 * @apiParam {ObjectId} state Staff state (optional)
 * @apiParam {ObjectId} county Staff county (optional)
 * @apiParam {String} email Staff email (optional)
 * @apiParam {String} staff_type Staff staff_type (optional)
 * @apiParam {ObjectId} classe Staff classe (optional)
 * @apiParam {ObjectId} subject Staff subject (optional)
 * @apiParam {String} password Staff password (optional)
 * @apiParam {String} kin Staff kin (required)
 * @apiParam {String} kin_phone Staff kin_phone (required)
 * @apiParam {String} kin_address Staff kin_address (required)
 * @apiParam {String} guarantor1 Staff guarantor1 (required)
 * @apiParam {String} guarantor1_phone Staff guarantor1_phone (required)
 * @apiParam {String} guarantor1_address Staff guarantor1_address (required)
 * @apiParam {String} guarantor2 Staff guarantor2 (optional)
 * @apiParam {String} guarantor2_phone Staff guarantor2_phone (optional)
 * @apiParam {String} guarantor2_address Staff guarantor2_address (optional)
 * @apiParam {String} profession Staff profession (optional)
 * @apiParam {String} qualification Staff qualification (optional)
 * @apiParam {String} employment_status Staff employment_status (required)
 * @apiParam {Number} tax Staff tax (optional)
 * @apiParam {Number} basic_salary Staff basic_salary (optional)
 * @apiParam {Number} bonus Staff bonus (optional)
 * @apiParam {Number} entertainment_allowance Staff entertainment_allowance (optional)
 * @apiParam {Number} house_allowance Staff house_allowance (optional)
 * @apiParam {Number} lunch_allowance Staff lunch_allowance (optional)
 * @apiParam {Number} medical_allowance Staff medical_allowance (optional)
 * @apiParam {Number} transport_allowance Staff transport_allowance (optional)
 * @apiParam {Number} utility_allowance Staff utility_allowance (optional)
 * @apiParam {Number} welfare_allowance Staff welfare_allowance (optional)
 * @apiParam {Number} pension Staff pension (optional)
 * @apiParam {Number} assurance Staff assurance (optional)
 * @apiParam {ObjectId} bank_name Staff bank_name (optional)
 * @apiParam {String} bank_account_number Staff bank_account_number (optional)
 * @apiParam {String} bank_account_name Staff bank_account_name (optional)
 * @apiParam {String} rank Staff rank (optional)
 * @apiParam {ObjectId} office Staff office (required)
 * @apiParam {String} role Staff role is an array of office duties (required)
 * @apiParam {String} subsidiary Staff subsidiary (required)
 * @apiParam {String} remark Staff remark (optional)
 * @apiParam {String} photo Staff photo (optional)
 * @apiParam {Boolean} is_salary_payable Staff is_salary_payable (optional)
 * @apiParam {Boolean} is_document_complete Staff is_document_complete (optional)
 * @apiParam {ObjectId} approved_by Staff approved_by (optional)
 * @apiParam {Date} approved_date Staff approved_date (optional)
 * @apiParam {ObjectId} disengaged_by Staff disengaged_by (optional)
 * @apiParam {Date} disengaged_date Staff disengaged_date (optional)
 * @apiSuccess {Object} Staff Staff's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Staff not found.
 * @apiError 401 master access only.
 */
router.put("/staff/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/staff/{recordId} Delete a Staff record
 * @apiName DeleteStaff
 * @apiGroup Staff
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Staff not found.
 * @apiError 401 master access only.
 */
router.delete("/staff/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

/**
 * @api {post} /api/v1/staff/login Login Staff
 * @apiName LoginStaff
 * @apiGroup Staff
 * @apiPermission master
 * @apiParam {String} email Staff email address (optional)
 * @apiParam {String} password Staff password (optional)
 * @apiParam {String} office_phone Staff official phone number (optional)
 * @apiParam {String} otp Staff One-Time-Password sent to phone (optional)
 * @apiParam {String} type Login type "EMAIL", "PHONE", "OTP" (required)
 * @apiSuccess (Success 200) 200 Login Successful.
 * @apiError 404 Staff not found.
 */
router.post("/staff/login", _controller.login);

exports.default = router;
//# sourceMappingURL=routes.js.map