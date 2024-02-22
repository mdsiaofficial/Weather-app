"use strict";




const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";


async function checkWeather(city) {
    const response = await fetch(apiURL + city + apiKey);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

};

