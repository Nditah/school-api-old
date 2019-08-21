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
 * @api {get} /api/v1/stocks?id={recordId} Retrieve one or all records
 * @apiName RetrieveStock
 * @apiGroup Stock
  * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/stocks?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/stocks", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/stocks Create stocks
 * @apiName CreateStock
 * @apiGroup Stock
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} type Stock type of goods
 *  "VEHICLE", "ASSET", "MATERIAL", "PRODUCT", "SPARE"  (required)
 * @apiParam {String} source Stock source of goods "PURCHASED|PRODUCED"  (required)
 * @apiParam {String} subsidiary Stock subsidiary (required)
 * @apiParam {ObjectId} store_id Stock store ObjectId (required)
 * @apiParam {ObjectId} asset_id Stock Asset ObjectId
 * @apiParam {ObjectId} material_id Stock Raw Material ObjectId
 * @apiParam {ObjectId} product_id Stock finished Product ObjectId
 * @apiParam {ObjectId} vehicle_id Stock Vehicle ObjectId
 * @apiParam {Number} quantity Stock quantity (required)
 * @apiParam {Number} price Stock price (required)
 * @apiParam {Number} min_order Stock minimum order quantity
 * @apiSuccess {Object} Stock Stock's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Stock not found.
 * @apiError 401 master access only.
 */
router.post("/stocks", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/stocks/{recordId} Update stocks
 * @apiName UpdateStock
 * @apiGroup Stock
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} type Stock type of goods
 *  "VEHICLE", "ASSET", "MATERIAL", "PRODUCT", "SPARE"  (required)
 * @apiParam {String} source Stock source of goods "PURCHASED|PRODUCED"  (required)
 * @apiParam {String} subsidiary Stock subsidiary (required)
 * @apiParam {ObjectId} store_id Stock store ObjectId (required)
 * @apiParam {ObjectId} asset_id Stock Asset ObjectId
 * @apiParam {ObjectId} material_id Stock Raw Material ObjectId
 * @apiParam {ObjectId} product_id Stock finished Product ObjectId
 * @apiParam {ObjectId} vehicle_id Stock Vehicle ObjectId
 * @apiParam {Number} quantity Stock quantity (required)
 * @apiParam {Number} price Stock price (required)
 * @apiParam {Number} min_order Stock minimum order quantity
 * @apiSuccess {Object} Stock Stock's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Stock not found.
 * @apiError 401 master access only.
 */
router.put("/stocks/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/stocks/{recordId} Delete stocks
 * @apiName DeleteStock
 * @apiGroup Stock
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Stock not found.
 * @apiError 401 master access only.
 */
router.delete("/stocks/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map