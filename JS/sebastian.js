let sebastian = 3;
function createNode(type, child) {
    var node = document.createElement(type);
    var text = document.createTextNode(child);
    node.appendChild(text);
    return node;
}
function createImg(src, alt, clases){
    let node = document.createElement("img");
    node.src = src;
    node.alt = alt;
    node.className = clases;
    return node;
}
function createAnchor(href, child){
    let node = document.createElement("a");
    let contenido = document.createTextNode(child);
    node.href = href;
    node.appendChild(contenido);
    return node;
}
function createDiv(clase, oneId, contend){
    let node = document.createElement("div");
    node.className = clase;
    if(oneId){
        node.Id = oneId;
    }
    if(contend){
        node.append(contend);
    }
    return node;
}
function construirHeader(){
    let header = document.createElement("header");
    let secion = document.createElement("section");
    let nav = document.createElement("nav");
    // Añadiendo imagen al nav
    nav.appendChild(createImg("./assets/img/611X1UOYvBL._AC_SL1500_.jpg", "TODO Logo", ""));
    //Añadiendo link a nav
    nav.appendChild(createAnchor("#body", "Inicio"))
    // Añadiendo nav a secion 1 de header
    secion.appendChild(nav); 
    //Añadiendo los div
    secion.appendChild(createDiv("decorationBar", false, false));
    secion.appendChild(createDiv("decorationBar", false, false));
    header.appendChild(secion); //Añadiendo la primer seccion a header
    //Aquí comienza la segunda sección del header
    let secion2 = document.createElement("section");
    secion2.appendChild(createNode("h1", "¡Info!"));
    secion2.appendChild(createNode("p", "En esta página podrás realizar un montón de cosas que se encuentran relacionadas a nuestras tareas para el programa BEDU en colaboración con Santander Universidades ¡Esperamos que les guste mucho!"))
    secion2.className = "infoBubble";
    secion2.style = "margin: 0 auto;";
    header.appendChild(secion2);
    return header;
}
document.body.appendChild(construirHeader());