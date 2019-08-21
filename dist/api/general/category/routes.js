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
 * @api {get} /api/v1/categories?id={recordId} Retrieve one or all records
 * @apiName RetrieveCategory
 * @apiGroup Category
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/categories?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/categories", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/categories Create categories
 * @apiName CreateCategory
 * @apiGroup Category
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} type Category type of category (required)
 *  "MATERIAL", "PRODUCT", "VEHICLE", "STAFF", "PARTNER", "ASSET"
 * @apiParam {String} name Category name (required)
 * @apiParam {String} description Category description (required)
 * @apiParam {String} subsidiary Category PET|CHEM|PLANT|ENGR (required)
 * @apiSuccess {Object} Category Category's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Category not found.
 * @apiError 401 master access only.
 */
router.post("/categories", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/categories/{recordId} Update categories
 * @apiName UpdateCategory
 * @apiGroup Category
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} type Category type of category
 *  "MATERIAL", "PRODUCT", "VEHICLE", "STAFF", "PARTNER", "ASSET"
 * @apiParam {String} name Category name
 * @apiParam {String} description Category description
 * @apiParam {String} subsidiary Category PET|CHEM|PLANT|ENGR
 * @apiSuccess {Object} Category Category's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Category not found.
 * @apiError 401 master access only.
 */
router.put("/categories/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/categories/{recordId} Delete categories
 * @apiName DeleteCategory
 * @apiGroup Category
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Category not found.
 * @apiError 401 master access only.
 */
router.delete("/categories/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map