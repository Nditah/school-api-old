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
 * @api {get} /api/v1/synchronizations?id={recordId} Retrieve Synchronization records
 * @apiName RetrieveSynchronization filter, skip, limit, sort, projection
 * @apiGroup Synchronization
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/synchronizations?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of all Synchronizations and branches worldwide.
 * Routes are established as links between synchronizations. Certain synchronizations are Hubs.
 * Read more from https://www.npmjs.com/package/api-query-params
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/synchronizations", _controller.fetchRecord);

/**
 * @api {post} /api/v1/synchronizations Create a Synchronization record
 * @apiName CreateSynchronization
 * @apiGroup Synchronization
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name Synchronization name (required)
 * @apiParam {String} type Synchronization type "PUSH|PULL"
 * @apiParam {ObjectId} table Synchronization Table Collection
 * @apiParam {ObjectId} terminal Synchronization terminal doing the operation
 * @apiParam {Boolean} success Synchronization i.e operation is successful
 * @apiParam {String} remark Synchronization remark about operation status
 * @apiSuccess {Object} Synchronization Synchronization's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Synchronization not found.
 * @apiError 401 master access only.
 */
router.post("/synchronizations", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/synchronizations/{recordId} Update a Synchronization record
 * @apiName UpdateSynchronization
 * @apiGroup Synchronization
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name Synchronization name (required)
 * @apiParam {String} type Synchronization type "PUSH|PULL"
 * @apiParam {ObjectId} table Synchronization Table Collection
 * @apiParam {ObjectId} terminal Synchronization terminal doing the operation
 * @apiParam {Boolean} success Synchronization i.e operation is successful
 * @apiParam {String} remark Synchronization remark about operation status
 * @apiSuccess {Object} Synchronization Synchronization's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Synchronization not found.
 * @apiError 401 master access only.
 */
router.put("/synchronizations/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/synchronizations/{recordId} Delete a Synchronization record
 * @apiName DeleteSynchronization
 * @apiGroup Synchronization
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Synchronization not found.
 * @apiError 401 master access only.
 */
router.delete("/synchronizations/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map