fetch("data/expociciones.json")
.then(res => res.json())
.then(expociciones => {
    
    const contenedor = document.getElementById("contenedor-expociciones");

    expociciones.forEach(expocicion => {

        contenedor.innerHTML += `
            <a class="card"
                href="detalles.html?tipo=expocicion&id=${expocicion.id}">
                <img src="${expocicion.imagen}">
                <h3>${expocicion.nombre}</h3>
            </a>
        `;
    });
})