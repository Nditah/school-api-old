import dotenv from "dotenv";

dotenv.config();

const mongooseOptions = {
    useNewUrlParser: true,
    autoIndex: true, // Don't build indexes
    dbName: "peace",
    useFindAndModify: false,
    autoReconnect: true,
    useCreateIndex: true,
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
    keepAlive: true,
    keepAliveInitialDelay: 300000,
};

const getCredentials = () => {
    const development = {
        uri: "mongodb://localhost:27017/school",
        options: Object.assign(mongooseOptions, {
            dbName: "school",
            reconnectTries: 10,
            poolSize: 5,
        }),
    };

    const production = {
        uri: process.env.MONGODB_URI,
        options: Object.assign(mongooseOptions, {
            reconnectTries: 500,
            reconnectInterval: 500,
            poolSize: 10,
        }),
    };

    switch (process.env.NODE_ENV) {
    case "development":
        return development;

    case "production":
        return production;

    default:
        return development;
    }
};

const credentials = getCredentials();

export default credentials;
