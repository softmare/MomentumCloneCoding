const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "toDos";

let toDos = [];

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newToDoObj.id;
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", deleteToDo.bind(null, li));
    span.innerText = newToDoObj.text;
    toDos.push(newToDoObj)
    toDoList.appendChild(li);
}

function deleteToDo(li) {
    toDos = toDos.filter((toDoObj) => {
        return toDoObj.id !== parseInt(li.id);
    })
    li.remove();
    saveToDos();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    paintToDo(newTodoObj);
    //update localTodos
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function loadToDos() {
    const savedToDos = localStorage.getItem(TODOS_KEY);
    if(savedToDos === null) return;
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
loadToDos();