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
 * @api {get} /api/v1/budgets?id={recordId} Retrieve one or all records
 * @apiName RetrieveBudget
 * @apiGroup Budget
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/budgets?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/budgets", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/budgets Create budgets
 * @apiName CreateBudget
 * @apiGroup Budget
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name Budget name (required)
 * @apiParam {String} type Budget Category ACCOUNT|OFFICE|SUBSIDIARY|TERMINAL
 * @apiParam {String} description Budget description (required)
 * @apiParam {String} subsidiary Budget PET|CHEM|PLANT|ENGR (required)
 * @apiParam {Number} year Budget year e.g. 2020 Period is gotten from settings
 * @apiParam {Number} amount Budget cap set for the given year
 * @apiParam {ObjectId} office Budget for a given office
 * @apiParam {ObjectId} terminal Budget Terminal
 * @apiParam {ObjectId} account_heading Budget AccountHeading
 * @apiSuccess {Object} Budget Budget's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Budget not found.
 * @apiError 401 master access only.
 */
router.post("/budgets", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/budgets/{recordId} Update budgets
 * @apiName UpdateBudget
 * @apiGroup Budget
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name Budget name (required)
 * @apiParam {String} type Budget Category ACCOUNT|OFFICE|SUBSIDIARY|TERMINAL
 * @apiParam {String} description Budget description (required)
 * @apiParam {String} subsidiary Budget PET|CHEM|PLANT|ENGR (required)
 * @apiParam {Number} year Budget year e.g. 2020 Period is gotten from settings
 * @apiParam {Number} amount Budget cap set for the given year
 * @apiParam {ObjectId} office Budget for a given office
 * @apiParam {ObjectId} terminal Budget Terminal
 * @apiParam {ObjectId} account_heading Budget AccountHeading
 * @apiSuccess {Object} Budget Budget's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Budget not found.
 * @apiError 401 master access only.
 */
router.put("/budgets/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/budgets/{recordId} Delete budgets
 * @apiName DeleteBudget
 * @apiGroup Budget
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Budget not found.
 * @apiError 401 master access only.
 */
router.delete("/budgets/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map