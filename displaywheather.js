import  getWeatherEmoji  from "./app.js";
export default function displayweather(data) {

    document.querySelector("#result").innerHTML = "";
    const condition = data.weather[0].main;
    const resultDiv = document.querySelector("#result");

    const city = document.createElement("h2");
    city.className = "text-2xl font-bold text-gray-800 mb-4";
    city.id = "city";
    city.textContent = data.name;


    const flexDiv = document.createElement("div");
    flexDiv.className = "flex items-center justify-between mb-4";


    const temp = document.createElement("span");
    temp.className = "text-5xl font-bold text-blue-600";
    temp.id = "temp";
    temp.textContent = `${data.main.temp} °C`;


    const icon = document.createElement("span");
    icon.className = "text-4xl";
    icon.id = "icon";
    icon.innerHTML = getWeatherEmoji(data.weather[0].main);

    flexDiv.appendChild(temp);
    flexDiv.appendChild(icon);


    const conditionP = document.createElement("p");
    conditionP.className = "text-gray-600 text-lg mb-2";
    conditionP.innerHTML = `Condition: <span class="font-semibold" id="condition">${data.weather[0].main}</span>`;


    const humidityP = document.createElement("p");
    humidityP.className = "text-gray-600 text-lg";
    humidityP.innerHTML = `Humidity: <span class="font-semibold" id="humidity">${data.main.humidity}</span>`;


    resultDiv.appendChild(city);
    resultDiv.appendChild(flexDiv);
    resultDiv.appendChild(conditionP);
    resultDiv.appendChild(humidityP);

}
