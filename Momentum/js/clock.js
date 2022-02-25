const clock=document.querySelector("h2#clock");

function getClock() {
    const date=new Date();
    //padStart:조건 길이에 부합하지 않을경우 앞에 원하는 문자를 추가해줌
    //시간이 int형이므로 string로 바꿔줌
    const hours=String(date.getHours()).padStart(2, "0");
    const minutes=String(date.getMinutes()).padStart(2, "0");
    const seconds=String(date.getSeconds()).padStart(2, "0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock(); //페이지로드시 시간이 바로 뜸
setInterval(getClock, 1000);