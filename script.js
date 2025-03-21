const apikey = "ce5ec40f32e88b28cb6d744089ddbabd";


async function checkWeather(city="mumbai") {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

    const response = await fetch(apiurl);
    var data = await response.json();
    console.log(data);

    const img=document.querySelector(".sunny");
    const temp=document.querySelector(".temp");
    const speed=document.querySelector(".wind");

     temp.innerHTML = `${data.main.temp}°c`;
    speed.innerHTML = `${data.wind.speed}km/hr`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".city").innerHTML = data.name;


}


checkWeather();
const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const searchIcon = document.querySelector(".fa-magnifying-glass");




button.addEventListener("click", function() {
    const value=input.value;
    checkWeather(value);
    input.value="";
});