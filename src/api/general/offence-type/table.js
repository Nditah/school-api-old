import { DATABASE } from "../../../constants";
import { toObjectId } from "../../../lib";

const table = [
    { code: "OS", offender_type: "PARTNER", name: "OVER-SPEEDING", fine: 5000, discipline: "WARNING", suspension_days: 0, description: "PMT over-speeding is a dangerous offence because it endangers the life of the driver and co-passengers. It can lead to instant dismissal if the offender_type commits another offence like overloading and drunkenness." },
    { code: "DD", offender_type: "PARTNER", name: "DANGEROUS DRIVING", fine: 5000, discipline: "SUSPENSION", suspension_days: 4, description: "Dangerous driving include over taking, speeding, breaking suddenly or taking bad route." },
    { code: "HTN", offender_type: "STAFF", name: "HOTNESS", fine: 9500, discipline: "SUSPENSION", suspension_days: 20, description: "Any staff that is too hot and causes distration should be suspended to allow others to focus and do their job. Its a serious offence that attacks a penalty of 9000 and above.." },
    { code: "LTCS", offender_type: "STAFF", name: "LATE COMING", fine: 300, discipline: "WARNING", suspension_days: 0, description: "Late coming to work is prohibited in Peace Group. Working hourse start from 7:30am to 5:00pm daily from Monday to Saturday. Anything else with proper permission constitute late coming with a penalty of 200 N and above." },
    { code: "FGT", offender_type: "STAFF", name: "FIGHTING", fine: 5700, discipline: "WARNING", suspension_days: 0, description: "Any staff fighting with another staff or a customer will pay a fine. Any staff fighting with another staff or a customer will pay a fine." },
    { code: "APD", offender_type: "PARTNER", name: "Assaulting Patrolmen on Duty", fine: 5000.00, suspension_days:	0, description: "Assaulting Patrolmen on Duty" },
    { code: "WO", offender_type: "PARTNER", name: "Wrongful Overtaking", fine: 5000.00, suspension_days:	0, description: "Wrongful Overtaking" },
    { code: "ACPD", offender_type: "PARTNER", name: "Attempting To Corrupt Patrolmen on Duty", fine: 5000.00, suspension_days:	0, description: "Attempting To Corrupt Patrolmen on Duty" },
    { code: "DLV", offender_type: "PARTNER", name: "Driving License Violation", fine: 2000.00, suspension_days:	0, description: "Driving License Violation" },
    { code: "DUI", offender_type: "PARTNER", name: "Driving Under Influence of Alcohol", fine:	0, suspension_days:	1000000, description: "Driving Under Influence of Alcohol" },
    { code: "DWST", offender_type: "PARTNER", name: "Driving With Worn Out Tires or Without Spare Tire", fine: 2000.00, suspension_days:	0, description: "Driving With Worn Out Tires or Without Spare Tire" },
    { code: "FEV", offender_type: "PARTNER", name: "Fire Extinguisher Violation", fine: 1000.00, suspension_days:	0, description: "Fire Extinguisher Violation" },
    { code: "LV", offender_type: "PARTNER", name: "Light Violation", fine: 2000.00, suspension_days:	0, description: "Light Violation" },
    { code: "MDV", offender_type: "PARTNER", name: "Mechanically Deficient Vehicle", fine: 2000.00, suspension_days:	0, description: "Mechanically Deficient Vehicle" },
    { code: "PMV", offender_type: "PARTNER", name: "Passenger’s Manifest Violation", fine: 2000.00, suspension_days:	0, description: "Passenger’s Manifest Violation" },
    { code: "SBV", offender_type: "PARTNER", name: "Seat Belt Violation", fine: 2000.00, suspension_days:	0, description: "Seat Belt Violation" },
    { code: "UCP", offender_type: "PARTNER", name: "Use of Cell Phone While Driving", fine: 5000.00, suspension_days:	0, description: "Use of Cell Phone While Driving" },
    { code: "VLV", offender_type: "PARTNER", name: "Vehicle Licence Violation", fine: 2000.00, suspension_days:	0, description: "Vehicle Licence Violation" },
    { code: "WV", offender_type: "PARTNER", name: "Windscreen Violation", fine: 2000.00, suspension_days:	0, description: "Windscreen Violation" },
    { code: "F", offender_type: "PARTNER", name: "Fighting", fine: 20000.00, suspension_days:	0, description: "Fighting" },
    { code: "PVUP", offender_type: "PARTNER", name: "Parking Vehicle At Unauthorized Place", fine: 5000.00, suspension_days:	0, description: "Parking Vehicle At Unauthorized Place" },
    { code: "IC", offender_type: "PARTNER", name: "Illegal Charter", fine:	0, suspension_days:	1000000, description: "Illegal Charter" },
    { code: "DY", offender_type: "PARTNER", name: "Dirty", fine: 2000.00, suspension_days:	0, description: "Dirty" },
    { code: "IW", offender_type: "PARTNER", name: "Illegal Waybill (Drivers)", fine: 20000.00, suspension_days:	0, description: "Illegal Waybill (Drivers)" },
    { code: "IW", offender_type: "PARTNER", name: "Illegal Waybill(Other Staff Involved)", fine: 10000.00, suspension_days:	0, description: "Illegal Waybill(Other Staff Involved)" },
    { code: "IRBI", offender_type: "PARTNER", name: "Illegal Removal Of Back Seat Iron", fine: 10000.00, suspension_days:	0, description: "Illegal Removal Of Back Seat Iron" },
    { code: "IRSC", offender_type: "PARTNER", name: "Illegal Removal Of Speed Coding", fine: 100000.00, suspension_days:	0, description: "Illegal Removal Of Speed Coding" },
    { code: "TG", offender_type: "PARTNER", name: "Tinted Glass", fine: 5000.00, suspension_days:	0, description: "Tinted Glass" },
];

const staffBaseId = DATABASE.BASE_ID.STAFF;
const offenceBaseId = DATABASE.BASE_ID.OFFENCE;

const result = table.map((record, index) => {
    const obj = Object.assign({}, record);
    const id = index + 1;
    obj._id = toObjectId(offenceBaseId, id);
    obj.created_by = toObjectId(staffBaseId, 1);
    return obj;
});

export default result;
