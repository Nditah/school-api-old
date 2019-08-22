import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/books?id={recordId} Retrieve one or all records
 * @apiName RetrieveBook
 * @apiGroup Book
  * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/books?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/books", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/books Create books
 * @apiName CreateBook
 * @apiGroup Book
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} title Book title of books
 * @apiParam {String} author Book author of books
 * @apiParam {String} description Book Description of the book
 * @apiParam {String} subsidiary Book subsidiary (required)
 * @apiParam {String} level Book level (required)
 * @apiParam {ObjectId} subject Book subject ObjectId
 * @apiSuccess {Object} Book Book's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Book not found.
 * @apiError 401 master access only.
 */
router.post("/books", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/books/{recordId} Update books
 * @apiName UpdateBook
 * @apiGroup Book
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} title Book title of books
 * @apiParam {String} author Book author of books
 * @apiParam {String} description Book Description of the book
 * @apiParam {String} subsidiary Book subsidiary (required)
 * @apiParam {String} level Book level (required)
 * @apiParam {ObjectId} subject Book subject ObjectId
 * @apiSuccess {Object} Book Book's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Book not found.
 * @apiError 401 master access only.
 */
router.put("/books/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/books/{recordId} Delete books
 * @apiName DeleteBook
 * @apiGroup Book
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Book not found.
 * @apiError 401 master access only.
 */
router.delete("/books/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
