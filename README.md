## 2Do App
Esta aplicación fue desarrollada en javascript, y cumple con los requisitos definidos en el proyecto BEDU Santander.

## Equipo No. 2
- Francisco Mendoza Ruiz
- Victor Martinez
- Juan Andres Gonzalez
- Sebastian García

# ¿Cómo funciona nuestra aplicación?
Para ilustrar de una manera más consisa nuesta lógica, decidimos ilustrarla para que su comprensión sea más fácil, por lo que resta decir que existen 4 funciones principales, las que se encargan de agregar el contenido funcional a nuestra página, estas son:

- getTask
- createTask
- deleteTask
- lineT

El contenido de estas, es el siguiente:

``` javascript
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
```

``` javascript
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
```

``` javascript
function deleteTask(something) {
    document.getElementById(something).parentNode.remove()
}
```

``` javascript
function lineT(something) {
    let taskNode = something.childNodes[1].style
    taskNode.color === "" ? taskNode.color = "red" : taskNode.color = ""
    something.childNodes[1].style.textDecoration === "" ? something.childNodes[1].style.textDecoration = "line-through" : something.childNodes[1].style.textDecoration = ""
}
```