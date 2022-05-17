function onGeoOK(position) {
    const lati = position.coords.latitude;
    const longi = position.coords.longitude;
    console.dir(position);
    console.log(lati, longi);
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}
console.log(navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError));