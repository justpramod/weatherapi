 import displayweather from "./displaywheather.js"
export async function getWheather() {

    const cityvalue = document.getElementById("citySearch").value;
    try {
        document.querySelector("#result").innerHTML = "Loading....";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=13b5fdfa1e09cff85995271cc66bd356&units=metric`);

        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        displayweather(data);
    }
    catch (err) {
        document.querySelector("#result").innerHTML = err.message;
        console.log(err.message);
    }
    document.querySelector("form").reset();
}
