import { DATABASE, GENDER } from "../../../constants";
import { toObjectId, hash } from "../../../lib";

const table = [{
    customer_type: "INDIVIDUAL",
    surname: "Jave",
    other_name: "Scott",
    gender: GENDER.FEMALE,
    birth_date: new Date(1987, 6, 20),
    phone: "08134836164",
    email: "customer@peacegroup.ng",
    password: hash("peace"),
    otp: hash("1234"),
    otp_count: 1,
    country_iso2: "ng",
    contact_person: "Adam",
    contact_person_phone: "0802737300",
    created_by: 1
}];

const staffBaseId = DATABASE.BASE_ID.STAFF;
const customerBaseId = DATABASE.BASE_ID.CUSTOMER;

const result = table.map((record, index) => {
    const obj = Object.assign({}, record);
    obj._id = toObjectId(customerBaseId, index + 1);
    obj.created_by = toObjectId(staffBaseId, record.created_by);
    return obj;
});

export default result;
//# sourceMappingURL=table.js.map