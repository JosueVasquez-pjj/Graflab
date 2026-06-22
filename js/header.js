fetch("components/header.html") 
.then(res => res.text())
.then(data => {
    document.getElementById("header-container").innerHTML = data;

    const menu = document.getElementById("menu");
    const sidebar = document.getElementById("sidebar");
    const btnVolver = document.getElementById("btn-volver");

    menu.addEventListener("click", () => {

        sidebar.classList.toggle("menu-toggle");
        document.body.classList.toggle("sidebar-open");
    });

    btnVolver.addEventListener("click", () => {
        window.history.back();
    });
});