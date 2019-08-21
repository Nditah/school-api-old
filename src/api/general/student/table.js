import { DATABASE, GENDER } from "../../../constants";
import { toObjectId, hash } from "../../../lib";

const table = [
    {
        surname: "Jave",
        given_name: "Scott",
        gender: GENDER.FEMALE,
        birth_date: new Date(1987, 6, 20),
        phone: "08134836164",
        email: "student@royalacademy.ng",
        password: hash("peace"),
        created_by: 1,
    },
];

const studentBaseId = DATABASE.BASE_ID.STAFF;

const result = table.map((record, index) => {
    const obj = Object.assign({}, record);
    obj._id = toObjectId(studentBaseId, (index + 1));
    obj.created_by = toObjectId(studentBaseId, record.created_by);
    return obj;
});

export default result;
