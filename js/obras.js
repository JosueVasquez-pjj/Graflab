fetch("data/obras.json")
.then(res => res.json())
.then(obras => {

    const contenedor = document.getElementById("contenedor-obras");

    obras.forEach(obra => {

        contenedor.innerHTML += `
            <a class="card"
                href="detalles.html?tipo=obra&id=${obra.id}">
                <img src="${obra.imagen}">
                <h3>${obra.titulo}</h3>
            </a>
        `;
    });
});