const API_KEY="dedb2f018bb108f40602995f4433fddd";

//getCurrentPosition은 성공시 객체를 매개변수로 전달해줌
function onGeoOk(position) {
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    // console.log("You live it", lat, lng);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather=document.querySelector("#weather span:nth-child(1)");
        const city=document.querySelector("#weather span:nth-child(2)");
        const temp=document.querySelector("#weather span:nth-child(3)");
        city.innerText=data.name;
        weather.innerText=data.weather[0].main;
        temp.innerText=data.main.temp;
    })
    .catch((error) => 
    console.log("error!"));
    // .then(function(response) {
    //     return response.json();
    // })
    // .then(function(data) {
    //     console.log(data.name, data.weather[0].main);
    // })
    // .catch(function(error){
    //     console.log("error!");
    // });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

//성공과 에러함수를 줘야함
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);