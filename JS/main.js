var countRemovingID = 1

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

<<<<<<< HEAD
document.getElementById("app").innerHTML += '<input type="text" placeholder="New task">'
document.getElementById("app").innerHTML += '<button>add</button>'
=======
function createTask(str) {
    container = document.getElementById("appContainer")
    let taskContainer = document.createElement("div");
    taskContainer.className = "taskContainer";
    let checkBox  = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "check"
    checkBox.onchange = function onchange(event) {lineT(this.parentNode)}
    let textTask = document.createElement("div");
    textTask.innerHTML = str;
    let deleteButton = document.createElement("button")
    deleteButton.className = "delButton"
    deleteButton.id = "r" + countRemovingID.toString()
    deleteButton.onclick = function onclick(event) {deleteTask(this.id)}
    deleteButton.innerHTML = "&times"
    container.appendChild(taskContainer)
    container.childNodes[container.childNodes.length-1].appendChild(checkBox)
    container.childNodes[container.childNodes.length-1].appendChild(textTask)
    container.childNodes[container.childNodes.length-1].appendChild(deleteButton)

    let date  = document.createElement("input");
    date.type = "time"
    date.className = "timeInput"
    container.childNodes[container.childNodes.length-1].appendChild(date)



    countRemovingID += 1
}

function deleteTask(something) {
    document.getElementById(something).parentNode.remove()
}

function lineT(something) {
    let taskNode = something.childNodes[1].style
    taskNode.color === "" ? taskNode.color = "red" : taskNode.color = ""
    something.childNodes[1].style.textDecoration === "" ? something.childNodes[1].style.textDecoration = "line-through" : something.childNodes[1].style.textDecoration = ""
}


document.getElementsByClassName("infoBubble")[0].addEventListener("click", function(e) {
    document.getElementsByClassName("infoBubble")[0].remove()
})
>>>>>>> 4672feddf844ab5f640e293149e34be66d39df2f
