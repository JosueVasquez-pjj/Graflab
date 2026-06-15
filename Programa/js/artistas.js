fetch("data/artistas.json") // obtiene los datos del json
.then(res => res.json()) // convierte la respuesta del fetch en un json
.then(artistas => { //artistas es el nombre del json y toma toda la lista de elementos que contenga
});
