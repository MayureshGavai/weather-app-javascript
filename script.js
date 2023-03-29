const apiKey = "5e28cd5b9b63f5fcd775b9456d31dc41"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchInput = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".temp-row img")

async function checkWheather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".info").style.display = "none"
    } else {

        document.querySelector(".city-name").innerHTML = data.name + " , " + data.sys.country
        document.querySelector(".sunrise-time").innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        document.querySelector(".sunset-time").innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
        document.querySelector(".weather").innerHTML = data.weather[0].main
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".windspeed").innerHTML = data.wind.speed + " km/h"

        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear-day.svg"
        } else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/cloudy.svg"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.svg"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.svg"
        } else if (data.weather[0].main == "Haze") {
            weatherIcon.src = "images/haze.svg"
        } else if (data.weather[0].main == "Smoke") {
            weatherIcon.src = "images/smoke.svg"
        } else if (data.weather[0].main == "Thunderstrom") {
            weatherIcon.src = "images/thunderstrom.svg"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.svg"
        }
        document.querySelector(".error").style.display = "none"
        document.querySelector(".info").style.display = "block"
    }


}

searchBtn.addEventListener("click", () => {
    checkWheather(searchInput.value)
})

searchInput.addEventListener("change", () => {
    checkWheather(searchInput.value)
})
