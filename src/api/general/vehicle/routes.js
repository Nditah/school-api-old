import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/v1/vehicles?id={recordId} Retrieve one or all records
 * @apiName RetrieveVehicle
 * @apiGroup Vehicle
 * @apiHeader {String} Authorization Bearer token
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i https://mis-api.herokuapp.com/api/v1/vehicles?id=2&fields=id,created_at,updated_at
 * @apiExample {curl} Example usage for retieving multiple records:
 *      curl -i https://mis-api.herokuapp.com/api/v1/vehicles?offset=10&limit=50
 * @apiParam {Number} id Unique id of the record to retrieve (optional)
 * @apiParam {Number} offset Number of records to skip (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} fields Comma-separated list of record's attributes to retrieve (optional)
 * @apiDescription Records of all vehicles whether PMT Buses, Logistic Vans,
 * Toll Trucks or private cars. PMT Buses are also marked for Drivers' to Owners' Scheme.
 * Assets Management also has particular fields reserved for their updates
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/vehicles", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/v1/vehicles Create vehicles
 * @apiName CreateVehicle
 * @apiGroup Vehicle
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} name Vehicle name e.g 1450 (required)
 * @apiParam {String} description Vehicle description (required)
 * @apiParam {String} engine_number Vehicle engine number (optional)
 * @apiParam {String} chasis_number Vehicle chasis number  (optional)
 * @apiParam {String} plate_number Vehicle plate number  (optional)
 * @apiParam {String} registration_number Vehicle registration number  (optional)
 * @apiParam {String} vehicle_make Vehicle vehicle_make or manufacturer (optional)
 * @apiParam {Number} seating_capacity Vehicle seating capacity  (optional)
 * @apiParam {String} vehicle_class Vehicle vehicle class. (required)
 * @apiParam {String} vehicle_category Vehicle vehicle_category (required)
 * @apiParam {String} vehicle_custodian Vehicle employee type (required)
 * @apiParam {String} current_staff_id Vehicle staffId currenly assigned to (optional)
 * @apiParam {String} current_partner_id Vehicle driverId currenly assigned to (optional)
 * @apiParam {String} subsidiary Vehicle subsidiary (required)
 * @apiParam {String} color Vehicle color  (optional)
 * @apiParam {String} photo Vehicle photo url (optional)
 * @apiParam {String} vehicle_location Vehicle current state or vehicle_location (optional)
 * @apiParam {String} vehicle_assignment Vehicle vehicle_assignment status (optional)
 * @apiParam {String} asset_worthiness Vehicle asset worthiness (optional)
 * @apiParam {Date} purchase_date Vehicle purchase date (optional)
 * @apiParam {Date} launch_date Vehicle launch date (optional)
 * @apiParam {Date} expiry_date Vehicle expire date (optional)
 * @apiParam {Number} lifespan Vehicle lifespan in years (optional)
 * @apiParam {Number} purchase_value Vehicle purchase value (optional)
 * @apiParam {Number} opening_value Vehicle opening value (optional)
 * @apiParam {Number} closing_value Vehicle closing value (optional)
 * @apiParam {Number} salvage_value Vehicle salvage value (optional)
 * @apiParam {Number} current_value Vehicle current value (optional)
 * @apiParam {Number} total_depreciable_cost Vehicle total depreciable cost  (optional)
 * @apiParam {Number} depreciation_rate Vehicle depreciation rate  (optional)
 * @apiParam {Number} depreciation_expense Vehicle depreciation expense  (optional)
 * @apiParam {Number} accumulated_depreciation Vehicle accumulated depreciation  (optional)
 * @apiParam {String} record_status Vehicle record approval status (optional)
 * @apiParam {Number} approved_by Vehicle approved by staff who veted the record entry (optional)
 * @apiParam {Date} approved_date Vehicle approved date after record entry (optional)
 * @apiParam {String} remark Vehicle approval remark or any comment about record (optional)
 * @apiParam {Boolean} is_dto Vehicle is it for Partner-to-Owner scheme (optional)
 * @apiParam {Number} dto_initial_deposit Vehicle DTO_INITIAL_DEPOSIT (optional)
 * @apiParam {Number} dto_maintenance_balance Vehicle DTO current balance (prohibited)
 * @apiParam {Number} dto_repayment_total Vehicle DTO cummulative repayment (prohibited)
 * @apiParam {Boolean} is_healthy Vehicle is it healthy  or brokendown (optional)
 * @apiParam {Boolean} is_active Vehicle is it active or retired  (optional)
 * @apiSuccess {Object} Vehicle Vehicle's data.
 * @apiDescription const VEHICLE = {
    VEHICLE_MAKE: {
        TOYOTA: "TOYOTA",
        UGAMA: "UGAMA",
        MEIYER: "MEIYER",
        SIENNA: "SIENNA",
        UNKNOWN: "UNKNOWN",
    },
    VEHICLE_CATEGORY: {
        PMT: "PMT",
        PATROL: "PATROL",
        PML: "PML", // DELIVERY VAN
        PET: "PET", // DELIVERY VAN
        PRESS: "PRESS", // DELIVERY VAN
        SHOP: "SHOP", // FOR SALE
        OFFICIAL_PRIVATE: "OFFICIAL_PRIVATE", // PRIVATE USE
        OFFICIAL_GENERAL: "OFFICIAL_GENERAL", // GENERAL USE
        UNKNOWN: "UNKNOWN",
    },
    VEHICLE_CLASS: {
        FIRST: "FIRST", // New Vehicle with Aircondition
        SECOND: "SECOND", // New Vehicle without Aircondition
        THIRD: "THIRD", // Old Vehicle
        UNKNOWN: "UNKNOWN",
    },
    VEHICLE_TYPE: {
        BUS: "BUS",
        CAR: "CAR",
        TAXI: "TAXI",
        KEKE: "KEKE",
        BIKE: "BIKE",
        JEEP: "JEEP",
        PREMIUM: "PREMIUM",
        UNKNOWN: "UNKNOWN",
    },
    VEHICLE_LOCATION: {
        OPERATION: "OPERATION",
        IMPOUNDED: "IMPOUNDED",
        WORKSHOP: "WORKSHOP",
        WAREHOUSE: "WAREHOUSE",
        SHOP: "SHOP",
        SCRAP: "SCRAP",
        UNKNOWN: "UNKNOWN",
    },
    VEHICLE_ASSIGNMENT: {
        ASSIGNED: "ASSIGNED",
        REASSIGNED: "REASSIGNED",
        UNASSIGNED: "UNASSIGNED",
        UNKNOWN: "UNKNOWN",
    },
    VEHICLE_CUSTODIAN: {
        PARTNER: "PARTNER",
        STAFF: "STAFF",
        OWNER: "OWNER",
        UNKNOWN: "UNKNOWN",
    },
};
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Vehicle not found.
 * @apiError 401 master access only.
 */
