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
    alert ("Pense à vérifier ta liste avant de partir!");
} else {
    
    let NewItem = document.createElement("li");
    NewItem.innerText = inputValue;
    NewItem.classList.add("quantity");
    ToDoList.appendChild(NewItem);
    

    let TaskQuantity = 1;
    let quantity = document.createElement("span");
    quantity.classList.add("quantity");
    quantity.innerText = `x${TaskQuantity}`;
    quantity.style.display ="none";
    NewItem.appendChild(quantity);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&#8722";
    ToDoList.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteQuantity);

    let addButton = document.createElement("button");
    addButton.innerHTML = "&#43";
    ToDoList.appendChild(addButton);
    addButton.addEventListener("click", addQuantity);

    toDoInput.value = "";

       }
} 


function addQuantity() {
quantity.style.display ="block";
quantity.innerText = `x${TaskQuantity}`;
TaskQuantity++;
NewItem.appendChild(TaskQuantity);
}
    
function deleteQuantity() {
    if (TaskQuantity === 1) {
            ToDoList.removeChild(NewItem);
            ToDoList.removeChild(deleteButton);
            ToDoList.removeChild(addButton);
            ToDoList.removeChild(quantity);
        
    } else if (TaskQuantity > 1) {
        TaskQuantity--;
        quantity.innerText = `x${TaskQuantity}`;
        NewItem.appendChild(TaskQuantity);  
    }

}

