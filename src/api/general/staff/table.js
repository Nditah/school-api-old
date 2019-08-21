import { DATABASE, GENDER, MARITAL_STATUS, EMPLOYMENT_STATUS, SUBSIDIARY, EMPLOYEE_TYPE } from "../../../constants";
import { toObjectId, hash, cleanObject } from "../../../lib";
import * as table from "./table.json";

const staff1 = {
    staff_type: EMPLOYEE_TYPE.TEACHING,
    title: "Mrs",
    surname: "Eve",
    given_name: "Tera",
    gender: GENDER.FEMALE,
    birth_date: "1987-6-20",
    marital_status: MARITAL_STATUS.MARRIED,
    country_iso2: "ng",
    state: "1",
    county: "1",
    email: "admin@royalacademy.ng",
    password: "peace",
    kin: "Joel",
    kin_phone: "ABC",
    kin_address: "ABC",
    phone: "08134836164",
    phone_personal: "08134836164",
    guarantor1: "ABC",
    guarantor1_phone: "ABC",
    guarantor1_address: "ABC",
    employment_status: EMPLOYMENT_STATUS.ON_DUTY,
    subsidiary: SUBSIDIARY.SECONDARY,
    superior_id: "Victor",
    created_by: "1",
};

const arr = cleanObject(table.table) || [];
arr.unshift(staff1);

const staffBaseId = DATABASE.BASE_ID.STAFF;
const countyBaseId = DATABASE.BASE_ID.COUNTY;
const stateBaseId = DATABASE.BASE_ID.STATE;
const officeBaseId = DATABASE.BASE_ID.OFFICE;

// eslint-disable-next-line complexity
const result = arr.map((record, index) => {
    const obj = Object.assign({}, record);
    obj._id = toObjectId(staffBaseId, 1 + index);
    obj.serial = record.emp_id ? record.emp_id : null;
    obj.password = record.password ? hash(record.password) : hash("peace700");
    obj.county = record.lga_id ? toObjectId(countyBaseId, record.lga_id) : null;
    obj.state_id = record.state_id ? toObjectId(stateBaseId, record.state_id) : null;
    obj.superior_id = record.superior_id ? toObjectId(staffBaseId, record.superior_id) : null;
    obj.office_id = record.office_id ? toObjectId(officeBaseId, record.office_id) : null;
    obj.role = [obj.office_id];
    obj.approved_by = record.approved_by ? toObjectId(staffBaseId, record.approved_by) : null;
    obj.created_by = record.created_by ? toObjectId(staffBaseId, record.created_by) : null;
    delete obj.birth_date;
    return cleanObject(obj);
});

export default result;
