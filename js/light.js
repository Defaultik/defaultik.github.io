const photo = document.getElementById("theme");

if (theme == null) {
    var theme = "light"
}

photo.onclick = () => {
    if (theme == "light") {
        theme = "dark"

        document.querySelector("#theme").src = "img/moon.png";
        document.body.style.backgroundColor = "rgb(20, 20, 20)";

        document.body.style.color = "whitesmoke";
        document.getElementsByClassName("links").style.color = "whitesmoke";
        
    } else if (theme == "dark") {
        theme = "light"

        document.querySelector("#theme").src = "img/sun.png";
        document.body.style.backgroundColor = "white";

        document.body.style.color = "black";
        document.getElementsByClassName("links").style.color = "black"
    }
}