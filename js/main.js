const reveals = document.querySelectorAll(".reveal"); //Todos los objetos que se revelan

window.addEventListener("scroll", () => { //cada vez que se escrolea se activa esta funcion anonima

    reveals.forEach(item => { //para cada elemento, una sola vez
        const top = item.getBoundingClientRect().top; // obtiene la pocicion del elemento, respecto a la parte superior de la ventana visible
        if(top < window.innerHeight - 100){ // revisa que el objeto este dentro de la pantalla visible
            item.classList.add("active"); //añade la cale activo
        }
        else{
            item.classList.remove("active") // lo remueve
        }
    });
});
