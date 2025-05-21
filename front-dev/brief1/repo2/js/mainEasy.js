"use strict"

let toDoInput = document.querySelector(".toDoInput") ;
let toDoButton = document.querySelector(".toDoButton");
let ToDoList = document.querySelector(".ToDoList");

toDoButton.addEventListener("click", addToDo);
toDoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addToDo(e);
    }
}
); 
  

function addToDo (event) {
event.preventDefault();

let inputValue = toDoInput.value.trim();
if (inputValue === "") {
    alert("Oups! Tu n'as pas écrit de texte");
} else {

let NewItem = document.createElement("li");
NewItem.innerText = inputValue;
ToDoList.appendChild(NewItem);

toDoInput.value = "";

}


} 


