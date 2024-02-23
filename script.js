"use strict";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
const appKey = `&appid=1dc02c2cda3d32eda98eede7405d0e42`;

const searchField = document.querySelector(".searchArea input");
const searchBtn = document.querySelector(".searchArea button");
const weatherIcon = document.querySelector(".Weather-Icon");


function city() {
	const inputName = document.querySelector("#impTXT");
	const city = `&q=${inputName.value}`;
	checkWeather(city);
}



async function checkWeather(city) {
	const response = await fetch(apiURL + appKey + city);
	var data = await response.json();
	// console.log(data);

	if(response.status == 404){
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
		
		
	}else{
		document.querySelector(".city").innerHTML = data.name;
		document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
		document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
		document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
		let iconName = (data.weather[0].main).toLowerCase();
		weatherIcon.src = `img/${iconName}.png`;
		document.querySelector(".WeatherDisplay").style.display = "block";
		document.querySelector(".error").style.display = "block";
	}




};

searchBtn.addEventListener("click", city); // addEventlistener e funcion call korle () lage na


// const input = document.getElementById("impTXT");
searchField.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		city();
	}
});

