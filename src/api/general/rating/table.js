import { DATABASE } from "../../../constants";
import { toObjectId } from "../../../lib";

const table = [
    { star: 4.5, subject: "PARTNER", subject_id: "1", created_by: 1 },
];

const driverBaseId = DATABASE.BASE_ID.PARTNER;
const customerBaseId = DATABASE.BASE_ID.CUSTOMER;

const result = table.map((record) => {
    const obj = Object.assign({}, record);
    obj.subject_id = toObjectId(driverBaseId, record.subject_id);
    obj.created_by = toObjectId(customerBaseId, record.created_by);
    return obj;
});

export default result;
