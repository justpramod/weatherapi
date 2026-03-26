const form = document.querySelector("form");

import { getWheather } from "./getwheather.js";

form.addEventListener("submit", function (e) {
    e.preventDefault();
    getWheather();

});

const weatherEmojis = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Drizzle: "🌦️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Mist: "🌫️",
    Haze: "🌫️",
    Smoke: "💨",
};

export function getWeatherEmoji(condition) {
    return weatherEmojis[condition]|| "🌍";
}


