"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slugify = require("slugify");

var _slugify2 = _interopRequireDefault(_slugify);

var _lib = require("../../../lib");

var _constants = require("../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var table = [{
    title: "Travelling this season with Peace of mind",
    body: "<b>Peace</a> has brough in brand new buses for your exclusive comfort.\n                <a href=\"http://pmt.ng\">PMT</a> is one of the most affordable means of transport.",
    tags: "travel, pmt",
    author_id: 1,
    slug: (0, _slugify2.default)("Travelling this season with Peace of mind").toLocaleLowerCase(),
    created_by: 1
}];

var blogBaseId = _constants.DATABASE.BASE_ID.ACCOUNT;
var staffBaseId = _constants.DATABASE.BASE_ID.STAFF;

var blogSeed = table.map(function (record, index) {
    var obj = Object.assign({}, record);
    obj._id = (0, _lib.toObjectId)(blogBaseId, 1 + index);
    obj.author = (0, _lib.toObjectId)(staffBaseId, record.author);
    obj.created_by = (0, _lib.toObjectId)(staffBaseId, record.created_by);
    return obj;
});

exports.default = blogSeed;
//# sourceMappingURL=table.js.map