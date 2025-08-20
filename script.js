function AbrirMenu() {
    const logo = document.getElementById("logoclt");
    const Nav = document.getElementById("MenuNav");

    if(Nav.style.display == "flex"){
        Nav.style.display = "none";
        logo.style.display = "block";
    } else {
        Nav.style.display = "flex";
        Nav.style.justifyitems = "center";
        logo.style.display = "none";
    }
}