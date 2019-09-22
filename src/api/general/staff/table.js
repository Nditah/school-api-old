import { DATABASE, GENDER, MARITAL_STATUS, EMPLOYMENT_STATUS, SUBSIDIARY, EMPLOYEE_TYPE } from "../../../constants";
import { toObjectId, hash, cleanObject } from "../../../lib";

const table = [{
    staff_type: EMPLOYEE_TYPE.TEACHING,
    title: "Mrs",
    surname: "Eve",
    given_name: "Tera",
    gender: GENDER.FEMALE,
    birth_date: "1990-06-20",
    marital_status: MARITAL_STATUS.MARRIED,
    country_iso2: "ng",
    state: "1",
    county: "1",
    office: "1",
    email: "admin@rafs.sch.ng",
    password: "royal",
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
    created_by: "1",
}];

const staffBaseId = DATABASE.BASE_ID.STAFF;
const countyBaseId = DATABASE.BASE_ID.COUNTY;
const stateBaseId = DATABASE.BASE_ID.STATE;
const officeBaseId = DATABASE.BASE_ID.OFFICE;

// eslint-disable-next-line complexity
const result = table.map((record, index) => {
    const obj = Object.assign({}, record);
    obj._id = toObjectId(staffBaseId, 1 + index);
    obj.password = record.password ? hash(record.password) : hash("peace700");
    obj.county = record.county ? toObjectId(countyBaseId, record.county) : null;
    obj.state = record.state ? toObjectId(stateBaseId, record.state) : null;
    obj.superior = record.superior ? toObjectId(staffBaseId, record.superior) : null;
    obj.office = record.office ? toObjectId(officeBaseId, record.office) : null;
    obj.role = [obj.office];
    obj.approved_by = toObjectId(staffBaseId, 1);
    obj.created_by = toObjectId(staffBaseId, 1);
    delete obj.birth_date;
    return cleanObject(obj);
});

export default result;
