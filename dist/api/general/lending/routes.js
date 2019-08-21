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
 * @api {get} /api/lendings?id={recordId} Retrieve Lending record(s)
 * @apiName RetrieveLending
 * @apiGroup Lending
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/lendings
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/lendings", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/lendings Create lendings
 * @apiName CreateLending
 * @apiGroup Lending
 * @apiHeader {String} Authorization authorization token
 * @apiParam {ObjectId} book Lending book
 * @apiParam {ObjectId} user_type Lending related user_type ObjectId
 * @apiParam {ObjectId} staff_id Lending staff_id ObjectId
 * @apiParam {ObjectId} student_id Lending student_id ObjectId
 * @apiParam {ObjectId} classe_id Lending classe_id ObjectId
 * @apiParam {Date} request_date Lending request_date (optional)
 * @apiParam {Date} issued_date Lending issued_date (optional)
 * @apiParam {String} issued_by Lending issued_by (optional)
 * @apiParam {String} issuer_remark Lending issuer_remark (optional)
 * @apiParam {String} request_status Lending request_status
 *  "PENDING|COLLECTED|REVOKED"PENDING" optional)
 * @apiParam {Boolean} is_returnable Lending is_returnable (optional)
 * @apiParam {Date} expected_returned_date Lending expected_returned_date (optional)
 * @apiParam {Date} actual_returned_date Lending actual_returned_date (optional)
 * @apiParam {Date} collected_date Lending collected_date (optional)
 * @apiParam {String} collected_by Lending collected_by (optional)
 * @apiParam {String} collected_remark Lending collected_remark (optional)
 * @apiSuccess {Object} Lending Lending's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lending not found.
 * @apiError 401 master access only.
 */
router.post("/lendings", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/lendings/{recordId} Update lendings
 * @apiName UpdateLending
 * @apiGroup Lending
 * @apiHeader {String} Authorization authorization token
 * @apiParam {ObjectId} book Lending book
 * @apiParam {ObjectId} user_type Lending related user_type ObjectId
 * @apiParam {ObjectId} staff_id Lending staff_id ObjectId
 * @apiParam {ObjectId} student_id Lending student_id ObjectId
 * @apiParam {ObjectId} classe_id Lending classe_id ObjectId
 * @apiParam {Date} request_date Lending request_date (optional)
 * @apiParam {Date} issued_date Lending issued_date (optional)
 * @apiParam {String} issued_by Lending issued_by (optional)
 * @apiParam {String} issuer_remark Lending issuer_remark (optional)
 * @apiParam {String} request_status Lending request_status
 *  "PENDING|COLLECTED|REVOKED"PENDING" optional)
 * @apiParam {Boolean} is_returnable Lending is_returnable (optional)
 * @apiParam {Date} expected_returned_date Lending expected_returned_date (optional)
 * @apiParam {Date} actual_returned_date Lending actual_returned_date (optional)
 * @apiParam {Date} collected_date Lending collected_date (optional)
 * @apiParam {String} collected_by Lending collected_by (optional)
 * @apiParam {String} collected_remark Lending collected_remark (optional)
 * @apiSuccess {Object} Lending Lending's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lending not found.
 * @apiError 401 master access only.
 */
router.put("/lendings/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/lendings/{recordId} Delete lendings
 * @apiName DeleteLending
 * @apiGroup Lending
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Lending not found.
 * @apiError 401 master access only.
 */
router.delete("/lendings/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map