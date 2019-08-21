import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/documentations?id={recordId} Retrieve one or all records
 * @apiName RetrieveDocumentation
 * @apiGroup Documentation
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/documentations?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/documentations", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/documentations Create documentations
 * @apiName CreateDocumentation
 * @apiGroup Documentation
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} document_type_id Documentation DocumentType ObjectId (required)
 * @apiParam {String} type Documentation type owner
 * "ASSET|PARTNER|STAFF|VEHICLE|SALESORDER|PURCHASE" (required)
 * @apiParam {ObjectId} asset_id Documentation asset ObjectId
 * @apiParam {ObjectId} staff_id Documentation staff ObjectId
 * @apiParam {ObjectId} partner_id Documentation partner ObjectId
 * @apiParam {ObjectId} customer_id Documentation customer ObjectId
 * @apiParam {ObjectId} vehicle_id Documentation vehicle ObjectId
 * @apiParam {ObjectId} sales_order_id Documentation sales_order ObjectId
 * @apiParam {ObjectId} purchase_order_id Documentation PurchaseOrder ObjectId
 * @apiParam {String} reference Documentation reference number
 * @apiParam {Date} last_renewal Documentation previous date renewal
 * @apiParam {Date} next_renewal Documentation upcoming renewal
 * @apiParam {ObjectId} renewal_by Documentation renewal_by Staff responsible for the task
 * @apiParam {Number} amount Documentation amount spent or fee|charge for renewal
 * @apiParam {String} description Documentation description
 * @apiParam {Boolean} is_renewed Documentation is_renewed
 * @apiParam {Boolean} is_validity Documentation is_validity
 * @apiSuccess {Object} Documentation Documentation's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Documentation not found.
 * @apiError 401 master access only.
 */
router.post("/documentations", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/documentations/{recordId} Update documentations
 * @apiName UpdateDocumentation
 * @apiGroup Documentation
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {ObjectId} document_type_id Documentation DocumentType ObjectId (required)
 * @apiParam {String} type Documentation type owner
 * "ASSET|PARTNER|STAFF|VEHICLE|SALESORDER|PURCHASE" (required)
 * @apiParam {ObjectId} asset_id Documentation asset ObjectId
 * @apiParam {ObjectId} staff_id Documentation staff ObjectId
 * @apiParam {ObjectId} partner_id Documentation partner ObjectId
 * @apiParam {ObjectId} customer_id Documentation customer ObjectId
 * @apiParam {ObjectId} vehicle_id Documentation vehicle ObjectId
 * @apiParam {ObjectId} sales_order_id Documentation sales_order ObjectId
 * @apiParam {ObjectId} purchase_order_id Documentation PurchaseOrder ObjectId
 * @apiParam {String} reference Documentation reference number
 * @apiParam {Date} last_renewal Documentation previous date renewal
 * @apiParam {Date} next_renewal Documentation upcoming renewal
 * @apiParam {ObjectId} renewal_by Documentation renewal_by Staff responsible for the task
 * @apiParam {Number} amount Documentation amount spent or fee|charge for renewal
 * @apiParam {String} description Documentation description
 * @apiParam {Boolean} is_renewed Documentation is_renewed
 * @apiParam {Boolean} is_validity Documentation is_validity
 * @apiSuccess {Object} Documentation Documentation's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Documentation not found.
 * @apiError 401 master access only.
 */
router.put("/documentations/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/documentations/{recordId} Delete documentations
 * @apiName DeleteDocumentation
 * @apiGroup Documentation
 * @apiPermission master
 * @apiParam {String} recordId ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Documentation not found.
 * @apiError 401 master access only.
 */
router.delete("/documentations/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
