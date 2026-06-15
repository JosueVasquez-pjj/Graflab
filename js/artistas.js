/*fetch("data/artistas.json") // obtiene los datos del json
.then(res => res.json()) // convierte la respuesta del fetch en un json
.then(artistas => { //artistas es el nombre del json y toma toda la lista de elementos que contenga
    
    
});
*/

async function cargarArtistas(){

    const url = "https://drive.google.com/file/d/1eIfZfDwbD6UijgtQDMcDMakUYxc_AcDU/view?usp=drive_link";
    const contenedor = document.getElementById("contenedor-artistas"); //busca el contenedor principal
    const artistas = await convertirAJson(url);
    
    artistas.forEach(artista => { //para cada elemento del json realizar lo siguiente
    
        contenedor.innerHTML += `
        <a class="card"
            href="detalles.html?tipo=artista&id=${artista.id}">
            <img src="${artista.imagen}">
            <h3>${artista.nombre}</h3>
        </a>
        `;
    });
}

cargarArtistas();