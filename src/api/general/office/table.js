import { toObjectId } from "../../../lib";
import { DATABASE } from "../../../constants";

const table = [
    { code: "1", hierarchy: 1, office_type: "BOARD", name: "Chairman", office_above: 1, head: 2, assistant: 2, created_by: 1 },
    { code: "2", hierarchy: 2, office_type: "DIRECTORATE", name: "Managing Director", office_above: 1, head: 2, assistant: 102, created_by: 1 },
    { code: "ED-SS", hierarchy: 2, office_type: "DIRECTORATE", name: "Support Services", office_above: 1, head: 4, assistant: 103, created_by: 1 },
    { code: "ED-OPS", hierarchy: 2, office_type: "DIRECTORATE", name: "Operations", office_above: 2, head: 126, assistant: 104, created_by: 1 },
    { code: "ED-SUB", hierarchy: 2, office_type: "DIRECTORATE", name: "Subsidiaries", office_above: 2, head: 3, assistant: 105, created_by: 1 },
    { code: "ED-MAIN", hierarchy: 2, office_type: "DIRECTORATE", name: "Maintenance", office_above: 2, head: 8, created_by: 1 },
    { code: "PEACEGR", hierarchy: 3, office_type: "SUBSIDIARY", name: "PEACEGROUP", office_above: 3, head: 4, assistant: 116, created_by: 1 },
    { code: "PMT", hierarchy: 3, office_type: "SUBSIDIARY", name: "PMT", office_above: 4, head: 126, assistant: 117, created_by: 1 },
    { code: "PESL", hierarchy: 3, office_type: "SUBSIDIARY", name: "PESL", office_above: 5, head: 97, assistant: 118, created_by: 1 },
    { code: "PET", hierarchy: 3, office_type: "SUBSIDIARY", name: "PET", office_above: 5, head: 22, assistant: 119, created_by: 1 },
    { code: "SPARES", hierarchy: 3, office_type: "SUBSIDIARY", name: "SPARES", office_above: 5, head: 21, assistant: 120, created_by: 1 },
    { code: "PRESS", hierarchy: 3, office_type: "SUBSIDIARY", name: "PRESS", office_above: 5, head: 24, assistant: 121, created_by: 1 },
    { code: "ADMIN", hierarchy: 4, office_type: "DEPARTMENT", name: "Administration", office_above: 7, head: 46, assistant: 107, created_by: 1 },
    { code: "HR", hierarchy: 4, office_type: "DEPARTMENT", name: "Human Resource", office_above: 7, head: 75, assistant: 109, created_by: 1 },
    { code: "FIN", hierarchy: 4, office_type: "DEPARTMENT", name: "Finance", office_above: 15, head: 19, assistant: 108, created_by: 1 },
    { code: "ADT", hierarchy: 4, office_type: "DEPARTMENT", name: "Audit", office_above: 7, head: 11, assistant: 122, created_by: 1 },
    { code: "17", hierarchy: 4, office_type: "DEPARTMENT", name: "ICT", office_above: 7, head: 10, assistant: 110, created_by: 1 },
    { code: "CRM", hierarchy: 4, office_type: "DEPARTMENT", name: "Customer Service", office_above: 7, head: 79, assistant: 111, created_by: 1 },
    { code: "PMT-MAIN", hierarchy: 4, office_type: "DEPARTMENT", name: "Maintenance", office_above: 8, head: 47, assistant: 112, created_by: 1 },
    { code: "PMT-OP", hierarchy: 4, office_type: "DEPARTMENT", name: "Operations", office_above: 8, head: 20, assistant: 113, created_by: 1 },
    { code: "PMT-QT", hierarchy: 4, office_type: "DEPARTMENT", name: "Quality Control", office_above: 8, head: 30, assistant: 114, created_by: 1 },
    { code: "PET-L", hierarchy: 4, office_type: "DEPARTMENT", name: "Lubricant", office_above: 10, head: 22, created_by: 1 },
    { code: "23", hierarchy: 4, office_type: "DEPARTMENT", name: "Chemicals", office_above: 10, head: 1, created_by: 1 },
    { code: "24", hierarchy: 4, office_type: "DEPARTMENT", name: "Shop", office_above: 8, head: 1, created_by: 1 },
    { code: "25", hierarchy: 4, office_type: "DEPARTMENT", name: "Assembly", office_above: 8, head: 1, created_by: 1 },
    { code: "26", hierarchy: 4, office_type: "DEPARTMENT", name: "Research & Development", office_above: 7, head: 15, assistant: 115, created_by: 1 },
    { code: "FIN-AFM", hierarchy: 5, office_type: "UNIT", name: "Assets & Facility Mgt.", office_above: 15, head: 13, assistant: 123, created_by: 1 },
    { code: "28", hierarchy: 5, office_type: "UNIT", name: "Finance Planning & Budgeting", office_above: 15, head: 24, assistant: 124, created_by: 1 },
    { code: "29", hierarchy: 5, office_type: "UNIT", name: "Finance Reporting", office_above: 15, head: 25, assistant: 125, created_by: 1 },
    { code: "30", hierarchy: 5, office_type: "UNIT", name: "Finance Treasury", office_above: 15, head: 26, assistant: 126, created_by: 1 },
    { code: "31", hierarchy: 5, office_type: "UNIT", name: "General Accounts ", office_above: 15, head: 27, assistant: 127, created_by: 1 },
    { code: "32", hierarchy: 5, office_type: "UNIT", name: "Health Safety Environment  ", office_above: 20, head: 28, assistant: 128, created_by: 1 },
    { code: "HR-C", hierarchy: 5, office_type: "UNIT", name: "HR Compensation", office_above: 14, head: 112, assistant: 129, created_by: 1 },
    { code: "HR-D", hierarchy: 5, office_type: "UNIT", name: "HR Development", office_above: 14, head: 10, assistant: 130, created_by: 1 },
    { code: "HR-PM", hierarchy: 5, office_type: "UNIT", name: "HR Performance Mgt.", office_above: 14, head: 31, assistant: 131, created_by: 1 },
    { code: "HR-SP", hierarchy: 5, office_type: "UNIT", name: "HR Strategy & Planning", office_above: 14, head: 32, assistant: 132, created_by: 1 },
    { code: "37", hierarchy: 5, office_type: "UNIT", name: "ICT Governance", office_above: 17, head: 33, assistant: 133, created_by: 1 },
    { code: "38", hierarchy: 5, office_type: "UNIT", name: "ICT Infrastructure", office_above: 17, head: 34, assistant: 134, created_by: 1 },
    { code: "39", hierarchy: 5, office_type: "UNIT", name: "ICT Operations", office_above: 17, head: 35, assistant: 135, created_by: 1 },
    { code: "40", hierarchy: 5, office_type: "UNIT", name: "Logistics & Correspondence ", office_above: 20, head: 36, assistant: 136, created_by: 1 },
    { code: "41", hierarchy: 5, office_type: "UNIT", name: "Security Mgt.", office_above: 20, head: 37, assistant: 137, created_by: 1 },
    { code: "42", hierarchy: 5, office_type: "UNIT", name: "Analysis & Reporting", office_above: 20, head: 38, assistant: 138, created_by: 1 },
    { code: "PESL-OPS", hierarchy: 5, office_type: "UNIT", name: "PESL Operations", office_above: 9, head: 99, assistant: 139, created_by: 1 },
    { code: "PESL-ADMIN", hierarchy: 5, office_type: "UNIT", name: "PESL Admin Unit", office_above: 9, head: 99, assistant: 140, created_by: 1 },
    { code: "45", hierarchy: 5, office_type: "UNIT", name: "Customer Channels Mgt. Unit", office_above: 20, head: 41, assistant: 141, created_by: 1 },
    { code: "46", hierarchy: 5, office_type: "UNIT", name: "Depot Management", office_above: 20, head: 42, assistant: 142, created_by: 1 },
    { code: "47", hierarchy: 5, office_type: "UNIT", name: "Planning & Control Unit", office_above: 19, head: 43, assistant: 143, created_by: 1 },
    { code: "48", hierarchy: 5, office_type: "UNIT", name: "Planning & Routing Unit", office_above: 20, head: 44, assistant: 144, created_by: 1 },
    { code: "49", hierarchy: 5, office_type: "UNIT", name: "Technical Unit", office_above: 19, head: 45, assistant: 145, created_by: 1 },
    { code: "50", hierarchy: 5, office_type: "UNIT", name: "Tracking & Monitoring", office_above: 20, head: 46, assistant: 146, created_by: 1 },
    { code: "51", hierarchy: 5, office_type: "UNIT", name: "Accounts - Assembly Plant", office_above: 16, head: 47, assistant: 147, created_by: 1 },
    { code: "SPARE-WH", hierarchy: 5, office_type: "UNIT", name: "Warehouse Officer", office_above: 11, head: 93, assistant: 148, created_by: 1 },
    { code: "PRESS-ACC", hierarchy: 5, office_type: "UNIT", name: "Accounts - Press", office_above: 12, head: 24, assistant: 149, created_by: 1 },
    { code: "54", hierarchy: 5, office_type: "UNIT", name: "Customer Campaign Mgt. ", office_above: 18, head: 50, assistant: 150, created_by: 1 },
    { code: "55", hierarchy: 5, office_type: "UNIT", name: "Customer Care Unit", office_above: 18, head: 51, assistant: 151, created_by: 1 },
    { code: "SPARES-FP", hierarchy: 5, office_type: "UNIT", name: "Foreign Spare Purchasing", office_above: 11, head: 21, assistant: 152, created_by: 1 },
    { code: "57", hierarchy: 5, office_type: "UNIT", name: "Inventory Unit ", office_above: 19, head: 53, assistant: 153, created_by: 1 },
    { code: "SPARES-LP", hierarchy: 5, office_type: "UNIT", name: "Local Spare Purchasing", office_above: 11, head: 85, assistant: 154, created_by: 1 },
    { code: "PRESS-P&C", hierarchy: 5, office_type: "UNIT", name: "Press Planning & Control", office_above: 12, head: 24, assistant: 155, created_by: 1 },
    { code: "60", hierarchy: 5, office_type: "UNIT", name: "Procurement - Petroleum", office_above: 19, head: 56, assistant: 156, created_by: 1 },
    { code: "PRESS-PROC", hierarchy: 5, office_type: "UNIT", name: "Procurement, Ugama Press", office_above: 12, head: 24, assistant: 157, created_by: 1 },
    { code: "62", hierarchy: 5, office_type: "UNIT", name: "Production ", office_above: 19, head: 58, assistant: 158, created_by: 1 },
    { code: "63", hierarchy: 5, office_type: "UNIT", name: "Production Planning ", office_above: 19, head: 59, assistant: 159, created_by: 1 },
    { code: "64", hierarchy: 5, office_type: "UNIT", name: "Quality Control ", office_above: 19, head: 60, assistant: 160, created_by: 1 },
    { code: "65", hierarchy: 5, office_type: "UNIT", name: "Sales Marketing", office_above: 19, head: 61, assistant: 161, created_by: 1 },
    { code: "PRESS-TECH", hierarchy: 5, office_type: "UNIT", name: "Technical", office_above: 12, head: 24, assistant: 162, created_by: 1 },
    { code: "67", hierarchy: 5, office_type: "UNIT", name: "Accounts Audit ", office_above: 16, head: 63, assistant: 163, created_by: 1 },
    { code: "68", hierarchy: 5, office_type: "UNIT", name: "Control and Compliance ", office_above: 16, head: 64, assistant: 164, created_by: 1 },
    { code: "69", hierarchy: 5, office_type: "UNIT", name: "Risk Management ", office_above: 16, head: 65, assistant: 165, created_by: 1 },
    { code: "70", hierarchy: 5, office_type: "UNIT", name: "Documentation", office_above: 19, head: 17, created_by: 1 },
    { code: "TERMINAL_MANAGER", hierarchy: 3, office_type: "DEPARTMENT", subsidiary: "PEACEGROUP", name: "Terminal Manager", office_above: 19, head: 17, created_by: 1 },
    { code: "REGIONAL_MANAGER", hierarchy: 3, office_type: "DEPARTMENT", subsidiary: "PEACEGROUP", name: "Regional Manager", office_above: 19, head: 17, created_by: 1 },
    { code: "PML_TERMINAL_SUPERVISOR", hierarchy: 4, office_type: "UNIT", subsidiary: "PML", name: "PML Terminal Supervisor", office_above: 19, head: 17, created_by: 1 },
    { code: "PMT_TERMINAL_SUPERVISOR", hierarchy: 4, office_type: "UNIT", subsidiary: "PMT", name: "PMT Terminal Supervisor", office_above: 19, head: 17, created_by: 1 },
    { code: "PMT_TERMINAL_CLERK", hierarchy: 4, office_type: "UNIT", subsidiary: "PMT", name: "PMT Terminal Clerk or Sales Person ot Ticketer", office_above: 19, head: 17, created_by: 1 },
    { code: "PML_TERMINAL_CLERK", hierarchy: 4, office_type: "UNIT", subsidiary: "PML", name: "PML Terminal Clerk of Courier Clerk", office_above: 19, head: 17, created_by: 1 },
    { code: "PML_TERMINAL_ACCOUNTANT", hierarchy: 4, office_type: "UNIT", subsidiary: "PML", name: "PML Terminal Account Officer", office_above: 19, head: 17, created_by: 1 },
    { code: "PMT_TERMINAL_ACCOUNTANT", hierarchy: 4, office_type: "UNIT", subsidiary: "PMT", name: "PMT Terminal Account Officer", office_above: 19, head: 17, created_by: 1 },
    { code: "PML_DISPATCH_RIDER", hierarchy: 4, office_type: "UNIT", subsidiary: "PML", name: "PML Dispatch Rider", office_above: 19, head: 17, created_by: 1 },
    { code: "PMT_TERMINAL_LOADER", hierarchy: 4, office_type: "UNIT", subsidiary: "PMT", name: "PMT Terminal Loader or Bus Attendant", office_above: 19, head: 17, created_by: 1 },
    { code: "TERMINAL_SECURITY", hierarchy: 4, office_type: "UNIT", subsidiary: "PEACEGROUP", name: "Terminal Security Officer", office_above: 19, head: 17, created_by: 1 },
];

const officeBaseId = DATABASE.BASE_ID.OFFICE;
const staffBaseId = DATABASE.BASE_ID.STAFF;

const result = table.map((record, index) => {
    const obj = Object.assign({}, record);
    obj._id = toObjectId(officeBaseId, 1 + index);
    obj.office_above = toObjectId(officeBaseId, record.office_above);
    obj.head = toObjectId(staffBaseId, record.head);
    obj.assistant = toObjectId(staffBaseId, record.assistant);
    obj.created_by = toObjectId(staffBaseId, record.created_by);
    return obj;
});

export default result;
