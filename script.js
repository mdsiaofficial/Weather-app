"use strict";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
const appKey = `&appid=1dc02c2cda3d32eda98eede7405d0e42`;

const searchField = document.querySelector(".searchArea input");
const searchBtn = document.querySelector(".searchArea button");




async function checkWeather(city) {
    const response = await fetch(apiURL+appKey+city);
    var data = await response.json();
    // console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
};

searchBtn.addEventListener("click", function(){
    const city = `&q=${"dhaka"}`;
    checkWeather(city);
});

