import { DATABASE } from "../../../constants";
import { toObjectId } from "../../../lib";

const table = [
    { access: "private", name: "ACCESS", value: "3", category: "ERP", description: "[ 1 - 7 ] Required Privilege to access the ERP" },
    { access: "public", name: "FIRST_TERM", value: "September", category: "TERM", description: "Reopening month for the term" },
    { access: "public", name: "SECOND_TERM", value: "January", category: "TERM", description: "Reopening month for the term" },
    { access: "public", name: "THIRD_TERM", value: "April", category: "TERM", description: "Reopening month for the term" },
    { access: "private", name: "SMS_API", value: "ACd99e2c5d2c34ab65269a11ae97da2ead", category: "SMS", description: "SMS code generated at the SMS Portal" },
    { access: "private", name: "SMS_EMAIL", value: "admin@rafs.sch.ng", category: "SMS", description: "SMS Portal authentication email" },
    { access: "private", name: "SMS_PASSWORD", value: "royal", category: "SMS", description: "SMS Portal authentication password" },
];

const staffBaseId = DATABASE.BASE_ID.STAFF;
const settingBaseId = DATABASE.BASE_ID.SETTING;

const result = table.map((record, index) => {
    const obj = Object.assign({}, record);
    const id = index + 1;
    obj._id = toObjectId(settingBaseId, id);
    obj.created_by = toObjectId(staffBaseId, 1);
    return obj;
});

export default result;
