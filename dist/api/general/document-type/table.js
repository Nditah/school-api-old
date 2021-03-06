"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = require("../../../constants");

var _lib = require("../../../lib");

var table = [{ name: "RECEIPT OF PURCHASE", description: "receipt of purchase", is_renewable: false, months_of_validity: 0, initial_charge: 0, renewable_charge: 0 }, { name: "NEW REGISTRATION", description: "new registration", is_renewable: false, months_of_validity: 0, initial_charge: 3125, renewable_charge: 3125 }, { name: "RECEIPT OF PURCHASE", description: "receipt of purchase", is_renewable: false, months_of_validity: 0, initial_charge: 12500, renewable_charge: 12500 }, { name: "PROOF OF OWNERSHIP", description: "proof of ownership certificate", is_renewable: false, months_of_validity: 0, initial_charge: 2000, renewable_charge: 2000 }, { name: "ROAD WORTHINESS_PRIVATE", description: "certificate of road worthiness_private", is_renewable: true, months_of_validity: 12, initial_charge: 1250, renewable_charge: 1250 }, { name: "ROAD WORTHINESS_PUBLIC", description: "certificate of road worthiness_public", is_renewable: true, months_of_validity: 6, initial_charge: 1250, renewable_charge: 1250 }, { name: "VEHICLE TEST(PRIVATE)", description: "vehicle test(private)", is_renewable: true, months_of_validity: 12, initial_charge: 1250, renewable_charge: 1250 }, { name: "VEHICLE TEST(PUBLIC)", description: "vehicle test(public)", is_renewable: true, months_of_validity: 6, initial_charge: 1250, renewable_charge: 1250 }, { name: "VEHICLE LICENCE", description: "vehicle licence", is_renewable: true, months_of_validity: 12, initial_charge: 2700, renewable_charge: 2700 }, { name: "CERTIFICATE OF INSURANCE", description: "certificate of insurance", is_renewable: true, months_of_validity: 12, initial_charge: 1500, renewable_charge: 1500 }, { name: "HACKNEY CARRIAGE CHARGE", description: "hackney carriage charge", is_renewable: true, months_of_validity: 12, initial_charge: 1250, renewable_charge: 1250 }, { name: "PARTNERS LICENCE", description: "drivers licence", is_renewable: true, months_of_validity: 48, initial_charge: 12000, renewable_charge: 12000 }];

var staffBaseId = _constants.DATABASE.BASE_ID.STAFF;
var documentBaseId = _constants.DATABASE.BASE_ID.DOCUMENT;

var result = table.map(function (record, index) {
    var obj = Object.assign({}, record);
    var id = index + 1;
    obj._id = (0, _lib.toObjectId)(documentBaseId, id);
    obj.created_by = (0, _lib.toObjectId)(staffBaseId, 1);
    return obj;
});

exports.default = result;
//# sourceMappingURL=table.js.map