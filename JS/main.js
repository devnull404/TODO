document.addEventListener("mousemove", function(e) {
    drawer()
})

function drawer() {
    let red = Math.floor(Math.random()*254).toString();
    let green = Math.floor(Math.random()*40).toString();
    let blue = Math.floor(Math.random()*254).toString();
    let inProp = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementsByClassName("decorationBar")[1].style.backgroundColor = inProp;
}
