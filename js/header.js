let scrollY = 0;

fetch("components/header.html") 
.then(res => res.text())
.then(data => {
    document.getElementById("header-container").innerHTML = data;

    const menu = document.getElementById("menu");
    const btnVolver = document.getElementById("btn-volver");

    menu.addEventListener("click", () => {

        
        
        if(!document.body.classList.contains("sidebar-open")){
            scrollY = window.scrollY;
            document.body.style.top = `-${scrollY}px`;
            document.body.classList.add("sidebar-open");
        }else{
            document.body.classList.remove("sidebar-open");
            document.body.style.top = "";
            window.scrollTo(0,scrollY);
        }
        
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("menu-toggle");
        
    });

    btnVolver.addEventListener("click", () => {
        window.history.back();
    });
});