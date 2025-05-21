"use strict"

//let EmptyListMsg = document.querySelector;
//let ClearListButton = document.querySelector;

let toDoInput = document.querySelector("toDoInput") ;
let toDoButton = document.querySelector("toDoButton");
let ToDoList = document.querySelector("ToDoList");

document.addEventListener("DOMContentLoaded", getTodos);
toDoButton.addEventListener("click", addToDo);
ShoppingList.addEventListener("click", deleteToDo);

function addToDo (e) {
    e.preventDefault();

const ToDoListContainer = document.createElement("section"); //div?
ToDoListContainer.classList.add("toDo");

let newToDo = document.createElement("li");
newToDo.innerText = toDoInput.value;

saveLocalToDos(toDoInput.value);
newToDo.classList.add("ToDoItem");
ToDoListContainer.appendChild(newTodo)
toDoInput.value = "";

let completedButton = document.createElement("button");
completedButton.innerHTML = `✓`;
completedButton.classList.add("completedBtn");
ToDoListContainer.appendChild(completedButton);

/*let trashButton = document.createElement("button");
trashButton.innnerHTML = `✗` ;
trashButton.classList.add("trashBtn");
ToDoListContainer.appendChild(trashButton); */


ToDoList.appendChild(ToDoListContainer)


function savelToDos(toDo) {
    let toDos;

if (localStorage.getItem('todDos') === null) {
    toDos = [];
} else {
    toDos = JSON.parse(localStorage.getItem("toDo"));


    let toDoIndex = toDo.children[0].innerTer
}

}
}
