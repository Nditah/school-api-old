import { DATABASE, GENDER, MARITAL_STATUS, EMPLOYMENT_STATUS, SUBSIDIARY } from "../../../constants";
import { toObjectId, hash, cleanObject } from "../../../lib";
import * as table from "./table.json";

const staff1 = {
    serial: "ABC",
    category: "ABC",
    title: "Mrs",
    surname: "Eve",
    other_name: "Tera",
    gender: GENDER.FEMALE,
    birth_date: "1987-6-20",
    marital_status: MARITAL_STATUS.MARRIED,
    country_iso2: "ng",
    state_id: "1",
    county_id: "1",
    email: "admin@royalacademy.ng",
    password: "peace",
    otp: "1234",
    otp_count: 1,
    kin: "Joel",
    kin_phone: "ABC",
    kin_address: "ABC",
    phone: "08134836164",
    phone_personal: "08134836164",
    guarantor1: "ABC",
    guarantor1_phone: "ABC",
    guarantor1_address: "ABC",
    employment_status: EMPLOYMENT_STATUS.ON_DUTY,
    terminal_id: "1",
    superior_id: "1",
    office_id: "1",
    subsidiary: SUBSIDIARY.PMT,
    created_by: "1",
};

const arr = cleanObject(table.table) || [];
arr.unshift(staff1);

const staffBaseId = DATABASE.BASE_ID.STAFF;
const countyBaseId = DATABASE.BASE_ID.COUNTY;
const stateBaseId = DATABASE.BASE_ID.STATE;
const officeBaseId = DATABASE.BASE_ID.OFFICE;
const terminalBaseId = DATABASE.BASE_ID.TERMINAL;
const vehicleBaseId = DATABASE.BASE_ID.VEHICLE;

// eslint-disable-next-line complexity
const result = arr.map((record, index) => {
    const obj = Object.assign({}, record);
    obj._id = toObjectId(staffBaseId, 1 + index);
    obj.serial = record.emp_id ? record.emp_id : null;
    obj.password = record.password ? hash(record.password) : hash("peace700");
    obj.county_id = record.lga_id ? toObjectId(countyBaseId, record.lga_id) : null;
    obj.state_id = record.state_id ? toObjectId(stateBaseId, record.state_id) : null;
    obj.vehicle_id = record.vehicle_id ? toObjectId(vehicleBaseId, record.vehicle_id) : null;
    obj.terminal_id = record.terminal_id ? toObjectId(terminalBaseId, record.terminal_id) : null;
    obj.superior_id = record.superior_id ? toObjectId(staffBaseId, record.superior_id) : null;
    obj.office_id = record.office_id ? toObjectId(officeBaseId, record.office_id) : null;
    obj.role = [obj.office_id];
    obj.approved_by = record.approved_by ? toObjectId(staffBaseId, record.approved_by) : null;
    obj.created_by = record.created_by ? toObjectId(staffBaseId, record.created_by) : null;
    delete obj.birth_date;
    return cleanObject(obj);
});

export default result;
