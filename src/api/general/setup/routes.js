import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { setupSystem, setCollection, uploadCsv, downloadCsv } from "./controller";

const router = express.Router();

/**
 * @api {post} /api/v1/setups/system Complete System Setup
 * @apiName SystemSetup
 * @apiGroup Setup
 * @apiParam {String} username Master username
 * @apiParam {String} password Master password
 * @apiSuccess {Object} Setup Setup's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Setup not found.
 * @apiError 401 admin access only.
 */
router.get("/setups/preload/system", [checkAuth, isValidStaff], setupSystem);

/**
 * @api {get} /api/v1/setups/preload/{subsidiary}/{folder}/{collection} Preload Setups data
 * @apiName ModuleSetup
 * @apiGroup Setup
 * @apiParam {String} access_token admin access token.
 * @apiParam {String} subsidiary Setup collection package
 * @apiParam {String} folder Setup folder directory
 * @apiParam {String} collection Setup collection name
 * @apiSuccess {Object} Setup Setup's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Setup not found.
 * @apiError 401 admin access only.
 */
router.get("/setups/preload/:subsidiary/:folder/:collection", [checkAuth, isValidStaff], setCollection);

/**
 * @api {get} /api/v1/setups/csv/{collection} Download Table in CSV
 * @apiName DownloadCsv
 * @apiGroup Setup
 * @apiExample {curl} Example usage for seeding vehicle records:
 *      curl -i api/setups/csv/vehicle
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} module Setup folder directory
 * @apiParam {String} collection Setup collection name
 * @apiSuccess {Object} Setup Setup's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Setup not found.
 * @apiError 401 admin access only.
 */
router.get("/setups/csv/:collection", [checkAuth, isValidStaff], downloadCsv);

/**
 * @api {post} /api/v1/setups/csv/{collection} Upload Table in CSV
 * @apiName UploadCsv
 * @apiGroup Setup
 * @apiExample {curl} Example usage for seeding driver records:
 *      curl -i api/setups/csv/driver
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} module Setup folder directory
 * @apiParam {String} collection Setup collection name
 * @apiSuccess {Object} Setup Setup's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Setup not found.
 * @apiError 401 admin access only.
 */
router.post("/setups/csv/:collection", [checkAuth, isValidStaff], uploadCsv);

export default router;
