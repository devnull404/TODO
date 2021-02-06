let victor = 1;
var app = document.getElementById("app");
var input, btnSave, navContainer, listUl;
var value;

    //Contenedor para las tareas
    navContainer = document.createElement("div");
    navContainer.id = "contenedor-tareas";
    document.body.appendChild(navContainer);
    navContainer.style.display = "flex";
    navContainer.style.alignItems = "center";
    navContainer.style.justifyContent = "center";

    //lista de las tareas
    listUl = document.createElement("ul");
    listUl.id = "tareas";  
    navContainer.appendChild(listUl);


    function crearTags() {

        app.style.display = "flex";
        app.style.alignItems = "center";
        app.style.justifyContent = "center";
        // app.style.flexDirection = "column";
        
    
        //Crear input
        input =  document.createElement("input");
        input.id = "taskText";
        input.type = "text";
        input.placeholder = "Enter para guardar";
        input.style.marginRight = 10 + 'px';
        app.appendChild(input);
    
        //crear boton
        btnSave= document.createElement("button");
        btnSave.id = "btnListar";
        btnSave.textContent = "Guardar";
        btnSave.style.cursor = "pointer";
        app.appendChild(btnSave);
    
    
    };

    crearTags();
    
    function addTasks(){
        var value = input.value;
        var taskLi, taskChkbx, taskValue, taskBtn;
        taskLi = document.createElement("li");
        taskChkbx = document.createElement("input");
        taskChkbx.setAttribute("type", "checkbox");  
        taskValue = document.createTextNode(value); 
        taskBtn = document.createElement("button");
        taskBtn.textContent = "Eliminar";  
        taskLi.appendChild(taskChkbx);
        taskLi.appendChild(taskValue);
        taskLi.appendChild(taskBtn);
        listUl.appendChild(taskLi);
    
    };

     //Guardar los tareas en la lista
     btnSave.addEventListener('click', function() {
        addTasks();
       });
