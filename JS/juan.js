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

var sectionApp = createNode("section");
// Referencia de estilo base, modificar en main.css
sectionApp.style.border = "1px solid black";
sectionApp.style.width = "90%";
sectionApp.style.display = "flex";
sectionApp.style.flexDirection = "column";
sectionApp.style.alignItems = "center";
sectionApp.style.padding = "10px 0";
sectionApp.classList.add("appContainer");
createNode(main, sectionApp);

// Nodo form para añadir las tareas
var formApp = createNode("form");
createNode(formApp, createNode("h3", "TODO List"));

var inputForm = createNode("input");
inputForm.id = "newTask";
inputForm.type = "text";
inputForm.placeholder = "Nueva tarea...";
inputForm.required = "true";
// Referencia de estilo base, modificar en main.css
inputForm.style.border = "1px solid black";

var buttonForm = createNode("input");
buttonForm.type = "submit";
buttonForm.value = "Añadir";
// Referencia de estilo base, modificar en main.css
buttonForm.style.border = "1px solid black";

createNode(formApp, inputForm);
createNode(formApp, buttonForm);
createNode(sectionApp, formApp);

var myList = createNode("ol");
myList.id = "myList";
myList.style.marginTop = "10px";

createNode(sectionApp, myList);

formApp.addEventListener("submit", (event) => {
    event.preventDefault();

    createTask(inputForm.value);

    event.target.reset();
})

function createTask(task) {
    var myTask = createNode("li");

    var checkBoxTask = createNode("input");
    checkBoxTask.type = "checkbox";
    checkBoxTask.style.display = "inline";
    checkBoxTask.style.marginRight = "5px";

    checkBoxTask.addEventListener("change", (event) => {
        if(event.target.checked) {
            taskText.style.textDecoration = "line-through";
        }
        else {
            taskText.style.textDecoration = "none";
        }
    })

    var taskText = createNode("p", task);
    taskText.style.display = "inline";

    var buttonDeleteTask = createNode("button");
    buttonDeleteTask.textContent = "Eliminar";
    buttonDeleteTask.style.border = "1px solid black";

    buttonDeleteTask.addEventListener("click", () => {
        myList.removeChild(myTask);
    })

    createNode(myTask, checkBoxTask);
    createNode(myTask, taskText);
    createNode(myTask, buttonDeleteTask);
    
    createNode(myList, myTask);
}