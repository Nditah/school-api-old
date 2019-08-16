"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lib = require("../../../lib");

var _constants = require("../../../constants");

var table = [{ stage: "OPEN", name: "OPENING", officer: "STAFF", description: "Create a document" }, { stage: "ACKNOWLEDGED", name: "ACKNOWLEDGEMENT", officer: "HOD", description: "Acknowledges the request" }, { stage: "ENDORSED", name: "ENDORSEMENT", officer: "Internal Audit", description: "endorse if it asses compliance test" }, { stage: "AUTHORIZED", name: "AUTHORIZATION", officer: "Finance HOD", description: "approves if the expense is within budget" }, { stage: "APPROVED", name: "APPROVAL", officer: "Director", description: "Final Approval " }, { stage: "PAID", name: "PAYMENT", officer: "CASHIER", description: "Payment by cash, cheque, transfer" }, { stage: "CHECKED", name: "CHECKING", officer: "AUDIT", description: "Internal Audit" }, { stage: "AUDITED", name: "AUDITING", officer: "External Auditor", description: "Final Evaluation to close the record" }, { stage: "CLOSED", name: "CLOSING", officer: "External Auditor", description: "External Auditor" }];

var voucherStageBaseId = _constants.DATABASE.BASE_ID.VOUCHER_STAGE;
var staffBaseId = _constants.DATABASE.BASE_ID.STAFF;

var result = table.map(function (record, index) {
    var obj = Object.assign({}, record);
    obj._id = (0, _lib.toObjectId)(voucherStageBaseId, 1 + index);
    obj.created_by = (0, _lib.toObjectId)(staffBaseId, 1);
    return obj;
});

exports.default = result;
//# sourceMappingURL=table.js.map