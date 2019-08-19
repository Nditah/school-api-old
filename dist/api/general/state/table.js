"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lib = require("../../../lib");

var _constants = require("../../../constants");

var table = [{ name: "Abia State", country_iso2: "ng" }, { name: "Adamawa State", country_iso2: "ng" }, { name: "Akwa Ibom State", country_iso2: "ng" }, { name: "Anambra State", country_iso2: "ng" }, { name: "Bauchi State", country_iso2: "ng" }, { name: "Bayelsa State", country_iso2: "ng" }, { name: "Benue State", country_iso2: "ng" }, { name: "Borno State", country_iso2: "ng" }, { name: "Cross River State", country_iso2: "ng" }, { name: "Delta State", country_iso2: "ng" }, { name: "Ebonyi State", country_iso2: "ng" }, { name: "Edo State", country_iso2: "ng" }, { name: "Ekiti State", country_iso2: "ng" }, { name: "Enugu State", country_iso2: "ng" }, { name: "FCT", country_iso2: "ng" }, { name: "Gombe State", country_iso2: "ng" }, { name: "Imo State", country_iso2: "ng" }, { name: "Jigawa State", country_iso2: "ng" }, { name: "Kaduna State", country_iso2: "ng" }, { name: "Kano State", country_iso2: "ng" }, { name: "Katsina State", country_iso2: "ng" }, { name: "Kebbi State", country_iso2: "ng" }, { name: "Kogi State", country_iso2: "ng" }, { name: "Kwara State", country_iso2: "ng" }, { name: "Lagos State", country_iso2: "ng" }, { name: "Nasarawa State", country_iso2: "ng" }, { name: "Niger State", country_iso2: "ng" }, { name: "Ogun State", country_iso2: "ng" }, { name: "Ondo State", country_iso2: "ng" }, { name: "Osun State", country_iso2: "ng" }, { name: "Oyo State", country_iso2: "ng" }, { name: "Plateau State", country_iso2: "ng" }, { name: "Rivers State", country_iso2: "ng" }, { name: "Sokoto State", country_iso2: "ng" }, { name: "Taraba State", country_iso2: "ng" }, { name: "Yobe State", country_iso2: "ng" }, { name: "Zamfara State", country_iso2: "ng" }];

var stateBaseId = _constants.DATABASE.BASE_ID.STATE;
var staffBaseId = _constants.DATABASE.BASE_ID.STAFF;

var result = table.map(function (record, index) {
    var obj = Object.assign({}, record);
    var id = index + 1;
    obj._id = (0, _lib.toObjectId)(stateBaseId, id);
    obj.created_by = (0, _lib.toObjectId)(staffBaseId, "1");
    return obj;
});

exports.default = result;
//# sourceMappingURL=table.js.map