const API_KEY = "5ac2c42b47a9c31c95a3ca7f7704c130";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}
function onGeoError(){
    alert("당신을 찾을 수 없군요. 날씨 정보를 제공할 수 없어요.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);   