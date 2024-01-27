const apiKey = "66dd7fa9bbab634bec7b4d3103435282";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBtn  =  document.querySelector(".search-bar button");
const weatherIcon  =  document.querySelector(".weather-icon");

async function checkWeather(){
  const city = document.querySelector(".search-bar input").value;
  const res = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

  if(res.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else{
    var data = await res.json();
  
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°c";

    if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src = "./images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "./images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "./images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "./images/mist.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
  
}

searchBtn.addEventListener("click", ()=>{
  checkWeather();
})

