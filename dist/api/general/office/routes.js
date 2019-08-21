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
 * @api {get} /api/v1/offices?id={recordId} Retrieve one or all records
 * @apiName RetrieveOffice
 * @apiGroup Office
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/offices?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of Staff Office in a hierarchy that give staff certain privileges.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/offices", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/offices Create offices
 * @apiName CreateOffice
 * @apiGroup Office
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name Office name (required)
 * @apiParam {String} code Office code
 * @apiParam {String} email Office email
 * @apiParam {String} phone Office phone number
 * @apiParam {String} functions Office list tasks the office performs
 * @apiParam {String} description Office job-description staff performs
 * @apiParam {Number} hierarchy Office hierarchy [1-7]
 * @apiParam {Enum} office_type Office office_type
 * "PRINCIPAL|VICE-PRINCIPAL|ACADEMIC|ADMINISTRATIVE"
 * @apiParam {Enum} subsidiary Office subsidiary "NURSRY|PRIMARY|SECONDARY|PRE-NURSRY"
 * @apiParam {ObjectId} office_above Office above this.
 * @apiParam {ObjectId} head Office Head Staff Id
 * @apiParam {ObjectId} assistant Office Assistant Head Staff Id
 * @apiSuccess {Object} Office Office's data.
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Office not found.
 * @apiError 500 server error.
 */
router.post("/offices", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/offices/{recordId} Update offices
 * @apiName UpdateOffice
 * @apiGroup Office
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name Office name (required)
 * @apiParam {String} code Office code
 * @apiParam {String} email Office email
 * @apiParam {String} phone Office phone number
 * @apiParam {String} functions Office list tasks the office performs
 * @apiParam {String} description Office job-description staff performs
 * @apiParam {Number} hierarchy Office hierarchy [1-7]
 * @apiParam {Enum} office_type Office office_type
 *  "PRINCIPAL|VICE-PRINCIPAL|ACADEMIC|ADMINISTRATIVE"
 * @apiParam {Enum} subsidiary Office subsidiary "NURSRY|PRIMARY|SECONDARY|PRE-NURSRY"
 * @apiParam {ObjectId} office_above Office above this.
 * @apiParam {ObjectId} head Office Head Staff Id
 * @apiParam {ObjectId} assistant Office Assistant Head Staff Id
 * @apiSuccess {Object} Office Office's data.
 * @apiError {Object} 422 Some parameters may contain invalid values.
 * @apiError 404 Office not found.
 * @apiError 500 server error.
 */
router.put("/offices/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/offices/{recordId} Delete offices
 * @apiName DeleteOffice
 * @apiGroup Office
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Office not found.
 * @apiError 401 master office only.
 */
router.delete("/offices/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map