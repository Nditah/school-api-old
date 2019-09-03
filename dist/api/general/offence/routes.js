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
 * @api {get} /api/v1/offences?id={recordId} Retrieve one or all records
 * @apiName RetrieveOffence
 * @apiGroup Offence
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/offences?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Offences  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/offences", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchOffence);

/**
 * @api {post} /api/v1/offences Create offences
 * @apiName CreateOffence
 * @apiGroup Offence
 * @apiParam {String} offender_type Offence offender_type (required)
 * @apiParam {Number} offender_id Offence offender_id (required)
 * @apiParam {String} offence Offence offence (optional)
 * @apiParam {Date} offence_date Offence offence_date (optional)
 * @apiParam {String} description Offence description (optional)
 * @apiParam {String} offence_status Offence offence_status ("PENDING", "ARBITRATED")
 * @apiParam {String} verdict Offence verdict ("INNOCENT", "GUILTY")
 * @apiParam {Number} verdict_by Offence verdict_by (optional)
 * @apiParam {Date} verdict_date Offence verdict_date (optional)
 * @apiParam {String} verdict_remark Offence verdict_remark (optional)
 * @apiParam {Number} fine Offence fine (required)
 * @apiParam {String} discipline Offence discipline ("WARNING", "SUSPENSION", "DISMISSED")
 * @apiParam {String} suspension Offence suspension (optional)
 * @apiParam {Number} payment Offence paymentId (required)
 * @apiSuccess {Object} Offence Offence's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Offence not found.
 * @apiError 401 master access only.
 */
router.post("/offences", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createOffence);

/**
 * @api {put} /api/v1/offences/{recordId} Update offences
 * @apiName UpdateOffence
 * @apiGroup Offence
 * @apiPermission master
 * @apiParam {String} offender_type Offence offender_type
 * @apiParam {Number} offender_id Offence offender_id
 * @apiParam {String} offence Offence offence
 * @apiParam {Date} offence_date Offence offence_date
 * @apiParam {String} description Offence description
 * @apiParam {String} offence_status Offence offence_status ("PENDING", "ARBITRATED")
 * @apiParam {String} verdict Offence verdict ("INNOCENT", "GUILTY")
 * @apiParam {Number} verdict_by Offence verdict_by
 * @apiParam {Date} verdict_date Offence verdict_date
 * @apiParam {String} verdict_remark Offence verdict_remark
 * @apiParam {Number} fine Offence fine
 * @apiParam {String} discipline Offence discipline ("WARNING", "SUSPENSION", "DISMISSED")
 * @apiParam {String} suspension Offence suspension
 * @apiParam {Number} payment Offence paymentId
 * @apiSuccess {Object} Offence Offence's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Offence not found.
 * @apiError 401 master access only.
 */
router.put("/offences/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateOffence);

/**
 * @api {delete} /api/v1/offences/{recordId} Delete offences
 * @apiName DeleteOffence
 * @apiGroup Offence
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Offence not found.
 * @apiError 401 master access only.
 */
router.delete("/offences/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteOffence);

//* ================ OFFENCE TYPE ===================

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
 * @apiDescription OffenceTypes  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/offence-types", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchOffenceType);

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
router.post("/offence-types", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createOffenceType);

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
router.put("/offence-types/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateOffenceType);

/**
 * @api {delete} /api/v1/offence-types/{recordId} Delete offence-types
 * @apiName DeleteOffenceType
 * @apiGroup OffenceType
 * @apiParam {String} recordId ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 OffenceType not found.
 * @apiError 401 master access only.
 */
router.delete("/offence-types/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteOffenceType);

exports.default = router;
//# sourceMappingURL=routes.js.map