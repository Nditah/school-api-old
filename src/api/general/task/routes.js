import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/tasks?id={recordId} Retrieve Task records
 * @apiName RetrieveTask
 * @apiGroup Task
 * @apiHeader {String} Authorization Bearer token
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/tasks?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/tasks", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/tasks Create a Task record
 * @apiName CreateTask
 * @apiGroup Task
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name Task short name
 * @apiParam {String} tags Task tags are keywords
 * @apiParam {String} code Task code
 * @apiParam {String} status Task status "PENDING|ASSIGNED|ONGOING|STARTED|ENDING|CLOSED"
 * @apiParam {String} title Task title
 * @apiParam {String} description Task description explanation and expectations
 * @apiParam {Number} manhour Task manhour estimated manhour required
 * @apiParam {Number} completion Task completion current Percent executed
 * @apiParam {String} report Task report by Staff assigned_to
 * @apiParam {Date} start_date Task start_date assigned_to mark as started
 * @apiParam {Date} end_date Task end_date Staff assigned_to mark as ended
 * @apiParam {Date} assigned_date Task assigned_date
 * @apiParam {ObjectId} assigned_to Task assigned_to Staff performing the task
 * @apiParam {ObjectId} assigned_by Task assigned_by Staff created the task
 * @apiParam {Number} score Task score by Staff assigned_by
 * @apiParam {String} remark Task remark by Staff assigned_by
 * @apiParam {ObjectId} voucher Task voucher for needed funds by Staff assigned_to
 * @apiParam {ObjectId} asset_assignment Task request by Staff assigned_to
 * @apiParam {String} subsidiary Task subsidiary conducting the task
 * @apiParam {ObjectId} office_id Task office id conducting the task
 * @apiSuccess {Object} Task Task's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Task not found.
 * @apiError 401 master access only.
 */
router.post("/tasks", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/tasks/{recordId} Update a Task record
 * @apiName UpdateTask
 * @apiGroup Task
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name Task short name
 * @apiParam {String} tags Task tags are keywords
 * @apiParam {String} code Task code
 * @apiParam {String} status Task status "PENDING|ASSIGNED|ONGOING|STARTED|ENDING|CLOSED"
 * @apiParam {String} title Task title
 * @apiParam {String} description Task description explanation and expectations
 * @apiParam {Number} manhour Task manhour estimated manhour required
 * @apiParam {Number} completion Task completion current Percent executed
 * @apiParam {String} report Task report by Staff assigned_to
 * @apiParam {Date} start_date Task start_date assigned_to mark as started
 * @apiParam {Date} end_date Task end_date Staff assigned_to mark as ended
 * @apiParam {Date} assigned_date Task assigned_date
 * @apiParam {ObjectId} assigned_to Task assigned_to Staff performing the task
 * @apiParam {ObjectId} assigned_by Task assigned_by Staff created the task
 * @apiParam {Number} score Task score by Staff assigned_by
 * @apiParam {String} remark Task remark by Staff assigned_by
 * @apiParam {ObjectId} voucher Task voucher for needed funds by Staff assigned_to
 * @apiParam {ObjectId} asset_assignment Task request by Staff assigned_to
 * @apiParam {String} subsidiary Task subsidiary conducting the task
 * @apiParam {ObjectId} office_id Task office id conducting the task
 * @apiSuccess {Object} Task Task's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Task not found.
 * @apiError 401 master access only.
 */
router.put("/tasks/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/tasks/{recordId} Delete a Task record
 * @apiName DeleteTask
 * @apiGroup Task
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Task not found.
 * @apiError 401 master access only.
 */
router.delete("/tasks/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
