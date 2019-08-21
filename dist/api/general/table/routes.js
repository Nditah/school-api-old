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
 * @api {get} /api/v1/tables?id={recordId} Retrieve Table records
 * @apiName RetrieveTable filter, skip, limit, sort, projection
 * @apiGroup Table
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/tables?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of all Tables and branches worldwide.
 * Routes are established as links between tables. Certain tables are Hubs.
 * Read more from https://www.npmjs.com/package/api-query-params
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/tables", _controller.fetchRecord);

/**
 * @api {post} /api/v1/tables Create a Table record
 * @apiName CreateTable
 * @apiGroup Table
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} label Table label or table title,
 * @apiParam {String} name Table name (required)
 * @apiParam {String} url Table url segment /api/{url} (required),
 * @apiParam {Boolean} pullable Table pullable i.e. collection can be downloaded
 * @apiParam {Boolean} pushable Table pushable i.e. collection can be uploaded
 * @apiParam {Boolean} changes Table changes if there are changes to be synchronized
 * @apiParam {String} description Table description about operation status or feedback
 * @apiSuccess {Object} Table Table's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Table not found.
 * @apiError 401 master access only.
 */
router.post("/tables", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/tables/{recordId} Update a Table record
 * @apiName UpdateTable
 * @apiGroup Table
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} label Table label or table title,
 * @apiParam {String} name Table name (required)
 * @apiParam {String} url Table url segment /api/{url} (required),
 * @apiParam {Boolean} pullable Table pullable i.e. collection can be downloaded
 * @apiParam {Boolean} pushable Table pushable i.e. collection can be uploaded
 * @apiParam {Boolean} changes Table changes if there are changes to be synchronized
 * @apiParam {String} description Table description about operation status or feedback
 * @apiSuccess {Object} Table Table's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Table not found.
 * @apiError 401 master access only.
 */
router.put("/tables/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/tables/{recordId} Delete a Table record
 * @apiName DeleteTable
 * @apiGroup Table
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Table not found.
 * @apiError 401 master access only.
 */
router.delete("/tables/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map