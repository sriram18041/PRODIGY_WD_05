const fetchButton = document.getElementById("fetchButton");
const locationInput = document.getElementById("locationInput");
const weatherInfo = document.getElementById("weatherInfo");

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

fetchButton.addEventListener("click", fetchWeather);

function fetchWeather() {
    const location = locationInput.value;
    if (location === "") {
        alert("Please enter a location");
        return;
    }

    const url = `${API_BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            displayWeather(data);
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            weatherInfo.innerHTML = "Error fetching weather data";
        });
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    const weatherHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${weatherDescription}</p>
    `;

    weatherInfo.innerHTML = weatherHTML;
}
