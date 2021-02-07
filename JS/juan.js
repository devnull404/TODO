var myApp = document.querySelector("#app");

/*
 * Función para crear un nodo o añadir un hijo a un nodo existente
 * type, si es un string crea un nodo, si es un elemento html le añade el hijo
 * child, si se omite solo crea el nodo, si no se omite y es un string se crea un nodo de texto y se añade al nodo type creado, y si no es un string se hace un append al nodo creado
*/
function createNode(type, child = "") {
    if(typeof type === "string") {
        // Si type es un string se crea
        var node = document.createElement(type);

        if(child) {
            // Si child existe 
            if(typeof child === "string") {
                // Si child existe y es un string se crea y se hace un append a type
                var text = document.createTextNode(child);
                node.appendChild(text);
            }
            else {
                // si child no es un string se hace un append al elemento creado
                node.appendChild(child);
            }
        }

        return node;
    }
    else {
        // Si type es un elemento HTML se hace un appendChild con child
        type.appendChild(child);
    }
}

// Nodo para la img de la navegación
var imgNav = createNode("img");
imgNav.src = "./assets/img/611X1UOYvBL._AC_SL1500_.jpg";
imgNav.alt = "TODO Logo";

// Nodo para el link en la navegación
var linkInicio = createNode("a", "Inicio");
linkInicio.href = "#body";

// Nodo de la barra de navegación
var navBar = createNode("nav", imgNav);
createNode(navBar, linkInicio);

// Nodo barra de decoración
var decorationBar = createNode("div");
decorationBar.classList.add("decorationBar");

// Nodo header que contiene la navegación y las barras decorativas
var header = createNode("header");
createNode(header, navBar);
createNode(header, decorationBar);
createNode(header, decorationBar.cloneNode()); 

// Añadir el header al div app principal
createNode(myApp, header);

// Nodo para el main
var main = createNode("main");
main.id = "body";

// Añadir el main al div app principal
createNode(myApp, main);

var sectionInfo = createNode("section");
sectionInfo.classList.add("infoBubble");

createNode(sectionInfo, createNode("h1", "¡Info!"));
createNode(sectionInfo, createNode("p", "En esta página podrás realizar un montón de cosas que se encuentran relacionadas a nuestras tareas para el programa BEDU en colaboración con Santander Universidades ¡Esperamos que les guste mucho!"));

createNode(main, sectionInfo);

var sectionApp = createNode("article");
sectionApp.classList.add("appContainer");
createNode(main, sectionApp);

// Nodo form para añadir las tareas
var formApp = createNode("form");

var inputForm = createNode("input");
inputForm.id = "newTask";
inputForm.type = "text";
inputForm.placeholder = "Nueva tarea...";
inputForm.required = "true";

var buttonForm = createNode("input");
buttonForm.classList.add("btn", "btn-success");
buttonForm.type = "submit";
buttonForm.value = "Añadir";

createNode(formApp, inputForm);
createNode(formApp, buttonForm);
createNode(sectionApp, formApp);

var myList = createNode("ol");
myList.id = "myList";

var myTasks = myList.children;

createNode(sectionApp, myList);

formApp.addEventListener("submit", (event) => {
    event.preventDefault();

    var newTask = inputForm.value.replace(/ +/g, " ");

    if(newTask) {
        if(!validateTask(newTask, myTasks)) {
            createTask(inputForm.value);
        }
        else {
            alert("No se puede agregar una tarea repetida");
        }
    }
    else {
        alert("No se puede agregar una tarea vacia.");
    }

    event.target.reset();
})

function createTask(task) {
    var myTask = createNode("li");
    var taskContainer = createNode("div");
    taskContainer.classList.add("taskContainer");

    var checkBoxTask = createNode("input");
    checkBoxTask.type = "checkbox";

    checkBoxTask.addEventListener("change", (event) => {
        if(event.target.checked) {
            taskText.style.textDecoration = "line-through";
            buttonEditTask.style.display = "none";
        }
        else {
            taskText.style.textDecoration = "none";
            buttonEditTask.style.display = "block";
        }
    })

    var taskText = createNode("p", task);

    var taskActions = createNode("div");
    taskActions.classList.add("actions");

    var buttonEditTask = createNode("button");
    buttonEditTask.classList.add("btn", "btn-edit");
    buttonEditTask.textContent = "Editar";
    buttonEditTask.addEventListener("click", () => {
        editTask(myTask);
    });
    
    var buttonDeleteTask = createNode("button");
    buttonDeleteTask.classList.add("btn", "btn-delete");
    buttonDeleteTask.textContent = "Eliminar";
    buttonDeleteTask.addEventListener("click", () => {
        deleteTask(myTask);
    });

    createNode(taskActions, buttonEditTask);
    createNode(taskActions, buttonDeleteTask);

    createNode(taskContainer, checkBoxTask);
    createNode(taskContainer, taskText);
    createNode(taskContainer, taskActions);
    createNode(myTask, taskContainer);
    
    createNode(myList, myTask);
}

function validateTask(taskText, actualTasks) {
    var tmpTasks = [...actualTasks];
    var taskExist = tmpTasks.some(task => {
        return task.querySelector("p").textContent.replace(/ +/g, " ").toLowerCase() === taskText.toLowerCase();
    });

    return taskExist;
}

function deleteTask(task) {
    var confirmDelete = confirm("¿Esta seguro de eliminar la tarea? /n Esta acción no se puede revertir");

    if(confirmDelete) {
        myList.removeChild(task);
    }
}

function editTask(task) {
    var textTask = task.querySelector("p");
    var newTextTask = prompt("Escribe la nueva tarea:", textTask.textContent);

    if(newTextTask) {
        if(!validateTask(newTextTask, myTasks)) {
            textTask.textContent = newTextTask;
        }
        else {
            alert("No se puede agregar una tarea repetida");
        }
    }
    else {
        alert("No se puede agregar una tarea vacia.");
    }
}