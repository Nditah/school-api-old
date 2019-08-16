import { DATABASE } from "../../../constants";
import { toObjectId } from "../../../lib";

// ///////////////////////////////////////
//              ABOUT US                //
// ///////////////////////////////////////

const aboutPeacegroup = `
    <h2> About Peace Group </h2>
`;

const aboutPmt = `
    <h2> About Peace Mass Transit </h2>
`;

const aboutPml = `
    <h2> About Peace Mass Logistics </h2>
`;

const aboutPet = `
    <h2> About Peace Petrochemicals </h2>
`;

    // ///////////////////////////////////////
    //    FREQUENTLY ASKED QUESTIONS        //
    // ///////////////////////////////////////

const faqPeacegroup = `
    <h2> Peace Group Frequently Asked Questions </h2>
`;

let faqPmt = [
    {
        q: "What if I miss my bus?",
        a: "Our tickets are valid for a period of seven days. Just present the initial ticket to our ticketing agents and if there is a change in price, offset the balance. Otherwise, they will issue you a new ticket for the new trip.",
    },
    {
        q: "Can my departure date be changed?",
        a: "Yes. You could request a change in your departure date. Notice must be given via SMS AND EMAIL, A MINIMUM OF 24 HOURS TO THE TIME OF DEPARTURE. Indicate the new date you wish to travel on and await confirmation. On the day of the trip, you are required to be at the ticket counter an hour before departure with the original ticket, and a confirmation of the change. The ticketing officer will issue you a new ticket.",
    },
    {
        q: "Can I book and travel on the same day?",
        a: "YES. You can book and travel on the same day.  You also enjoy the option of paying cash at the counter.",
    },
    {
        q: "How much luggage am I entitled to carry?",
        a: "We encourage passengers to carry as little accompanying luggage as possible for the comfort of other passengers. To this end, passengers are allowed a maximum of a medium sized travel bag. Passengers with luggage which exceeds this capacity will be required to have them sent to their destination via our sister company, Peace Express Services Limited",
    },
    {
        q: "How safe are your payment platforms?",
        a: "The security of the data and finances of passengers who use our online payment platforms is of great importance to us. Our payment platforms are safe and secured with the latest technologies in data and web security. In addition, all payments are secured with various authentication protocols which ensure that the account holder maintains full control over their transactions.",
    },
    {
        q: "When am I eligible for a discount?",
        a: "Coming up soon!",
    },
    {
        q: "How comfortable are your buses?",
        a: "All our buses are safe, well-maintained and fully air-conditioned.",
    },
    {
        q: "How do I locate the PMT park nearest to me?",
        a: "We have our terminals across every major city and town in Nigeria. You can also click [HERE] to view the list of our terminals",
    },
];
faqPmt = JSON.stringify(faqPmt);

const faqPml = `
    <h2> Peace Mass Logistics Frequently Asked Questions </h2>
`;

const faqPet = `
    <h2> Peace Petrochemicals Frequently Asked Questions </h2>
`;

    // ///////////////////////////////////////
    //          TERMS AND CONDITIONS        //
    // ///////////////////////////////////////

const termsPeacegroup = `
    <h2> Peace Group Terms and Conditions </h2>
`;

const termsPmt = `
    <h2> Peace Mass Transit Terms and Conditions </h2>
`;

const termsPml = `
    <h2> Peace Mass Logistics Terms and Conditions </h2>
`;

const termsPet = `
    <h2> Peace Petrochemicals Terms and Conditions </h2>
`;

    // ///////////////////////////////////////
    //          POLICY STATEMENT            //
    // ///////////////////////////////////////

const policyPeacegroup = `
    <h2> Peace Group Policy Statement </h2>
`;

const policyPmt = `
    <h2> Peace Mass Transit Policy Statement </h2>
`;

const policyPml = `
    <h2> Peace Mass Logistics Policy Statement </h2>
`;

const policyPet = `
    <h2> Peace Petrochemicals Policy Statement </h2>
`;

const pmlArrivalSms = "Please be informed that your item is ready for pickup. Come with your ID and Waybill # 6.am to 6.pm daily";
const pmlTransitSms = "Please be informed that your item is on transit to ";
const pmlDeliverySms = "Please be informed that your item has been received by ";
const pmlDispatchSms = "Please be informed that your shipment has been dispatched to the recipient's address. Thanks using Peace Mass Logictic";

