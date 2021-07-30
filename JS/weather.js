const API_KEY = '13a73d1cbc3c8c8025c458a800490e4d';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log('your position is', lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      weather.innerText = `${data.name} / ${data.main.temp}`;
      city.innerText = data.weather[0].main;
    });
}

function onGeoError() {
  alert('위치를 찾을 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
