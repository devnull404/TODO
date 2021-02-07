var countRemovingID = 1

document.addEventListener("mousemove", function(e) {
    drawer(e)
});

function drawer(event) {
    let viewW = window.innerWidth;
    let viewH = window.innerHeight;
    let red = (180).toString();
    let green = ((event.offsetX/viewW)*254).toString();
    let blue = ((event.offsetY/viewH)*254).toString();
    let inProp = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementsByClassName("decorationBar")[1].style.backgroundColor = inProp;
}

document.getElementById("myapp").innerHTML += '<input id="task" type="text" placeholder="New task">'
document.getElementById("myapp").innerHTML += '<button onclick=getTask()>add</button>'
document.getElementsByTagName("input")[0].addEventListener("keyup", function (e) {
    console.log(e.key)
    if (e.key === "Enter") {
        document.getElementsByTagName("button")[0].click()
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
        inputNode.placeholder = "¡The input cannot be empty!";
        document.getElementById("task").style.border = "2px solid red"
    }
}

function createTask(str) {
    container = document.getElementById("appContainer")
    let taskContainer = document.createElement("div");
    taskContainer.className = "taskContainer";
    let checkBox  = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.class = "check"
    let textTask = document.createElement("div");
    textTask.innerHTML = str;
    let deleteButton = document.createElement("button")
    deleteButton.className = "delButton"
    deleteButton.id = "r" + countRemovingID.toString()
    deleteButton.onclick = function onclick(event) {test(this.id)}
    deleteButton.innerHTML = "&times"
    container.appendChild(taskContainer)
    container.childNodes[container.childNodes.length-1].appendChild(checkBox)
    container.childNodes[container.childNodes.length-1].appendChild(textTask)
    container.childNodes[container.childNodes.length-1].appendChild(deleteButton)
    countRemovingID += 1
}

function test(something) {
    console.log(something)
    document.getElementById(something).parentNode.remove()
}