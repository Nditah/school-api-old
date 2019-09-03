import Joi from "joi";
import log4js from "log4js";
import aqp from "api-query-params";
import {
    Blog, blogCreate, blogUpdate,
    BlogComment, blogCommentCreate, blogCommentUpdate,
} from "./model";
import { success, fail, notFound, isObjecId } from "../../../lib";
import { STATUS_MSG } from "../../../constants";

// Logging
const logger = log4js.getLogger("[blog]");
log4js.configure({
    appenders: { file: { type: "file", filename: "logs/blog.log" } },
    categories: { default: { appenders: ["file"], level: "debug" } },
});

export async function fetchBlog(req, res) {
    const { query } = req;
    try {
        const { filter, skip, limit, sort, projection } = aqp(query);
        const searchString = filter.q || "";
        if (searchString) {
            filter.$text = { $search: searchString };
            delete filter.q;
        }
        const result = await Blog.find(filter)
            .populate("author_id", "id surname given_name email phone")
            .populate("comment_ids")
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .select(projection)
            .exec();
        if (!result) {
            return notFound(res, "Error: Bad Request: Model not found");
        }
        logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
        return success(res, 201, result, null);
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error retrieving record. ${err.message}`);
    }
}

export async function createBlog(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, blogCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    const newBlog = new Blog(data);
    try {
        const result = await newBlog.save();
        if (!result) {
            logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        return success(res, 201, result, "Blog created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updateBlog(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, blogUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await Blog.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Blog updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

export async function deleteBlog(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await Blog.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "Blog deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}

//* ========== BLOG-COMMENT ===============

export async function fetchBlogComment(req, res) {
    const { query } = req;
    const { filter, skip, limit, sort, projection } = aqp(query);
    try {
        const result = await BlogComment.find(filter)
            .populate("blog_id")
            .populate("related_comment_id")
            .populate("created_by", "id surname given_name email phone")
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .select(projection)
            .exec();
        if (!result) {
            return notFound(res, "Error: Bad Request: Model not found");
        }
        logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
        return success(res, 201, result, null);
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error retrieving record. ${err.message}`);
    }
}

export async function createBlogComment(req, res) {
    const data = req.body;
    const { error } = Joi.validate(data, blogCommentCreate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const newBlogComment = new BlogComment(data);
        const result = await newBlogComment.save();
        if (!result) {
            logger.error(STATUS_MSG.ERROR.DEFAULT, []);
            return notFound(res, "Error: Bad Request: Model not found");
        }
        const result2 = await Blog.update({ _id: result.blob_id },
            { $push: { comment_ids: result._id } }).exec();
        logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
        return success(res, 201, result2, "BlogComment created successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error creating record. ${err.message}`);
    }
}

export async function updateBlogComment(req, res) {
    const data = req.body;
    const { recordId: id } = req.params;
    const { error } = Joi.validate(data, blogCommentUpdate);
    if (error) return fail(res, 422, `Error validating request data. ${error.message}`);
    try {
        const result = await BlogComment.findOneAndUpdate({ _id: id }, data, { new: true });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        return success(res, 200, result, "BlogComment updated successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error updating record. ${err.message}`);
    }
}

export async function deleteBlogComment(req, res) {
    const { recordId: id } = req.params;
    try {
        const result = await BlogComment.findOneAndRemove({ _id: id });
        if (!result) {
            return notFound(res, `Bad Request: Model not found with id ${id}`);
        }
        const result2 = await Blog.update({ _id: result.blob_id },
            { $pull: { comment_ids: result._id } }).exec();
        logger.info(STATUS_MSG.SUCCESS.DEFAULT, []);
        return success(res, 200, result2, "BlogComment deleted successfully!");
    } catch (err) {
        logger.error(err);
        return fail(res, 500, `Error deleting record. ${err.message}`);
    }
}
