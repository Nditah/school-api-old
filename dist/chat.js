"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

require("babel-polyfill");

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _compression = require("compression");

var _compression2 = _interopRequireDefault(_compression);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _helmet = require("helmet");

var _helmet2 = _interopRequireDefault(_helmet);

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _model = require("./api/general/chat/model");

var _model2 = _interopRequireDefault(_model);

var _api = require("./api");

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

// import routes

var app = (0, _express2.default)();
var server = _http2.default.createServer(app);
var io = require("socket.io")(server);

var hostname = "0.0.0.0"; // "localhost";
var port = process.env.PORT || 5000;
var chatPort = process.env.PORT_CHAT || 7000;
var defaultPath = _path2.default.join(__dirname, "/public");

app.use((0, _helmet2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: true, limit: "50mb" }));
app.use(_bodyParser2.default.json({ limit: "50mb" }));
app.use((0, _morgan2.default)("dev"));
app.use((0, _cors2.default)());
app.use((0, _compression2.default)());
app.use(_express2.default.static(defaultPath));

_config2.default.on("error", console.error.bind(console, "Connection error:"));
_config2.default.once("open", function () {
    console.log("Successfully connected to the database!");
});

app.get("/", function (req, res) {
    console.log("defaultPath ", defaultPath);
    res.render(defaultPath + "/index.html");
});

app.get("/chat", function (req, res) {
    console.log(defaultPath + "/index.html");
    res.render(defaultPath + "/index.html");
});

// modify request object
app.use(function (req, res, next) {
    res.locals.userId = 0.0;
    res.locals.userType = "anonymous";
    res.locals.role = "";
    next();
});

// Use Routes
app.use("/api", _api.peacegroupApi);
app.use("/api", _api.pmtApi);
app.use("/api", _api.pmlApi);

app.use(function (req, res, next) {
    var error = new Error("Not found!");
    error.status = 404;
    next(error);
});

app.use(function (error, req, res, next) {
    res.status(error.status || 500);
    res.json({
        success: false,
        payload: null,
        message: "SCHOOL API says " + error.message
    });
    next();
});

// listen for requests
app.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});

// setup event listener
io.on("connection", function (socket) {
    console.log("user connected");

    socket.on("disconnect", function () {
        console.log("user disconnected");
    });

    // Someone is typing
    socket.on("typing", function (data) {
        socket.broadcast.emit("notifyTyping", {
            user: data.user,
            message: data.message
        });
    });

    // when soemone stops typing
    socket.on("stopTyping", function () {
        socket.broadcast.emit("notifyStopTyping");
    });

    socket.on("chat message", function (msg) {
        console.log("message: " + msg);

        // broadcast message to everyone in port:5000 except yourself.
        socket.broadcast.emit("received", { message: msg });

        // save chat to the database
        var chatMessage = new _model2.default({ message: msg, sender: "Anonymous" });
        chatMessage.save();

        socket.on("disconnect", function () {
            console.log("client disconnect...", socket.id);
            // handleDisconnect();
        });

        socket.on("error", function (err) {
            console.log("received error from client:", socket.id);
            console.log(err);
        });
    });
});

server.listen(chatPort, function () {
    console.log("ChatApp listens on port " + chatPort);
});

exports.default = app;
//# sourceMappingURL=chat.js.map