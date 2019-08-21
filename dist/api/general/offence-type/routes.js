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
 * @api {get} /api/v1/offence-types?id={recordId} Retrieve one or all records
 * @apiName RetrieveOffenceType
 * @apiGroup OffenceType
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/offence-types?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/offence-types", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/offence-types Create offence-types
 * @apiName CreateOffenceType
 * @apiGroup OffenceType
 * @apiParam {String} code OffenceType code (required)
 * @apiParam {String} offender_type OffenceType offender_type "PARTNER", "STAFF" (required)
 * @apiParam {String} name OffenceType name (required)
 * @apiParam {Number} fine OffenceType fine (required)
 * @apiParam {String} discipline OffenceType discipline
 * "WARNING", "SUSPENSION", "DISMISSED" (required)
 * @apiParam {Number} suspension_days OffenceType suspension_days (required)
 * @apiParam {String} description OffenceType description (required)
 * @apiSuccess {Object} OffenceType OffenceType's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 OffenceType not found.
 * @apiError 401 master access only.
 */
router.post("/offence-types", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/offence-types/{recordId} Update offence-types
 * @apiName UpdateOffenceType
 * @apiGroup OffenceType
 * @apiPermission master
 * @apiParam {String} code OffenceType code
 * @apiParam {String} offender_type OffenceType offender_type "PARTNER", "STAFF"
 * @apiParam {String} name OffenceType name
 * @apiParam {Number} fine OffenceType fine
 * @apiParam {String} discipline OffenceType discipline
 * "WARNING", "SUSPENSION", "DISMISSED"
 * @apiParam {Number} suspension_days OffenceType suspension_days
 * @apiParam {String} description OffenceType description
 * @apiSuccess {Object} OffenceType OffenceType's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 OffenceType not found.
 * @apiError 401 master access only.
 */
router.put("/offence-types/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/offence-types/{recordId} Delete offence-types
 * @apiName DeleteOffenceType
 * @apiGroup OffenceType
 * @apiParam {String} recordId ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 OffenceType not found.
 * @apiError 401 master access only.
 */
router.delete("/offence-types/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map