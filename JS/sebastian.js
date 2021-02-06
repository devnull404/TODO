let sebastian = 3;
/*
##########################################################
############ Parte para hacer una página de inicio #######
##########################################################
*/
function createNode(type, child, oneId, clase=false) {
    var node = document.createElement(type);
    if(child){
        if(typeof(child) == "object"){
            node.appendChild(child)
        } else if(typeof(child) == "string"){
            var text = document.createTextNode(child);
            node.appendChild(text);
        }
    }
    if(oneId){
        node.id = oneId;
    }
    if(clase){
        node.className = clase;
    }
    return node;
}
function createImg(src, alt, clases){
    let node = document.createElement("img");
    node.src = src;
    node.alt = alt;
    node.className = clases;
    return node;
}
function createAnchor(href, child, oneId, contend){
    let node = document.createElement("a");
    let contenido = document.createTextNode(child);
    node.href = href;
    if(oneId){
        node.id = oneId;
    }
    if(contend){
        node.append(contend);
    }
    node.appendChild(contenido);
    return node;
}
function createDiv(clase, oneId, contend){
    let node = document.createElement("div");
    node.className = clase;
    if(oneId){
        node.id = oneId;
    }
    if(contend){
        node.append(contend);
    }
    return node;
}

//Creando el elemento para el header.
let header = document.createElement("header");
function construirHeader(){
    let secion = document.createElement("section");
    let nav = document.createElement("nav");
    // Añadiendo imagen al nav
    nav.appendChild(createImg("./assets/img/611X1UOYvBL._AC_SL1500_.jpg", "TODO Logo", ""));
    //Añadiendo link a nav
    nav.appendChild(createNode("button", "inicio", "hidenButton"))
    // Añadiendo nav a secion 1 de header
    secion.appendChild(nav); 
    //Añadiendo los div
    secion.appendChild(createDiv("decorationBar", false, false));
    secion.appendChild(createDiv("decorationBar", false, false));
    //Añadiendo la primer seccion a header
    header.appendChild(secion); 
    //Aquí comienza la segunda sección del header
    let secion2 = document.createElement("section");
    secion2.appendChild(createNode("h1", "¡Info!", false));
    secion2.appendChild(createNode("p", "En esta página podrás realizar un montón de cosas que se encuentran relacionadas a nuestras tareas para el programa BEDU en colaboración con Santander Universidades ¡Esperamos que les guste mucho!", false))
    secion2.className = "infoBubble";
    secion2.style = "margin: 0 auto;";
    header.appendChild(secion2);
    header.className = "header";
    return header;
}
//LLamada a la función añadiendo el header al body
document.body.appendChild(construirHeader());
//Cambiando el elemento de la app a oculto
let appToDo = document.getElementById("app");
appToDo.style = "display: none";

//Añadiendo fncionalidad al button
let buttonHiden = document.querySelector("#hidenButton");
buttonHiden.style = "color: red;";
buttonHiden.addEventListener("click", function() {
    header.style = "display: none;";
    app.style = "display: inline-block";
});
/*
##########################################################
############ Aplicación                            #######
##########################################################
*/
let data = [
];
function displayData(){

}
//sección de 
let taskAdd = createNode("section", false, "add");
let taskAddInp = createNode("input", false, "taskAdd");
taskAddInp.type = "text";
taskAddInp.placeholder = "task";
taskAdd.appendChild(taskAddInp);

//Añadiendo botonAdd
taskAdd.appendChild(createNode("button", "Add", "buttonAdd"));
appToDo.appendChild(taskAdd);

//creando seccion de visualización de tareas.
appToDo.appendChild(createNode("section", createNode("ul", false, false, "tareas"), "list"));
let listTask = document.querySelector(".tareas");

function displayTask(contend){
    let unlist = createNode("li", false, false);
    let elementTask = document.createElement("p");
    elementTask.appendChild(document.createTextNode(contend));
    unlist.appendChild(elementTask);
    unlist.appendChild(createNode("button", "delet", false))
    listTask.appendChild(unlist);
    console.log(false);
}

let buttonAdd = document.getElementById("buttonAdd");
var input = document.getElementById('taskAdd');
buttonAdd.onclick = function(){
    let calcio = input.value;
    input.value = "";
    if(calcio == ""){
        windows.alert("Elemento vacio")
    } else{
        displayTask(calcio);
    }
};

// taskAddInp.addEventListener("input", function(event) {
//     data.push(event.target.value);
//     console.log(event.target.value);
// });





  
