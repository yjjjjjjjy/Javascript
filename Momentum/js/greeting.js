const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");
const todoForm=document.querySelector("#todo-form");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event) {
    event.preventDefault(); //기본동작(form은 페이지 새로고침)을 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);  
    paintGreetings(username);
}

function paintGreetings(username) {  
    // greeting.innerText="Hello" + username; 
    greeting.innerText=`Hello ${username} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
}

//"username" key값의 value값을 savedUsername에 저장
const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername===null) {
    //form
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    //greeting
   paintGreetings(savedUsername);
}