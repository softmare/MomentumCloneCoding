function onGeoOK(position) {
    const lati = position.coords.latitude;
    const longi = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=5282662357536e4d846c54a5131bb14e&units=metric`
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        const weatherElem = document.querySelector("#weather span:first-child");
        const cityElem = document.querySelector("#weather span:last-child");
        const celcius = Math.round(data.main.temp);
        const weatherStatus = data.weather[0].main;
        cityElem.innerText = data.name;
        weatherElem.innerText = `${weatherStatus} / ${celcius}℃`;
    })
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}
console.log(navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError));