fetch("data/artistas.json")
.then(res => res.json())
.then(artistas => {
    
    const contenedor = document.getElementById("contenedor-artistas");
    
    artistas.forEach(artista => {
        
        contenedor.innerHTML += `
        <a class="card"
            href="detalles.html?tipo=artista&id=${artista.id}">
            <img src="${artista.imagen}">
            <h3>${artista.nombre}</h3>
        </a>
        `;
    });
});