const table = [
    { access: "private", name: "ACCESS", value: "3", category: "ERP", description: "[ 1 - 7 ] Required Privilege to access the ERP" },
    { access: "public", name: "BOOKING", value: "SCHEDULE", category: "PMT", description: "[ OFFLINE | DUMMY | SCHEDULE ] Mode of PMT Booking online" },
    { access: "private", name: "ERP", value: "LIVE", category: "ERP", description: "[ OFFLINE | TESTING | LIVE ] Administrative shutdown of ERP" },
    { access: "public", name: "BOOKING_FARE", value: "FARE1", category: "PMT", description: "[ FARE1 | FARE2 ] Online Booking Fare based on Bus Class" },
    { access: "public", name: "BOOKING_DISCOUNT", value: "0", category: "PMT", description: "[ 0 - 50 ] Percentage Discount for Online Booking " },
    { access: "private", name: "TAX", value: "2", category: "BOOKING", description: "[ 0 - 100 ] Percentage Tax-rate" },
    { access: "private", name: "PAYE", value: "2", category: "SALARY", description: "Pay As You Earn Tax Percentage deductible" },
    { access: "private", name: "FUEL_COST", value: "210", category: "PMT", description: "Fuel Cost Per Litres in Naira" },
    { access: "private", name: "DTO_INITIAL_DEPOSIT", value: "10", category: "PMT", description: "Percentage of Vehicle Cost (evaluated at current worth) to be paid by Partner for DTO Scheme" },
    { access: "private", name: "DTO_REPAYMENT_FOR_HIGHWAY", value: "40", category: "PMT", description: "Percentage of revenue withheld by PMT for vehicle repayment for highway routes" },
    { access: "private", name: "DTO_SERVICE_CHARGE_FOR_HIGHWAY", value: "20", category: "PMT", description: "Percentage of revenue withheld by PMT for Insurance, Tax, Admin duties, and other overhead for highway routes" },
    { access: "private", name: "DTO_MAINTENANCE_FOR_HIGHWAY", value: "10", category: "PMT", description: "Percentage of revenue withheld by PMT for vehicle regular maintenance for highway routes" },
    { access: "private", name: "DTO_FUEL_FOR_HIGHWAY", value: "25", category: "PMT", description: "Percentage of revenue given to Partner for vehicle fuel for the trip for highway routes" },
    { access: "private", name: "DTO_ALLOWANCE_FOR_HIGHWAY", value: "5", category: "PMT", description: "Percentage of revenue given to Partner for his Welfare for highway routes" },
    { access: "private", name: "DTO_REPAYMENT_FOR_LOCAL", value: "35", category: "PMT", description: "Percentage of revenue withheld by PMT for vehicle repayment for highway routes" },
    { access: "private", name: "DTO_SERVICE_CHARGE_FOR_LOCAL", value: "20", category: "PMT", description: "Percentage of revenue withheld by PMT for Insurance, Tax, Admin duties, and other overhead for highway routes" },
    { access: "private", name: "DTO_MAINTENANCE_FOR_LOCAL", value: "15", category: "PMT", description: "Percentage of revenue withheld by PMT for vehicle regular maintenance for highway routes" },
    { access: "private", name: "DTO_FUEL_FOR_LOCAL", value: "25", category: "PMT", description: "Percentage of revenue given to Partner for vehicle fuel for the trip for highway routes" },
    { access: "private", name: "DTO_ALLOWANCE_FOR_LOCAL", value: "5", category: "PMT", description: "Percentage of revenue given to Partner for his Welfare for highway routes" },
    { access: "public", name: "ABOUT_PEACEGROUP", value: aboutPeacegroup, category: "WEBSITE", description: "About Peace Mass Transit Company. The html formatted body contains the history, philosophy, values, mission, vision of PMT" },
    { access: "public", name: "ABOUT_PMT", value: aboutPmt, category: "WEBSITE", description: "About PeaceGroup of Company. The html formatted body contains the subsidiaries: PMT, PML, PET, PRESS, UGAMA, etc." },
    { access: "public", name: "ABOUT_PML", value: aboutPml, category: "WEBSITE", description: "About Peace Mass Logistics. " },
    { access: "public", name: "ABOUT_PET", value: aboutPet, category: "WEBSITE", description: "About Peace Mass Logistics. " },
    { access: "public", name: "FAQ_PEACEGROUP", value: faqPeacegroup, category: "WEBSITE", description: "Frequently Asked Questions about Peace Group. " },
    { access: "public", name: "FAQ_PMT", value: faqPmt, category: "WEBSITE", description: "Frequently Asked Questions about Peace Mass Transit. " },
    { access: "public", name: "FAQ_PML", value: faqPml, category: "WEBSITE", description: "Frequently Asked Questions about Peace Mass Logistics. " },
    { access: "public", name: "FAQ_PET", value: faqPet, category: "WEBSITE", description: "Frequently Asked Questions about Peace Petroleum. " },
    { access: "public", name: "TERMS_PEACEGROUP", value: termsPeacegroup, category: "WEBSITE", description: "Terms and Conditions of Peace Group " },
    { access: "public", name: "TERMS_PMT", value: termsPmt, category: "WEBSITE", description: "Terms and Conditions of Peace Mass Transit. " },
    { access: "public", name: "TERMS_PML", value: termsPml, category: "WEBSITE", description: "Terms and Conditions of Peace Mass Logistics. " },
    { access: "public", name: "TERMS_PET", value: termsPet, category: "WEBSITE", description: "Terms and Conditions of Peace Petroleum " },
    { access: "public", name: "POLICY_PEACEGROUP", value: policyPeacegroup, category: "WEBSITE", description: "Policy Statement of Peace Group " },
    { access: "public", name: "POLICY_PMT", value: policyPmt, category: "WEBSITE", description: "Policy Statement of Peace Mass Transit. " },
    { access: "public", name: "POLICY_PML", value: policyPml, category: "WEBSITE", description: "Policy Statement of Peace Mass Logistics. " },
    { access: "public", name: "POLICY_PET", value: policyPet, category: "WEBSITE", description: "Policy Statement of Peace Petroleum " },
    { access: "private", name: "SMS_TRANSIT", value: pmlTransitSms, category: "PML", description: "SMS to be sent when shipment is delivered at Terminal" },
    { access: "private", name: "SMS_ARRIVAL", value: pmlArrivalSms, category: "PML", description: "SMS to be sent when shipment is delivered at Terminal" },
    { access: "private", name: "SMS_DELIVERED", value: pmlDeliverySms, category: "PML", description: "SMS to be sent when shipment is delivered at Terminal" },
    { access: "private", name: "SMS_DISPATCHED", value: pmlDispatchSms, category: "PML", description: "SMS to be sent when shipment is Dispatched for door delivery" },
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
