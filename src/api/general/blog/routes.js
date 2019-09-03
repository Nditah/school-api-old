import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import {
    fetchBlog, createBlog, updateBlog, deleteBlog,
    fetchBlogComment, createBlogComment, updateBlogComment, deleteBlogComment,
} from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/blogs?id={recordId} Retrieve one or all records
 * @apiName RetrieveBlog
 * @apiGroup Blog
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/blogs
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Blogs  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/blogs", [checkAuth, isValidStaff], fetchBlog);

/**
 * @api {post} /api/v1/blogs Create blogs
 * @apiName CreateBlog
 * @apiGroup Blog
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} title Blog title
 * @apiParam {String} body Blog body field will hold the body of the article as HTML
 * @apiParam {Array} tags Blog tags field will store the post’s tags, eg: “great, article”
 * @apiParam {ObjectId} author_id Blog tags field will store the post’s author
 * @apiParam {String} slug Blog slug field will store the URL-friendly version
 * of the post’s title, eg: “a-great-article”
 * @apiParam {String} is_published Blog published status
 * @apiParam {Array} comment_ids Blog Array-of-Comments (prohibited)
 * @apiSuccess {Object} Blog Blog's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Blog not found.
 * @apiError 401 master access only.
 */
router.post("/blogs", [checkAuth, isValidStaff], createBlog);

/**
 * @api {put} /api/v1/blogs/{recordId} Update blogs
 * @apiName UpdateBlog
 * @apiGroup Blog
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId record ObjectId
 * @apiParam {String} title Blog title
 * @apiParam {String} body Blog body field will hold the body of the article as HTML
 * @apiParam {Array} tags Blog tags field will store the post’s tags, eg: “great, article”
 * @apiParam {ObjectId} author_id Blog tags field will store the post’s author
 * @apiParam {String} slug Blog slug field will store the URL-friendly version
 * of the post’s title, eg: “a-great-article”
 * @apiParam {String} is_published Blog published status
 * @apiParam {Array} comment_ids Blog Array-of-Comments (prohibited)
 * @apiSuccess {Object} Blog Blog's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Blog not found.
 * @apiError 401 master access only.
 */
router.put("/blogs/:recordId", [checkAuth, isValidStaff], updateBlog);

/**
 * @api {delete} /api/v1/blogs/{recordId} Delete blogs
 * @apiName DeleteBlog
 * @apiGroup Blog
 * @apiHeader {String} Authorization authorization token
 * @apiParam {String} recordId record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Blog not found.
 * @apiError 401 master access only.
 */
router.delete("/blogs/:recordId", [checkAuth, isValidStaff], deleteBlog);

//* =============== BlogComment ==============

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
 * @apiDescription BlogComments  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/blog-comments", [checkAuth, isValidStaff], fetchBlogComment);

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
router.post("/blog-comments", [checkAuth, isValidStaff], createBlogComment);

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
router.put("/blog-comments/:recordId", [checkAuth, isValidStaff], updateBlogComment);

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
router.delete("/blog-comments/:recordId", [checkAuth, isValidStaff], deleteBlogComment);

export default router;
