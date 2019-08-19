import { DATABASE, GENDER, MARITAL_STATUS, EMPLOYMENT_STATUS } from "../../../constants";
import { toObjectId, hash, cleanObject } from "../../../lib";

const table = {
    title: "Mr",
    first_name: "Victor",
    last_name: "Ikenna",
    gender: GENDER.FEMALE,
    date_of_birth: "1987-03-21",
    marital_status: MARITAL_STATUS.MARRIED,
    address: "No 12 Garden Avenue, G.R.A, Enugu",
    state: "1",
    county: "1",
    email: "admin@royalacademy.ng",
    password: "peace",
    phone: "08164114571",
    phone_personal: "08164114571",
    profession: "Civil servant",
    employment_status: EMPLOYMENT_STATUS.ON_DUTY,
    created_by: "1",
};

const parentBaseId = DATABASE.BASE_ID.PARENT;
const countyBaseId = DATABASE.BASE_ID.COUNTY;
const stateBaseId = DATABASE.BASE_ID.STATE;

// eslint-disable-next-line complexity
const result = table.map((record, index) => {
    const obj = Object.assign({}, record);
    obj._id = toObjectId(parentBaseId, 1 + index);
    obj.password = record.password ? hash(record.password) : hash("peace700");
    obj.county = record.lga_id ? toObjectId(countyBaseId, record.lga_id) : null;
    obj.state = record.state ? toObjectId(stateBaseId, record.state_id) : null;
    obj.approved_by = record.approved_by ? toObjectId(parentBaseId, record.approved_by) : null;
    obj.created_by = record.created_by ? toObjectId(parentBaseId, record.created_by) : null;
    delete obj.date_of_birth;
    return cleanObject(obj);
});

export default result;
