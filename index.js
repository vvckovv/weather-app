const apiKey = "f30ff326a6f6f2ececded37cae851b7f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    if(data.weather[0].main == "clouds"){
        weatherIcon.src = "./images/10200351.png";
    }
    else if(data.weather[0].main == "clear"){
        weatherIcon.src = "./images/sun.png";
    }
    else if(data.weather[0].main == "rain"){
        weatherIcon.src = "./images/heavy-rain.png";
    }
    else if(data.weather[0].main == "drizzle"){
        weatherIcon.src = "./images/drizzle.png";
    }
    else if(data.weather[0].main == "mist"){
        weatherIcon.src = "./images/mist-day.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})