router.post("/vehicles", [checkAuth, isValidStaff], createRecord);

/**
 * @api {put} /api/v1/vehicles/{recordId} Update vehicles
 * @apiName UpdateVehicle
 * @apiGroup Vehicle
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} name Vehicle name e.g 1450 (required)
 * @apiParam {String} description Vehicle description (required)
 * @apiParam {String} engine_number Vehicle engine number (optional)
 * @apiParam {String} chasis_number Vehicle chasis number  (optional)
 * @apiParam {String} plate_number Vehicle plate number  (optional)
 * @apiParam {String} registration_number Vehicle registration number  (optional)
 * @apiParam {String} vehicle_make Vehicle vehicle_make or manufacturer (optional)
 * @apiParam {Number} seating_capacity Vehicle seating capacity  (optional)
 * @apiParam {String} vehicle_class Vehicle vehicle class. (required)
 * @apiParam {String} vehicle_category Vehicle vehicle_category (required)
 * @apiParam {String} vehicle_custodian Vehicle employee type (required)
 * @apiParam {String} current_staff_id Vehicle staffId having asset in custody (optional)
 * @apiParam {String} current_partner_id Vehicle driverId having asset in custody (optional)
 * @apiParam {String} subsidiary Vehicle subsidiary (required)
 * @apiParam {String} color Vehicle color  (optional)
 * @apiParam {String} photo Vehicle photo url (optional)
 * @apiParam {String} vehicle_location Vehicle current state or vehicle_location (optional)
 * @apiParam {String} vehicle_assignment Vehicle vehicle_assignment status (optional)
 * @apiParam {String} asset_worthiness Vehicle asset worthiness (optional)
 * @apiParam {Date} purchase_date Vehicle purchase date (optional)
 * @apiParam {Date} launch_date Vehicle launch date (optional)
 * @apiParam {Date} expiry_date Vehicle expire date (optional)
 * @apiParam {Number} lifespan Vehicle lifespan in years (optional)
 * @apiParam {Number} purchase_value Vehicle purchase value (optional)
 * @apiParam {Number} opening_value Vehicle opening value (optional)
 * @apiParam {Number} closing_value Vehicle closing value (optional)
 * @apiParam {Number} salvage_value Vehicle salvage value (optional)
 * @apiParam {Number} current_value Vehicle current value (optional)
 * @apiParam {Number} total_depreciable_cost Vehicle total depreciable cost  (optional)
 * @apiParam {Number} depreciation_rate Vehicle depreciation rate  (optional)
 * @apiParam {Number} depreciation_expense Vehicle depreciation expense  (optional)
 * @apiParam {Number} accumulated_depreciation Vehicle accumulated depreciation  (optional)
 * @apiParam {String} record_status Vehicle record approval status (optional)
 * @apiParam {Number} approved_by Vehicle approved by staff who veted the record entry (optional)
 * @apiParam {Date} approved_date Vehicle approved date after record entry (optional)
 * @apiParam {String} remark Vehicle approval remark or any comment about record (optional)
 * @apiParam {String} ownership Vehicle ownership current owner "PMT|PARTNER" (optional)
 * @apiParam {Boolean} is_dto Vehicle is it for Partner-to-Owner scheme (optional)
 * @apiParam {Number} dto_initial_deposit Vehicle DTO_INITIAL_DEPOSIT (optional)
 * @apiParam {Number} dto_maintenance_balance Vehicle DTO current balance (prohibited)
 * @apiParam {Number} dto_repayment_total Vehicle DTO cummulative repayment (prohibited)
 * @apiParam {Boolean} is_healthy Vehicle is it healthy  or brokendown (optional)
 * @apiParam {Boolean} is_active Vehicle is it active or retired  (optional)
 * @apiSuccess {Object} Vehicle Vehicle's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Vehicle not found.
 * @apiError 401 master access only.
 */
router.put("/vehicles/:recordId", [checkAuth, isValidStaff], updateRecord);

/**
 * @api {delete} /api/v1/vehicles/{recordId} Delete vehicles
 * @apiName DeleteVehicle
 * @apiGroup Vehicle
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Vehicle not found.
 * @apiError 401 master access only.
 */
router.delete("/vehicles/:recordId", [checkAuth, isValidStaff], deleteRecord);

export default router;
