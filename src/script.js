setInterval(() => {
  const time = document.querySelector("#time");
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  let day = days[date.getDay()];
  let day_night = "AM";
  if (hours > 12) {
    day_night = "PM";
    hours = hours - 12;
  } else if (hours == 0) {
    hours == 12;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  time.textContent = day + ", " + hours + ":" + minutes + " " + day_night;
});


let apiKey = "64b7ff0fc701b4a59b43313e930e6c4a";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Waterford&units=imperial&appid=64b7ff0fc701b4a59b43313e930e6c4a";

function showTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = `${response.data.main.temp}`;
 
  }

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

  function showCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
    let h1 = document.querySelector("h1", "#selector-city");
    h1.innerHTML = `${searchInput.value}`;

  }

  let form = document.querySelector("#search-form");
  form.addEventListener("submit", search);

  


