import { toObjectId } from "../../../lib";
import { DATABASE } from "../../../constants";

const table = [
    { name: "Abia State", country_iso2: "ng" },
    { name: "Adamawa State", country_iso2: "ng" },
    { name: "Akwa Ibom State", country_iso2: "ng" },
    { name: "Anambra State", country_iso2: "ng" },
    { name: "Bauchi State", country_iso2: "ng" },
    { name: "Bayelsa State", country_iso2: "ng" },
    { name: "Benue State", country_iso2: "ng" },
    { name: "Borno State", country_iso2: "ng" },
    { name: "Cross River State", country_iso2: "ng" },
    { name: "Delta State", country_iso2: "ng" },
    { name: "Ebonyi State", country_iso2: "ng" },
    { name: "Edo State", country_iso2: "ng" },
    { name: "Ekiti State", country_iso2: "ng" },
    { name: "Enugu State", country_iso2: "ng" },
    { name: "FCT", country_iso2: "ng" },
    { name: "Gombe State", country_iso2: "ng" },
    { name: "Imo State", country_iso2: "ng" },
    { name: "Jigawa State", country_iso2: "ng" },
    { name: "Kaduna State", country_iso2: "ng" },
    { name: "Kano State", country_iso2: "ng" },
    { name: "Katsina State", country_iso2: "ng" },
    { name: "Kebbi State", country_iso2: "ng" },
    { name: "Kogi State", country_iso2: "ng" },
    { name: "Kwara State", country_iso2: "ng" },
    { name: "Lagos State", country_iso2: "ng" },
    { name: "Nasarawa State", country_iso2: "ng" },
    { name: "Niger State", country_iso2: "ng" },
    { name: "Ogun State", country_iso2: "ng" },
    { name: "Ondo State", country_iso2: "ng" },
    { name: "Osun State", country_iso2: "ng" },
    { name: "Oyo State", country_iso2: "ng" },
    { name: "Plateau State", country_iso2: "ng" },
    { name: "Rivers State", country_iso2: "ng" },
    { name: "Sokoto State", country_iso2: "ng" },
    { name: "Taraba State", country_iso2: "ng" },
    { name: "Yobe State", country_iso2: "ng" },
    { name: "Zamfara State", country_iso2: "ng" },
];

const stateBaseId = DATABASE.BASE_ID.STATE;
const staffBaseId = DATABASE.BASE_ID.STAFF;

const result = table.map((record, index) => {
    const obj = Object.assign({}, record);
    const id = index + 1;
    obj._id = toObjectId(stateBaseId, id);
    obj.created_by = toObjectId(staffBaseId, "1");
    return obj;
});

export default result;
