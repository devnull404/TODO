document.body.innerHTML = `<header>
<nav>
    <img src="https://img.icons8.com/plasticine/2x/pencil.png" alt="TODO Logo">
    <a href="#body">Inicio</a>
</nav>
<div class="decorationBar"></div>
<div class="decorationBar"></div>
</header>` + document.body.innerHTML

document.getElementById("body").innerHTML = `<section class="infoBubble">
<h1>2DO.com</h1>
<p>
    En esta página podrás realizar una lista de tareas para tu día a día ¡Esperamos
    que te sea de mucha utilidad!
</p>
</section>` + document.getElementById("body").innerHTML