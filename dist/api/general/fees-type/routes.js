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
 * @api {get} /api/v1/fees_types?id={recordId} Retrieve FeesType records
 * @apiName RetrieveFeesType filter, skip, limit, sort, projection
 * @apiGroup FeesType
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/FeesTypes?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of all FeesTypes and branches worldwide.
 * Routes are established as links between FeesTypes. Certain FeesTypes are Hubs.
 * Read more from https://www.npmjs.com/package/api-query-params
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/fees_types", _controller.fetchRecord);

/**
 * @api {post} /api/v1/fees_types Create a FeesType record
 * @apiName CreateFeesType
 * @apiGroup FeesType
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} type FeesType type String,
 * @apiParam {ObjectId} classe_id FeesType classe_id (required)
 * @apiParam {String} amount FeesType amount (required),
 * @apiParam {String} description FeesType description String
 * @apiSuccess {Object} FeesType FeesType's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 FeesType not found.
 * @apiError 401 master access only.
 */
router.post("/fees_types", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/fees_types/{recordId} Update a FeesType record
 * @apiName UpdateFeesType
 * @apiGroup FeesType
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} type FeesType type String,
 * @apiParam {ObjectId} classe_id FeesType classe_id (required)
 * @apiParam {String} amount FeesType amount (required),
 * @apiParam {String} description FeesType description String
 * @apiSuccess {Object} FeesType FeesType's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 FeesType not found.
 * @apiError 401 master access only.
 */
router.put("/fees_types/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/fees_types/{recordId} Delete a FeesType record
 * @apiName DeleteFeesType
 * @apiGroup FeesType
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 FeesType not found.
 * @apiError 401 master access only.
 */
router.delete("/fees_types/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map