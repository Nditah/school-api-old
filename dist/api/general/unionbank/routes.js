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
 * @api {get} /api/v1/unionbank-transactions?id={recordId} Retrieve one or all records
 * @apiName RetrieveUnionbankTransaction
 * @apiGroup UnionbankTransaction
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i https://mis-api.herokuapp.com/api/v1/unionbank-transactions?id=2&fields=id,created_at,updated_at
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i https://mis-api.herokuapp.com/api/v1/unionbank-transactions?offset=10&limit=50
 * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} fields Comma-separated list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/unionbank-transactions", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/unionbank-transactions Create unionbank-transactions
 * @apiName CreateUnionbankTransaction
 * @apiGroup UnionbankTransaction
 * @apiParam {Number} branchid UnionBank Branch code the transaction originated from
 * @apiParam {String} channel UnionBank channel Transaction Channel
 * @apiParam {Date} trandate UnionBank trandate Date transaction was initiated
 * @apiParam {String} trancode UnionBank trancode Transaction code
 * @apiParam {String} amount UnionBank amount Transaction amount
 * @apiParam {String} currency UnionBank currency Currency In which transaction occurred
 * @apiParam {String} destaccountno UnionBank destaccountno Integrating partner’s account
 * number transaction occurred on
 * @apiParam {Number} balance UnionBank balance Available balance on the account
 * transaction occurred on
 * @apiParam {String} originbank UnionBank originbank Integrating partner’s bank
 * @apiParam {String} narration UnionBank narration Description of the transaction
 * @apiParam {String} trantype UnionBank trantype Transaction type: Debit or Credit
 * @apiParam {Date} valuedate UnionBank valuedate Date the value of the transaction hit the account
 * @apiParam {Number} business_id UnionBank business_id Profile ID for integrating partner
 * @apiParam {String} transaction_ref UnionBank transaction_ref Unique transaction reference number
 * @apiParam {String} branchname UnionBank branchname Branch name the transaction originated from
 * @description UnionbankTransaction model holds record of all transactions via Unionbank
 * @apiSuccess {Object} UnionbankTransaction UnionbankTransaction's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 UnionbankTransaction not found.
 * @apiError 401 master access only.
 */
router.post("/unionbank-transactions", _controller.createRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map