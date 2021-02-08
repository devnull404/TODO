var countRemovingID = 1
var time = new Date();

document.getElementById("myapp").innerHTML += '<input id="task" type="text" placeholder="Nueva tarea" maxlength="30">';
document.getElementById("myapp").innerHTML += '<button onclick=getTask() style="font-size: 20px">+</button>';

document.getElementsByTagName("input")[0].addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        document.getElementsByTagName("button")[0].click();
    }
});

function getTask() {
    let inputNode = document.getElementById("task");
    let taskText = null;
    if (inputNode.value != "") {
        taskText = inputNode.value;
        inputNode.value = "";
        inputNode.placeholder = "New Task";
        createTask(taskText);
        document.getElementById("task").style.border = "none"
    } else {
        inputNode.placeholder = "¡No puedes dejar vacío este espacio!";
        document.getElementById("task").style.border = "2px solid red"
    }
}

function createTask(str) {
    container = document.getElementById("appContainer")
    let taskContainer = document.createElement("div");
    taskContainer.className = "taskContainer";
    let checkBox  = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "check"
    checkBox.onchange = function onchange(event) {lineT(event, this.parentNode)}
    let textTask = document.createElement("div");
    textTask.innerHTML = str;
    let editButton = document.createElement("button");
    editButton.className = "editButton"
    editButton.style.display = "block";
    editButton.id = "e" + countRemovingID.toString()
    editButton.onclick = function onclick(event) {editTask(this.id)}
    editButton.innerHTML = "Editar"
    let deleteButton = document.createElement("button")
    deleteButton.className = "delButton"
    deleteButton.id = "r" + countRemovingID.toString()
    deleteButton.onclick = function onclick(event) {deleteTask(this.id)}
    deleteButton.innerHTML = "&times"
    container.appendChild(taskContainer)
    container.childNodes[container.childNodes.length-1].appendChild(checkBox)
    container.childNodes[container.childNodes.length-1].appendChild(textTask)
    container.childNodes[container.childNodes.length-1].appendChild(editButton)
    container.childNodes[container.childNodes.length-1].appendChild(deleteButton)

    time = new Date();
    let date  = document.createElement("input");
    date.dataset.startTime = time.getHours() + ":" + time.getMinutes();
    date.type = "time"
    date.className = "timeInput"
    date.value = time.getHours() + ":" + time.getMinutes();
    container.childNodes[container.childNodes.length-1].appendChild(date)



    countRemovingID += 1
}

function deleteTask(something) {
    document.getElementById(something).parentNode.remove()
}

function lineT(event, something) {
    something.querySelector(".editButton").style.display = something.querySelector(".editButton").style.display === "block" ? "none" : "block";
    let taskNode = something.childNodes[1]
    let timeTask = something.querySelector("input[type=time]");
    time = new Date();
    timeTask.value = event.target.checked ? time.getHours() + ":" + time.getMinutes() : timeTask.dataset.startTime;
    taskNode.textContent = event.target.checked ? taskNode.textContent += " (Finalized)" : taskNode.textContent.replace(" (Finalized)", "");
    taskNode.style.color === "" ? taskNode.style.color = "red" : taskNode.style.color = ""
    taskNode.style.textDecoration === "" ? taskNode.style.textDecoration = "line-through" : taskNode.style.textDecoration = ""
}


document.getElementsByClassName("infoBubble")[0].addEventListener("click", function(e) {
    document.getElementsByClassName("infoBubble")[0].remove()
})

function editTask(idTask) {
    task = document.getElementById(idTask).parentNode;
    var textTask = task.querySelector("div");

    var newTextTask = prompt("Escribe la nueva tarea:", textTask.textContent);

    if(newTextTask) {
        textTask.textContent = newTextTask;
    }
    else {
        alert("No se puede agregar una tarea vacia.");
    }
}