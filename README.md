## 2Do App
Esta aplicación fue desarrollada en javascript, y cumple con los requisitos definidos en el proyecto BEDU Santander.

## Equipo No. 2
![alt text](https://github.com/devnull404/TODO/blob/develop/assets/doc/PORTADABEDU.svg)

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

Basándonos en la estructura de árbol de una página HTML, que podemos encontrar en el siguiente diagrama, es posible dividir nuestra aplicación en dos entidades, el header o el final del elemento *body* desde el linkeamos nuestros archivos javascript que contienen las funciones anteriormente mencionadas.

![alt text](https://github.com/devnull404/TODO/blob/develop/assets/doc/BEDU1.png)

Entonces, agregando JS al HTML, podemos encontrar funciones que crean los elementos necesarios, así como algunos *event listeners* que se encargan de llamar a ciertas funciones en caso de que se presente un estado determinado. 

![alt text](https://github.com/devnull404/TODO/blob/develop/assets/doc/BEDU2.png)

## Estructura de trabajo en equipo remoto
En el diagrama que se presenta a continuación, podemos observar que nos basamos en un repositorio principal, y entonces el resto del equipo hizo un fork de este para así clonar en sus equipos localmente; una vez terminada su parte del proyecto, lo único que hicieron fue un *pull request* que alguien del equipo se encarga de revisar y aceptar para porder hacer merge en la rama develop, uniendo los cambios de cada uno de los integrantes del equipo.

![alt text](https://github.com/devnull404/TODO/blob/develop/assets/doc/GITHUBBEDU.png)


## Conclusiones

- Sebastian:

 Un problema que tuve en este examen fue entender cómo se comportaba la implementación de las funciones que se asignan a los eventos. Específicamente cuando utilizas funciones para crear nuevos elementos y esos elementos tienen eventos con más funciones. Por lo que me di cuenta que tener una buena planeación es importante para obtener el resultado deseado.

 - Juan Carlos:

 Para desarrollar este proyecto el principal problema fue el uso de GitHub para unir los repositorios con pull request ya que habían conflictos y no sabía como resolverlos al inicio, pero en lo demás solo era cuestión de investigar y no fue tan complicado y me sirvió mucho el proyecto para entender mas sobre los eventos y los nodos de los cuales no tenía mucho conocimiento.

 - Victor:

 En el desarrollo de este proyecto, para mi los que más  se me dificultó fue hacer, crear los nodos y darle los estilos. Creo que las funciones las llevamos a cabo muy bien ya que fueron de los temas que más entendi. Me pareció un gran proyecto para fortalecer todo lo que hemos aprendido a lo largo de estas 8  sesiones

 - Francisco:

Todo lo que realizamos guardó relación con lo aprendido durante los módulos anteriores, y encontramos una manera flexible para trabajar colaborativamente en remoto, además de que aprendimos muchas cosas necesarias para trabajar con javascript, de las que no éramos conscientes. 