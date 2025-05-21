"use strict"

let toDoInput = document.querySelector(".toDoInput") ;
let toDoButton = document.querySelector(".toDoButton");
let ToDoList = document.querySelector(".ToDoList");


toDoButton.addEventListener("click", addToDoTask);
toDoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addToDoTask(e);
    }
}
); 
  

function addToDoTask (event) {
event.preventDefault();

let inputValue = toDoInput.value.trim();
if (inputValue === "") {
    alert ("Pense à bien compléter ta liste avant de partir!");
} else {

    let NewItem = document.createElement("li");
    NewItem.innerText = inputValue;
    ToDoList.appendChild(NewItem);

    let addButton = document.createElement("button");
    addButton.innerHTML = "&#8722";
    ToDoList.appendChild(addButton);
    addButton.addEventListener("click", addQuantity);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&#43";
    ToDoList.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
       ToDoList.removeChild(NewItem);
       ToDoList.removeChild(deleteButton);

    toDoInput.value = "";
         });

       }
} 


function addQuantity() {

}
    
function deleteQuantity() {
    if (TaskQuantity === 1) {
        deleteButton.addEventListener("click", function () {
            ToDoList.removeChild(NewItem);
            ToDoList.removeChild(deleteButton);
        
    });

} else if (TaskQuantity > 1) {
        deleteButton.addEventListener("click", function () {
           
        
    });

}
}
