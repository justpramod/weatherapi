const form = document.querySelector("form");

import getwheather  from "./getwheather.js";

form.addEventListener("submit", function (e) {
    e.preventDefault();
    getwheather();

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

export default function getWeatherEmoji(condition) {
    return weatherEmojis[condition]|| "🌍";
}


