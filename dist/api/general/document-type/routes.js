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
 * @api {get} /api/v1/document-type?id={recordId} Retrieve one or all records
 * @apiName RetrieveDocumentType
 * @apiGroup DocumentType
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/document-type?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
/**
 * @author 4Decoder
 * @description DocumentType holds record of all document-type involving company vehicles
 */
router.get("/document-type", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/document-type Create document-type
 * @apiName CreateDocumentType
 * @apiGroup DocumentType
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name DocumentType name, title or label
 * @apiParam {String} issuer DocumentType issuer State|Church|School|Business Entity
 * @apiParam {String} type DocumentType type "USER|VEHICLE|ASSET|TRANSACTION" (required)
 * @apiParam {String} description DocumentType description (required)
 * @apiParam {Boolean} is_renewable DocumentType is_renewable (required)
 * @apiParam {Number} validity DocumentType validity (required)
 * @apiParam {Number} initial_charge DocumentType initial_charge (required)
 * @apiParam {Number} renewable_charge DocumentType renewable_charge (required)
 * @apiSuccess {Object} DocumentType DocumentType's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 DocumentType not found.
 * @apiError 401 master access only.
 */
router.post("/document-type", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/document-type/{recordId} Update document-type
 * @apiName UpdateDocumentType
 * @apiGroup DocumentType
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name DocumentType name, title or label
 * @apiParam {String} issuer DocumentType issuer State|Church|School|Business Entity
 * @apiParam {String} type DocumentType type "USER|VEHICLE|ASSET|TRANSACTION" (required)
 * @apiParam {String} description DocumentType description (required)
 * @apiParam {Boolean} is_renewable DocumentType is_renewable (required)
 * @apiParam {Number} validity DocumentType validity (required)
 * @apiParam {Number} initial_charge DocumentType initial_charge (required)
 * @apiParam {Number} renewable_charge DocumentType renewable_charge (required)
 * @apiSuccess {Object} DocumentType DocumentType's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 DocumentType not found.
 * @apiError 401 master access only.
 */
router.put("/document-type/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/document-type/{recordId} Delete document-type
 * @apiName DeleteDocumentType
 * @apiGroup DocumentType
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 DocumentType not found.
 * @apiError 401 master access only.
 */
router.delete("/document-type/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map