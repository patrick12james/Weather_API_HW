const getWeatherAPI = async function(city_name) {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=*remove*1cb331dae0a0c3c1b16cd1b97f54c167&units=imperial`);
  let data = await response.json();
  return await data;
}


const displayData = async (data) => {
  data = await data;}

  // function displayData(weatherData){
  //   let weatherList = document.querySelector('#weatherList');

    weather = weatherData.main[0];

    for (weather of data) {
      let card = document.createElement('card');
      card.innerText = `position: ${driver.position} points: ${driver.points} wins: ${driver.wins} name: ${driver.Driver.givenName + " " + driver.Driver.familyName} nationality: ${driver.Driver.nationality}`
        weatherList.append(card);
    }





const weatherForm = document.getElementById('weatherForm');
weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let city = e.target.city.value;

    let data = await getWeatherAPI(city);
    await displayData(data, city);
});
