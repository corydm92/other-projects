let createBtn = document.getElementById("create-lineitem");
createBtn.addEventListener("click", function(e) {

    // Parent used to append to div wrapper
    let parent = document.getElementById("task-wrapper");

    // Task input
    let taskInput = document.getElementById("task-input").value;

    // Creates check box
    let newBox = document.createElement("input");
    newBox.setAttribute("type", "checkbox");
    newBox.style.marginRight = "24px"

    // Creates P tag
    let newTask = document.createElement("p");

    newBox.addEventListener("change", function(e) {
        console.log(newTask)
        if (newBox.checked == true){
            newTask.style.textDecoration = "line-through";
          } else {
            newTask.style.textDecoration = "none";
          }
    });

    // Creates Delete Button
    let delButton = document.createElement("button");
    delButton.innerText = "Delete";
    delButton.style.marginLeft = "12px";

    // Delete Listener
    delButton.onclick = function() {
        this.parentElement.remove();
    }

    parent.appendChild(newTask);
    newTask.appendChild(newBox);
    // newTask.innerHTML += ` ${taskInput}`;
    newTask.appendChild(document.createTextNode(`${taskInput}`));
    newTask.appendChild(delButton);

    document.getElementById("task-input").value = ""
});

let taskInput = document.getElementById("task-input");
taskInput.addEventListener("keyup", function(e){
    e.preventDefault();
    if (e.keyCode === 13) {
        document.getElementById("create-lineitem").click();
    }
})
