//getCurrentPosition은 성공시 객체를 매개변수로 전달해줌
function onGeoOk(position) {
    const lat=position.coords.latitude;
    const lng=position.coords.longitude;
    console.log("You live it", lat, lng);
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

//성공과 에러함수를 줘야함
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);