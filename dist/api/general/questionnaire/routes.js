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
 * @api {get} /api/v1/questionnaires?id={recordId} Retrieve one or all records
 * @apiName RetrieveQuestionnaires
 * @apiGroup Questionnaire
 * @apiHeader {String} Authorization Bearer token
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/questionnaires?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records  of permissible api routes staff can access
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/questionnaires", [_authorization.checkAuth], _controller.fetchRecord);

/**
 * @api {post} /api/v1/questionnaires Create questionnaires
 * @apiName CreateQuestionnaire
 * @apiGroup Questionnaire
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} code Questionnaire code
 * @apiParam {String} type Questionnaire type "OBJECTIVE|THEORY|SUBJECTIVE"
 * @apiParam {String} question Questionnaire question
 * @apiParam {String} answer1 Questionnaire 1st optional answer
 * @apiParam {String} answer2 Questionnaire 2nd optional answer
 * @apiParam {String} answer3 Questionnaire 3rd optional answer
 * @apiParam {String} answer4 Questionnaire 4th optional answer
 * @apiParam {String} answer5 Questionnaire 5th optional answer
 * @apiParam {String} correct Questionnaire correct answer(s) amongst
 *  "answer1|answer2|answer3|answer4|answer5"
 * @apiParam {Number} score Questionnaire score or weight of quiz
 * @apiParam {String} courses Questionnaire courses Array<Course>
 * @apiSuccess {Object} Questionnaire Questionnaire's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Questionnaire not found.
 * @apiError 401 master access only.
 */
router.post("/questionnaires", [_authorization.checkAuth, _authorization.isValidCustomer], _controller.createRecord);

/**
 * @api {put} /api/v1/questionnaires/{recordId} Update questionnaires
 * @apiName UpdateQuestionnaire
 * @apiGroup Questionnaire
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} code Questionnaire code
 * @apiParam {String} type Questionnaire type "OBJECTIVE|THEORY|SUBJECTIVE"
 * @apiParam {String} question Questionnaire question
 * @apiParam {String} answer1 Questionnaire 1st optional answer
 * @apiParam {String} answer2 Questionnaire 2nd optional answer
 * @apiParam {String} answer3 Questionnaire 3rd optional answer
 * @apiParam {String} answer4 Questionnaire 4th optional answer
 * @apiParam {String} answer5 Questionnaire 5th optional answer
 * @apiParam {String} correct Questionnaire correct answer(s) amongst
 *  "answer1|answer2|answer3|answer4|answer5"
 * @apiParam {Number} score Questionnaire score or weight of quiz
 * @apiParam {String} courses Questionnaire courses Array<Course>
 * @apiSuccess {Object} Questionnaire Questionnaire's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Questionnaire not found.
 * @apiError 401 master access only.
 */
router.put("/questionnaires/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.updateRecord);

/**
 * @api {delete} /api/v1/questionnaires/{recordId} Delete questionnaires
 * @apiName DeleteQuestionnaire
 * @apiGroup Questionnaire
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {ObjectId} recordId record ObjectId.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Questionnaire not found.
 * @apiError 401 master access only.
 */
router.delete("/questionnaires/:recordId", [_authorization.checkAuth, _authorization.isValidStaff], _controller.deleteRecord);

exports.default = router;
//# sourceMappingURL=routes.js.map