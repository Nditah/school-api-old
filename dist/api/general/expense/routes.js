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
 * @api {get} /api/v1/expenses?id={recordId} Retrieve one or all records
 * @apiName RetrieveExpense
 * @apiGroup Expense
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/expenses?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of Corporate commercial expenses operating Groups expense account(s)
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/expenses", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/expenses Create expenses
 * @apiName CreateExpense
 * @apiGroup Expense
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} amount Expense amount (required)
 * @apiParam {String} description Expense description (required)
 * @apiSuccess {Object} Expense Expense's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Expense not found.
 * @apiError 401 master access only.
 */
router.post("/expenses", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/expenses/{recordId} Update expenses
 * @apiName UpdateExpense
 * @apiGroup Expense
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} amount Expense amount (required)
 * @apiParam {String} description Expense description (required)
 * @apiSuccess {Object} Expense Expense's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Expense not found.
 * @apiError 401 master access only.
 */
router.put("/expenses/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/expenses/{recordId} Delete expenses
 * @apiName DeleteExpense
 * @apiGroup Expense
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Expense not found.
 * @apiError 401 master access only.
 */
router.delete("/expenses/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map