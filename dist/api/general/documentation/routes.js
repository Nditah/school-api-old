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
 * @api {get} /api/v1/documentations?id={recordId} Retrieve one or all records
 * @apiName RetrieveDocumentation
 * @apiGroup Documentation
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/documentations?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/documentations", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/documentations Create documentations
 * @apiName CreateDocumentation
 * @apiGroup Documentation
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} document_type_id Documentation DocumentType ObjectId (required)
 * @apiParam {String} type Documentation type owner
 * "ASSET|PARTNER|STAFF|VEHICLE|SALESORDER|PURCHASE" (required)
 * @apiParam {ObjectId} asset_id Documentation asset ObjectId
 * @apiParam {ObjectId} staff_id Documentation staff ObjectId
 * @apiParam {ObjectId} partner_id Documentation partner ObjectId
 * @apiParam {ObjectId} customer_id Documentation customer ObjectId
 * @apiParam {ObjectId} vehicle_id Documentation vehicle ObjectId
 * @apiParam {ObjectId} sales_order_id Documentation sales_order ObjectId
 * @apiParam {ObjectId} purchase_order_id Documentation PurchaseOrder ObjectId
 * @apiParam {String} reference Documentation reference number
 * @apiParam {Date} last_renewal Documentation previous date renewal
 * @apiParam {Date} next_renewal Documentation upcoming renewal
 * @apiParam {ObjectId} renewal_by Documentation renewal_by Staff responsible for the task
 * @apiParam {Number} amount Documentation amount spent or fee|charge for renewal
 * @apiParam {String} description Documentation description
 * @apiParam {Boolean} is_renewed Documentation is_renewed
 * @apiParam {Boolean} is_validity Documentation is_validity
 * @apiSuccess {Object} Documentation Documentation's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Documentation not found.
 * @apiError 401 master access only.
 */
router.post("/documentations", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/documentations/{recordId} Update documentations
 * @apiName UpdateDocumentation
 * @apiGroup Documentation
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {ObjectId} document_type_id Documentation DocumentType ObjectId (required)
 * @apiParam {String} type Documentation type owner
 * "ASSET|PARTNER|STAFF|VEHICLE|SALESORDER|PURCHASE" (required)
 * @apiParam {ObjectId} asset_id Documentation asset ObjectId
 * @apiParam {ObjectId} staff_id Documentation staff ObjectId
 * @apiParam {ObjectId} partner_id Documentation partner ObjectId
 * @apiParam {ObjectId} customer_id Documentation customer ObjectId
 * @apiParam {ObjectId} vehicle_id Documentation vehicle ObjectId
 * @apiParam {ObjectId} sales_order_id Documentation sales_order ObjectId
 * @apiParam {ObjectId} purchase_order_id Documentation PurchaseOrder ObjectId
 * @apiParam {String} reference Documentation reference number
 * @apiParam {Date} last_renewal Documentation previous date renewal
 * @apiParam {Date} next_renewal Documentation upcoming renewal
 * @apiParam {ObjectId} renewal_by Documentation renewal_by Staff responsible for the task
 * @apiParam {Number} amount Documentation amount spent or fee|charge for renewal
 * @apiParam {String} description Documentation description
 * @apiParam {Boolean} is_renewed Documentation is_renewed
 * @apiParam {Boolean} is_validity Documentation is_validity
 * @apiSuccess {Object} Documentation Documentation's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Documentation not found.
 * @apiError 401 master access only.
 */
router.put("/documentations/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/documentations/{recordId} Delete documentations
 * @apiName DeleteDocumentation
 * @apiGroup Documentation
 * @apiPermission master
 * @apiParam {String} recordId ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Documentation not found.
 * @apiError 401 master access only.
 */
router.delete("/documentations/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map