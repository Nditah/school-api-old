import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/materials?id={recordId} Retrieve one or all records
 * @apiName RetrieveMaterial
 * @apiGroup Material
* @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/materials?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/materials", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/materials Create materials
 * @apiName CreateMaterial
 * @apiGroup Material
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name  Material name (required)
 * @apiParam {String} type  Material type
 * @apiParam {String} code  Material code
 * @apiParam {ObjectId} category_id Material category (required)
 * @apiParam {String} subsidiary Material subsidiary (required)
 * @apiParam {String} measure  Material measure (required)
 * @apiParam {Number} volume Material volume (required)
 * @apiParam {Number} mass  Material mass (required)
 * @apiParam {Spring} unit  Material  unit (required)
 * @apiParam {Number} cost  Material  unit cost price(required)
 * @apiParam {String} photo  Material photo
 * @apiParam {String} variants  Material variants
 * @apiParam {String} surface_area  Material surface_area
 * @apiParam {String} dimension  Material dimension
 * @apiParam {Object} attributes  Material attributes
 * @apiParam {Number} quantity_stock Material  quantity_stock (required)
 * @apiParam {Number} quantity_order  Material quantity_order (required)
 * @apiParam {Number} reorder_level  Material  reorder_level (required)
 * @apiParam {Number} reorder_quantity  Material reorder_quantity (required)
 * @apiParam {String} photo  Material photo
 * @apiSuccess {Object} Material Material's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Material not found.
 * @apiError 401 master access only.
 */
router.post("/materials", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/materials/{recordId} Update materials
 * @apiName UpdateMaterial
 * @apiGroup Material
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name  Material name
 * @apiParam {String} type  Material type
 * @apiParam {String} code  Material code
 * @apiParam {ObjectId} category_id Material category (required)
 * @apiParam {String} subsidiary Material subsidiary
 * @apiParam {String} measure  Material measure
 * @apiParam {Number} volume Material volume
 * @apiParam {Number} mass  Material mass
 * @apiParam {Spring} unit  Material  unit
 * @apiParam {Number} cost  Material  unit cost price
 * @apiParam {String} photo  Material photo
 * @apiParam {String} variants  Material variants
 * @apiParam {String} surface_area  Material surface_area
 * @apiParam {String} dimension  Material dimension
 * @apiParam {Object} attributes  Material attributes
 * @apiParam {Number} quantity_stock Material  quantity_stock
 * @apiParam {Number} quantity_order  Material quantity_order
 * @apiParam {Number} reorder_level  Material  reorder_level
 * @apiParam {Number} reorder_quantity  Material reorder_quantity
 * @apiParam {String} photo  Material photo
 * @apiSuccess {Object} Material Material's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Material not found.
 * @apiError 401 master access only.
 */
router.put("/materials/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/materials/{recordId} Delete materials
 * @apiName DeleteMaterial
 * @apiGroup Material
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Material not found.
 * @apiError 401 master access only.
 */
router.delete("/materials/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
