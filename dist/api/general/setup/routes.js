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
 * @api {post} /api/v1/setups/system Complete System Setup
 * @apiName SystemSetup
 * @apiGroup Setup
 * @apiParam {String} username Master username
 * @apiParam {String} password Master password
 * @apiSuccess {Object} Setup Setup's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Setup not found.
 * @apiError 401 admin access only.
 */
router.get("/setups/preload/system", [_authorization.checkAuth, _authorization.isValidStaff], _controller.setupSystem);

/**
 * @api {get} /api/v1/setups/preload/{subsidiary}/{folder}/{collection} Preload Setups data
 * @apiName ModuleSetup
 * @apiGroup Setup
 * @apiParam {String} access_token admin access token.
 * @apiParam {String} subsidiary Setup collection package
 * @apiParam {String} folder Setup folder directory
 * @apiParam {String} collection Setup collection name
 * @apiSuccess {Object} Setup Setup's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Setup not found.
 * @apiError 401 admin access only.
 */
router.get("/setups/preload/:subsidiary/:folder/:collection", [_authorization.checkAuth, _authorization.isValidStaff], _controller.setCollection);

/**
 * @api {get} /api/v1/setups/csv/{collection} Download Table in CSV
 * @apiName DownloadCsv
 * @apiGroup Setup
 * @apiExample {curl} Example usage for seeding vehicle records:
 *      curl -i api/setups/csv/vehicle
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} module Setup folder directory
 * @apiParam {String} collection Setup collection name
 * @apiSuccess {Object} Setup Setup's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Setup not found.
 * @apiError 401 admin access only.
 */
router.get("/setups/csv/:collection", [_authorization.checkAuth, _authorization.isValidStaff], _controller.downloadCsv);

/**
 * @api {post} /api/v1/setups/csv/{collection} Upload Table in CSV
 * @apiName UploadCsv
 * @apiGroup Setup
 * @apiExample {curl} Example usage for seeding driver records:
 *      curl -i api/setups/csv/driver
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} module Setup folder directory
 * @apiParam {String} collection Setup collection name
 * @apiSuccess {Object} Setup Setup's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Setup not found.
 * @apiError 401 admin access only.
 */
router.post("/setups/csv/:collection", [_authorization.checkAuth, _authorization.isValidStaff], _controller.uploadCsv);

exports.default = router;
//# sourceMappingURL=routes.js.map