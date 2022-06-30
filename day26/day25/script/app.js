const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

const updateUI = (data) => {
  const { cityDets, weather } = data;

  // update details template
  details.innerHTML = `
  <h5 class="my-3">${cityDets.EnglishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>
`;

  // update the night/day & icon images
  if (weather.IsDayTime) {
    const iconSrc = `img/icons/day.svg`;
    document.querySelector(".card img").setAttribute("src", iconSrc);
  } else {
    const iconSrc = `img/icons/night.svg`;
    document.querySelector(".card img").setAttribute("src", iconSrc);
  }

  let timeSrc = weather.IsDayTime ? "img/icons/day.svg" : "img/icons/night.svg";
  document.querySelector(".card img").setAttribute("src", timeSrc);

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

// remove the d-none class if present

const updateCity = async (city) => {
  // console.log(city);
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  return { cityDets, weather };
};

cityForm.addEventListener("submit", (e) => {
  const city = cityForm.city.value.trim();
  if (city != "") {
    // prevent default action
    e.preventDefault();

    // get city value
    cityForm.reset();

    // set local storage
    localStorage.setItem("city", city);

    // update the ui with new city
    updateCity(city)
      .then((data) => updateUI(data))
      .catch((err) => console.log(err));
  }
});

if (localStorage.getItem("city")) {
  updateCity(localStorage.getItem("city"))
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}
