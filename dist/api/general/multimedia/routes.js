"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _appRootPath = require("app-root-path");

var _appRootPath2 = _interopRequireDefault(_appRootPath);

var _authorization = require("../../../middleware/authorization");

var _controller = require("./controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/**
 * @api {get} /api/v1/upload to get the form for uploading images
 * @apiName RetrieveUploadForm
 * @apiGroup Image
 * @apiDescription The sample form allows you to test the API by uploading
 * and image and entering the image name that would be saved on db
 */
router.get("/upload", function (req, res) {
  res.sendFile(_appRootPath2.default + "/src/upload/index.html");
});

/**
 * @api {get} /api/v1/images?{query} Retrieve all image-assets
 * @apiName RetrieveImages
 * @apiGroup Image
 * @apiHeader {String} Authorization authorization token
 * @apiDescription image-assets name and url are stored on db. The images themselves
 * are stored on the AWS Bucket. The url points to it.
 * @apiSuccess {Object[]} rows List of image-assets.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/images", _controller.fetchRecord);

/**
 * @api {post} /api/v1/images Create image-assets
 * @apiName CreateImage
 * @apiGroup Image
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} name required image-asset name
 * @apiParam {File} image required image-asset
 * @apiSuccess {Object} image-asset record's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiDescription Images uploaded to this endpoint are stored locally
 * on the backend server. This is only a fall back option when AWS is
 * no longer available.
 */
router.post("/images", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {post} /api/v1/images-aws Create image-assets
 * @apiName CreateImageAws
 * @apiGroup Image
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} name required image-asset name
 * @apiParam {File} image required image-asset
 * @apiSuccess {Object} image-asset record's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiDescription Images uploaded to this endpoint are stored on AWS.
 */
router.post("/images-aws", [_authorization.checkAuth, _authorization.isValidStaff], _controller.addImageAws);

/**
 * @api {put} /api/v1/images/{ImageId} Update image-assets
 * @apiName UpdateImage
 * @apiGroup Image
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} name required image-asset name
 * @apiParam {String} url required image-asset url on cloud
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.put("/images/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/images/{recordId} Delete image-assets
 * @apiName DeleteImage
 * @apiGroup Image
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 image-asset not found.
 */
router.delete("/images/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map