"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getWeather = exports.weatherService = undefined;

/**
 * @description Retrieve weather-map infor mation from openweathermap api
 * @param {string} type weather|forecast for info type
 * @param {string} city the name of the city
 * @param {string} country the ISO-2 code for the country
 */
var weatherService = exports.weatherService = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "weather";
        var city = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Enugu";
        var country = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ng";
        var options;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        options = {
                            method: "GET",
                            uri: url + "/" + type + "?q=" + city + "," + country + "&APPID=" + apiKey + "&units=metric",
                            headers: headersObj,
                            json: true
                        };
                        return _context2.abrupt("return", new Promise(function () {
                            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                                var body;
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _context.prev = 0;
                                                _context.next = 3;
                                                return (0, _requestPromise2.default)(options);

                                            case 3:
                                                body = _context.sent;

                                                resolve(body);
                                                _context.next = 10;
                                                break;

                                            case 7:
                                                _context.prev = 7;
                                                _context.t0 = _context["catch"](0);

                                                reject(_context.t0);

                                            case 10:
                                            case "end":
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, null, [[0, 7]]);
                            }));

                            return function (_x4, _x5) {
                                return _ref2.apply(this, arguments);
                            };
                        }()));

                    case 2:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2);
    }));

    return function weatherService() {
        return _ref.apply(this, arguments);
    };
}();

var getWeather = exports.getWeather = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var _req$params, type, city, country, options;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _req$params = req.params, type = _req$params.type, city = _req$params.city, country = _req$params.country;
                        options = {
                            method: "GET",
                            uri: url + "/" + type + "?q=" + city + "," + country + "&APPID=" + apiKey + "&units=metric",
                            headers: headersObj,
                            json: true
                        };
                        return _context3.abrupt("return", (0, _requestPromise2.default)(options).then(function (body) {
                            if (body.status) return (0, _lib.success)(res, 200, body.data, body.message);
                            return (0, _lib.fail)(res, 200, body.message);
                        }).catch(function (error) {
                            (0, _lib.fail)(res, 500, "Error getting weather data. " + error.message);
                        }));

                    case 3:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3);
    }));

    return function getWeather(_x6, _x7) {
        return _ref3.apply(this, arguments);
    };
}();

var _requestPromise = require("request-promise");

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _lib = require("../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var url = "http://api.openweathermap.org/data/2.5"; // weather|forecast
var headersObj = {
    Accept: "application/json",
    "Content-Type": "application/json",
    json: true
};
var apiKey = process.env.OPENWEATHERMAP_APIKEY;
//# sourceMappingURL=weather.js.map