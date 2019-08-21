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
 * @api {get} /api/v1/blog-comments?id={recordId} Retrieve one or all records
 * @apiName RetrieveBlogComment
 * @apiGroup BlogComment
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/blog-comments?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/blog-comments", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/blog-comments Create blog-comments
 * @apiName CreateBlogComment
 * @apiGroup BlogComment
 * @apiParam {String} blog_id BlogComment blog ObjectId
 * @apiParam {String} related_comment_id BlogComment replied to comment ObjectId
 * @apiParam {String} comment BlogComment comment
 * @apiParam {String} is_published BlogComment published status
 * @apiSuccess {Object} BlogComment BlogComment's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 BlogComment not found.
 * @apiError 401 master access only.
 */
router.post("/blog-comments", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/blog-comments/{recordId} Update blog-comments
 * @apiName UpdateBlogComment
 * @apiGroup BlogComment
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} blog_id BlogComment blog ObjectId
 * @apiParam {String} related_comment_id BlogComment replied to comment ObjectId
 * @apiParam {String} comment BlogComment comment
 * @apiParam {String} is_published BlogComment published status
 * @apiSuccess {Object} BlogComment BlogComment's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 BlogComment not found.
 * @apiError 401 master access only.
 */
router.put("/blog-comments/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/blog-comments/{recordId} Delete blog-comments
 * @apiName DeleteBlogComment
 * @apiGroup BlogComment
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 BlogComment not found.
 * @apiError 401 master access only.
 */
router.delete("/blog-comments/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map