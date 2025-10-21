const input = document.getElementById("taskInput"); //get the input 
const addBtn = document.getElementById("addTaskBtn");// get the button element to use letter for event listener
const taskList = document.getElementById("taskList"); // list of tasks we are going to create

addBtn.addEventListener("click", function() {
  const taskText = input.value.trim(); // we use .value to get content and we use .trim so we cut any space after or before the txt

  if (taskText === "") return;
    const li = document.createElement("li"); // create a list elemint
    li.textContent = taskText;

    // Create Delete Button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft = "10px";
    delBtn.style.background = "red";
    delBtn.style.border = "none";
    delBtn.style.color = "white";
    delBtn.style.borderRadius = "4px";
    delBtn.style.cursor = "pointer";

    // when clicked removes the task

    delBtn.addEventListener("click", function(){
      li.remove();
    })




    li.appendChild(delBtn);
    taskList.appendChild(li);
    input.value = ""; // clear input
  
});
