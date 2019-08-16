import { toObjectId } from "../../../lib";
import { DATABASE } from "../../../constants";

const table = [
    { name: "ACCESS BANK", sort_code: "044150026", bank_code: "31", created_by: 1 },
    { name: "DIAMOND BANK", sort_code: "063150049", bank_code: "72", created_by: 1 },
    { name: "ECO BANK", sort_code: "050150010", bank_code: "47", created_by: 1 },
    { name: "ENTERPRISE BANK", sort_code: "084150015", bank_code: "125", created_by: 1 },
    { name: "FCMB", sort_code: "214150018", bank_code: "76", created_by: 1 },
    { name: "FIDELITY BANK", sort_code: "070150003", bank_code: "51", created_by: 1 },
    { name: "FIRST BANK", sort_code: "011152316", bank_code: "8", created_by: 1 },
    { name: "GTB", sort_code: "058152146", bank_code: "10", created_by: 1 },
    { name: "MAINSTREET AFRIBANK", sort_code: "014230057", bank_code: "9", created_by: 1 },
    { name: "SKYE BANK", sort_code: "076151006", bank_code: "120", created_by: 1 },
    { name: "STANBIC IBTC", sort_code: " 22115001", bank_code: "17", created_by: 1 },
    { name: "STERLING BANK", sort_code: "232150016", bank_code: "121", created_by: 1 },
    { name: "UBA", sort_code: "033152679", bank_code: "7", created_by: 1 },
    { name: "UNION BANK", sort_code: "032080474", bank_code: "11", created_by: 1 },
    { name: "UNITY BANK ", sort_code: "215153580", bank_code: "129", created_by: 1 },
    { name: "WEMA BANK  ", sort_code: "035150103", bank_code: "16", created_by: 1 },
    { name: "ZENITH BANK", sort_code: "057150343", bank_code: "117", created_by: 1 },
];

const bankBaseId = DATABASE.BASE_ID.BANK;
const staffBaseId = DATABASE.BASE_ID.STAFF;

const result = table.map((record, index) => {
    const obj = Object.assign({}, record);
    obj._id = toObjectId(bankBaseId, 1 + index);
    obj.created_by = toObjectId(staffBaseId, record.created_by);
    return obj;
});

export default result;
