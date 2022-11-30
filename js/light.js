const photo = document.getElementById("theme");

if (theme == null) {
    var theme = "light"
}

photo.onclick = () => {
    if (theme == "light") {
        theme = "dark"

        document.querySelector("#theme").src = "img/moon.png";
        document.body.style.backgroundColor = "black";

        document.body.style.color = "whitesmoke";
        document.getElementsByClassName("links").style.color = "whitesmoke";

        document.getElementById("image").style.boxShadow = "4px 4px 14px rgba(255, 255, 255, 20%)";
    } else if (theme == "dark") {
        theme = "light"

        document.querySelector("#theme").src = "img/sun.png";
        document.body.style.backgroundColor = "white";

        document.body.style.color = "black";
        document.getElementsByClassName("links").style.color = "black"

        document.getElementById("image").style.boxShadow = "4px 4px 14px rgba(0, 0, 0, 25%)";
    }
}