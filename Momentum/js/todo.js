const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

//parsedToDos가 배열을 새로 가리키게 되므로 let
let toDos=[];
const TODOS_KEY="todos";

function saveToDos() {
    //JSON.strignify: object나 array를 string으로 바꿔줌
    //localstorage는 array로 저장이 안되기 때문에 string으로 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    //click이벤트의 target(클릭된 HTML element)중 parentElement(부모요소)
    //button의 부모요소는 li
    const li=event.target.parentElement;
    function toDoFilter(todo) {
        return todo.id!==parseInt(li.id)
    };
    li.remove();
    toDos=toDos.filter(toDoFilter);
    saveToDos();
}

function paintToDo(newTodo) {
    const li=document.createElement("li");
    li.id=newTodo.id;
    const span=document.createElement("span");
    span.innerText=newTodo.text;
    const button=document.createElement("button");
    button.innerText="X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handelToDoSubmit(event) {
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    const newTodoObj={
        text:newTodo,
        //id에 랜덤숫자를 부여
        id:Date.now()
    };
    //push로 array에 item 추가
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handelToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);

if(savedToDos!==null) {
    //strig으로 저장된것을 다시 array로 꺼내줌
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    //array에 있는 각각의 item이 한개의 function을 실행할 수 있게 해줌
    //forEach() 사용: patinrToDO를 parsedToDos 배열의 요소마다 실행
    parsedToDos.forEach(paintToDo);
}

//array의 item삭제는 실제로 배열에서 삭제되는 것이 아님
//삭제하고 싶은 item을 제외하고 새로운 array를 만듬==>filter함수 사용

