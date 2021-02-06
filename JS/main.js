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

document.getElementById("app").innerHTML += '<input type="text" placeholder="New task">'
document.getElementById("app").innerHTML += '<button>add</button>'