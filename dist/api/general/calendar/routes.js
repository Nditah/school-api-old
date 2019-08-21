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
 * @api {get} /api/v1/calendar?id={recordId} Retrieve one or all records
 * @apiName RetrieveCalendar
 * @apiGroup Calendar
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/calendar?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of account headings belonging to one classification
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
/**
 * @author 4Decoder
 * @description Calendar holds record of all calendar involving company vehicles
 */
router.get("/calendar", [_authorization.checkAuth, _authorization.isValidStaff], _controller.fetchRecord);

/**
 * @api {post} /api/v1/calendar Create calendar
 * @apiName CreateCalendar
 * @apiGroup Calendar
 * @apiParam {String} access_token master access token.
 * @apiParam {Date} start_date Calender event start_date
 * @apiParam {Date} end_date Calender event end_date
 * @apiParam {String} title Calender appointment title
 * @apiParam {String} notification Calender appointment notification description
 * @apiSuccess {Object} Calendar Calendar's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Calendar not found.
 * @apiError 401 master access only.
 */
router.post("/calendar", [_authorization.checkAuth, _authorization.isValidStaff], _controller.createRecord);

/**
 * @api {put} /api/v1/calendar/{recordId} Update calendar
 * @apiName UpdateCalendar
 * @apiGroup Calendar
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam {Date} start_date Calender event start_date
 * @apiParam {Date} end_date Calender event end_date
 * @apiParam {String} title Calender appointment title
 * @apiParam {String} notification Calender appointment notification description
 * @apiSuccess {Object} Calendar Calendar's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Calendar not found.
 * @apiError 401 master access only.
 */
router.put("/calendar/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/calendar/{recordId} Delete calendar
 * @apiName DeleteCalendar
 * @apiGroup Calendar
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Calendar not found.
 * @apiError 401 master access only.
 */
router.delete("/calendar/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map