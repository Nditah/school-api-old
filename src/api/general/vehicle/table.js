import { toObjectId, pmtName } from "../../../lib";
import { DATABASE, VEHICLE } from "../../../constants";
import * as table from "./table.json";

// table.json

const vehicleBaseId = DATABASE.BASE_ID.VEHICLE;
const staffBaseId = DATABASE.BASE_ID.STAFF;
const pertnerBaseId = DATABASE.BASE_ID.PARTNER;
const { VEHICLE_MAKE, VEHICLE_ASSIGNMENT } = VEHICLE;
const makeArr = Object.values(VEHICLE_MAKE);

const arr = table.table;

const result = arr.map((record, index) => {
    const obj = Object.assign({}, record);
    obj._id = toObjectId(vehicleBaseId, record.name);
    obj.name = pmtName(record.name);
    obj.partner_id = toObjectId(pertnerBaseId, 1);
    obj.created_by = toObjectId(staffBaseId, record.created_by);
    obj.approved_by = toObjectId(staffBaseId, 17);
    if (!makeArr.includes(record.vehicle_make)) {
        obj.vehicle_make = VEHICLE_MAKE.UNKNOWN;
    }
    return obj;
});

export default result;
