fetch("data/artistas.json") // obtiene los datos del json
.then(res => res.json()) // convierte la respuesta del fetch en un json
.then(artistas => { //artistas es el nombre del json y toma toda la lista de elementos que contenga
    
    const contenedor = document.getElementById("contenedor-artistas");
    
    artistas.forEach(artista => { //para cada elemento del json realizar lo siguiente
        
        contenedor.innerHTML += `
            <a class="card"
                href="detalles.html?tipo=artista&id=${artista.id}">
                <img src="${artista.imagen}">
                <h3>${artista.seudonimo}</h3>
            </a>
        `;
    });
});