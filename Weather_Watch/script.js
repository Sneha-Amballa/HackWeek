const apiKey = "ce5a2d4a743cf58d8a86a941f4f1761e";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherDiv = document.getElementById("weatherInfo");
  
  if (!city.trim()) {
    weatherDiv.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const weatherInfo = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      `;
      weatherDiv.innerHTML = weatherInfo;
    })
    .catch(error => {
      weatherDiv.innerHTML = `<p>${error.message}</p>`;
    });
}
