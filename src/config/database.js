import mongoose from "mongoose";
// eslint-disable-next-line camelcase
import mongoose_csv from "mongoose-csv";
import credentials from "./credentials";

mongoose.Promise = global.Promise;

const { uri, options } = credentials;

mongoose.connect(uri, options);

const database = mongoose.connection;

export default database;
