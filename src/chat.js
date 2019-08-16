import "babel-polyfill";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

import compression from "compression";
import path from "path";
import helmet from "helmet";

import http from "http";

// import routes
import Chat from "./api/general/chat/model";
import { peacegroupApi, pmtApi, pmlApi } from "./api";
import database from "./config";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

const hostname = "0.0.0.0"; // "localhost";
const port = process.env.PORT || 5000;
const chatPort = process.env.PORT_CHAT || 7000;
const defaultPath = path.join(__dirname, "/public");

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(cors());
app.use(compression());
app.use(express.static(defaultPath));

database.on("error", console.error.bind(console, "Connection error:"));
database.once("open", () => {
    console.log("Successfully connected to the database!");
});

app.get("/", (req, res) => {
    console.log("defaultPath ", defaultPath);
    res.render(`${defaultPath}/index.html`);
});

app.get("/chat", (req, res) => {
    console.log(`${defaultPath}/index.html`);
    res.render(`${defaultPath}/index.html`);
});

// modify request object
app.use((req, res, next) => {
    res.locals.userId = 0.0;
    res.locals.userType = "anonymous";
    res.locals.role = "";
    next();
});

// Use Routes
app.use("/api", peacegroupApi);
app.use("/api", pmtApi);
app.use("/api", pmlApi);

app.use((req, res, next) => {
    const error = new Error("Not found!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        success: false,
        payload: null,
        message: `SCHOOL API says ${error.message}`,
    });
    next();
});

// listen for requests
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// setup event listener
io.on("connection", (socket) => {
    console.log("user connected");

    socket.on("disconnect", () => {
        console.log("user disconnected");
    });

    // Someone is typing
    socket.on("typing", (data) => {
        socket.broadcast.emit("notifyTyping", {
            user: data.user,
            message: data.message,
        });
    });

    // when soemone stops typing
    socket.on("stopTyping", () => {
        socket.broadcast.emit("notifyStopTyping");
    });

    socket.on("chat message", (msg) => {
        console.log(`message: ${msg}`);

        // broadcast message to everyone in port:5000 except yourself.
        socket.broadcast.emit("received", { message: msg });

        // save chat to the database
        const chatMessage = new Chat({ message: msg, sender: "Anonymous" });
        chatMessage.save();

        socket.on("disconnect", () => {
            console.log("client disconnect...", socket.id);
            // handleDisconnect();
        });

        socket.on("error", (err) => {
            console.log("received error from client:", socket.id);
            console.log(err);
        });
    });
});

server.listen(chatPort, () => {
    console.log(`ChatApp listens on port ${chatPort}`);
});

export default app;
