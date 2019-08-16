import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/assets?id={recordId} Retrieve Asset records
 * @apiName RetrieveAsset
 * @apiGroup Asset
 * @apiHeader {String} Authorization Bearer token
* @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/assets
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/assets", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/assets Create an Asset record
 * @apiName CreateAsset
 * @apiGroup Asset
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} label Asset label or barcode tag
 * @apiParam {String} serial Asset serial
 * @apiParam {String} name Asset name
 * @apiParam {String} type Asset type or model
 * @apiParam {String} make Asset make or manufacturer
 * @apiParam {String} measure Asset measure
 * @apiParam {ObjectId} category_id Asset category_id
 * @apiParam {String} description Asset description
 * @apiParam {ObjectId} terminal_id Asset terminal_id
 * @apiParam {String} subsidiary Asset subsidiary
 * @apiParam {String} location Asset location
 * @apiParam {String} is_consumable Asset is_consumable
 * @apiParam {String} usability Asset usability "DUTY|SCRAP|SHOP|SOLD|DISPOSED"
 * @apiParam {String} worth Asset worth "APPRECIATE|DEPRECIATE"
 * @apiParam {ObjectId} staff_id Asset custodian staff ObjectId
 * @apiParam {Date} launch_date Asset launch_date
 * @apiParam {Date} expire_date Asset expire_date
 * @apiParam {ObjectId} purchase_id Asset purchase_id
 * @apiParam {Number} opening_value Asset opening_value
 * @apiParam {Number} closing_value Asset closing_value
 * @apiParam {Number} salvage_value Asset salvage_value
 * @apiParam {Number} current_value Asset current_value
 * @apiParam {String} photo Asset photo
 * @apiParam {Number} lifespan Asset lifespan in Years
 * @apiParam {Number} total_depreciable_cost Asset total_depreciable_cost
 * @apiParam {Number} depreciation_rate Asset depreciation_rate
 * @apiParam {Number} depreciation_expense Asset depreciation_expense
 * @apiParam {Number} accumulated_depreciation Asset accumulated_depreciation
 * @apiSuccess {Object} Asset Asset's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Asset not found.
 * @apiError 401 master access only.
 */
router.post("/assets", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/assets/{recordId} Update an Asset record
 * @apiName UpdateAsset
 * @apiGroup Asset
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} label Asset label or barcode tag
 * @apiParam {String} serial Asset serial
 * @apiParam {String} name Asset name
 * @apiParam {String} type Asset type or model
 * @apiParam {String} make Asset make or manufacturer
 * @apiParam {String} measure Asset measure
 * @apiParam {ObjectId} category_id Asset category_id
 * @apiParam {String} description Asset description
 * @apiParam {ObjectId} terminal_id Asset terminal_id
 * @apiParam {String} subsidiary Asset subsidiary
 * @apiParam {String} location Asset location
 * @apiParam {String} is_consumable Asset is_consumable
 * @apiParam {String} usability Asset usability "DUTY|SCRAP|SHOP|SOLD|DISPOSED"
 * @apiParam {String} worth Asset worth "APPRECIATE|DEPRECIATE"
 * @apiParam {ObjectId} staff_id Asset custodian staff ObjectId
 * @apiParam {Date} launch_date Asset launch_date
 * @apiParam {Date} expire_date Asset expire_date
 * @apiParam {ObjectId} purchase_id Asset purchase_id
 * @apiParam {Number} opening_value Asset opening_value
 * @apiParam {Number} closing_value Asset closing_value
 * @apiParam {Number} salvage_value Asset salvage_value
 * @apiParam {Number} current_value Asset current_value
 * @apiParam {String} photo Asset photo
 * @apiParam {Number} lifespan Asset lifespan in Years
 * @apiParam {Number} total_depreciable_cost Asset total_depreciable_cost
 * @apiParam {Number} depreciation_rate Asset depreciation_rate
 * @apiParam {Number} depreciation_expense Asset depreciation_expense
 * @apiParam {Number} accumulated_depreciation Asset accumulated_depreciation
 * @apiSuccess {Object} Asset Asset's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Asset not found.
 * @apiError 401 master access only.
 */
router.put("/assets/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/assets/{recordId} Delete an Asset record
 * @apiName DeleteAsset
 * @apiGroup Asset
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Asset not found.
 * @apiError 401 master access only.
 */
router.delete("/assets/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
