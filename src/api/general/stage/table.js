import { toObjectId } from "../../../lib";
import { DATABASE } from "../../../constants";

const table = [
    { stage: "OPEN", name: "OPENING", officer: "STAFF", description: "Create a document" },
    { stage: "ACKNOWLEDGED", name: "ACKNOWLEDGEMENT", officer: "HOD", description: "Acknowledges the request" },
    { stage: "ENDORSED", name: "ENDORSEMENT", officer: "Internal Audit", description: "endorse if it asses compliance test" },
    { stage: "AUTHORIZED", name: "AUTHORIZATION", officer: "Finance HOD", description: "approves if the expense is within budget" },
    { stage: "APPROVED", name: "APPROVAL", officer: "Director", description: "Final Approval " },
    { stage: "PAID", name: "PAYMENT", officer: "CASHIER", description: "Payment by cash, cheque, transfer" },
    { stage: "CHECKED", name: "CHECKING", officer: "AUDIT", description: "Internal Audit" },
    { stage: "AUDITED", name: "AUDITING", officer: "External Auditor", description: "Final Evaluation to close the record" },
    { stage: "CLOSED", name: "CLOSING", officer: "External Auditor", description: "External Auditor" },
];

const voucherStageBaseId = DATABASE.BASE_ID.VOUCHER_STAGE;
const staffBaseId = DATABASE.BASE_ID.STAFF;

const result = table.map((record, index) => {
    const obj = Object.assign({}, record);
    obj._id = toObjectId(voucherStageBaseId, 1 + index);
    obj.created_by = toObjectId(staffBaseId, 1);
    return obj;
});

export default result;
