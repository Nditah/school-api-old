import rp from "request-promise";
import { success, fail } from "../lib";

const url = "http://api.openweathermap.org/data/2.5"; // weather|forecast
const headersObj = {
    Accept: "application/json",
    "Content-Type": "application/json",
    json: true,
};
const apiKey = process.env.OPENWEATHERMAP_APIKEY;

/**
 * @description Retrieve weather-map infor mation from openweathermap api
 * @param {string} type weather|forecast for info type
 * @param {string} city the name of the city
 * @param {string} country the ISO-2 code for the country
 */
export async function weatherService(type = "weather", city = "Enugu", country = "ng") {
    const options = {
        method: "GET",
        uri: `${url}/${type}?q=${city},${country}&APPID=${apiKey}&units=metric`,
        headers: headersObj,
        json: true,
    };
    return new Promise(async (resolve, reject) => {
        try {
            const body = await rp(options);
            resolve(body);
        } catch (error) {
            reject(error);
        }
    });
}

export async function getWeather(req, res) {
    const { type, city, country } = req.params;
    const options = {
        method: "GET",
        uri: `${url}/${type}?q=${city},${country}&APPID=${apiKey}&units=metric`,
        headers: headersObj,
        json: true,
    };
    return rp(options).then((body) => {
        if (body.status) return success(res, 200, body.data, body.message);
        return fail(res, 200, body.message);
    }).catch((error) => {
        fail(res, 500, `Error getting weather data. ${error.message}`);
    });
}
