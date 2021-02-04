document.addEventListener("mousemove", function(e) {
    drawer()
})

function drawer() {
    let red = Math.floor(Math.random()*254).toString();
    red = (10).toString()
    let green = Math.floor(Math.random()*254).toString();
    let blue = Math.floor(Math.random()*254).toString();
    blue = (10).toString()
    let inProp = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementsByClassName("decorationBar")[1].style.backgroundColor = inProp;
}

document.getElementById("myapp").innerHTML += '<input type="text" placeholder="New task">'
document.getElementById("myapp").innerHTML += '<button>add</button>'