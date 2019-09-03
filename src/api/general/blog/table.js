import slugify from "slugify";
import { toObjectId } from "../../../lib";
import { DATABASE } from "../../../constants";

const table = [
    {
        title: "Travelling this season with Peace of mind",
        body: `<b>Peace</a> has brough in brand new buses for your exclusive comfort.
                <a href="http://pmt.ng">PMT</a> is one of the most affordable means of transport.`,
        tags: "travel, pmt",
        author_id: 1,
        slug: slugify("Travelling this season with Peace of mind").toLocaleLowerCase(),
        created_by: 1,
    },
];

const blogBaseId = DATABASE.BASE_ID.ACCOUNT;
const staffBaseId = DATABASE.BASE_ID.STAFF;

const blogSeed = table.map((record, index) => {
    const obj = Object.assign({}, record);
    obj._id = toObjectId(blogBaseId, 1 + index);
    obj.author = toObjectId(staffBaseId, record.author);
    obj.created_by = toObjectId(staffBaseId, record.created_by);
    return obj;
});

export default blogSeed;
