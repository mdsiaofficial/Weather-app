"use strict";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
const appKey = `&appid=1dc02c2cda3d32eda98eede7405d0e42`;

const searchField = document.querySelector(".searchArea input");
const searchBtn = document.querySelector(".searchArea button");


function city(){
    const inputName = document.querySelector("#impTXT");
    const city = `&q=${inputName.value}`;
    checkWeather(city);
}



async function checkWeather(city) {
    const response = await fetch(apiURL+appKey+city);
    var data = await response.json();
    // console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
};

searchBtn.addEventListener("click", city); // addEventlistener e funcion call korle () lage na


var input = document.getElementById("impTXT");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    // document.getElementById("myBtn").click();
    city();
  }
});

