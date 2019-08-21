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
 * @api {get} /api/v1/settings/public Retrieve Public Settings record(s)
 * @apiName RetrievePublicSetting
 * @apiGroup Setting
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/settings?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of Software adjustable and default parameters.
 * Labels and contents for the website are kept here.
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/settings/public", _controller.fetchRecordPublic);

/**
 * @api {get} /api/v1/settings?id={recordId} Retrieve Settings record(s)
 * @apiName RetrieveSetting
 * @apiGroup Setting
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/settings", [_authorization.checkAuth], _controller.fetchRecord);

/**
 * @api {put} /api/v1/settings/{recordId} Update Settings record
 * @apiName UpdateSetting
 * @apiGroup Setting
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name Setting varaible name
 * @apiParam {String} access Setting "public", "private"
 * @apiParam {String} category Setting category of domains affected
 * @apiParam {String} control Setting control value
 * @apiParam {String} description Setting description
 * @apiSuccess {Object} Setting Setting's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Setting not found.
 * @apiError 401 master access only.
 */
router.put("/settings/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map