function AbrirMenu() {
    const M = document.getElementById("menu");
    const Nav = document.getElementById("MenuNav");

    if(Nav.style.display == "flex"){
        Nav.style.display = "none";
    } else {
        Nav.style.display = "flex";
        Nav.style.justifyitems = "center";
    }
}