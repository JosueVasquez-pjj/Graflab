const parametros = new URLSearchParams(window.location.search); //lee el url de la pagina actual y lo guarda como "json"
const tipo = parametros.get("tipo");
const id = parametros.get("id");

const archivo =
    tipo === "obra"
    ? "data/obras.json"
    : "data/artistas.json";

let elementoActual = null;

    
fetch(archivo) //busca un archivo de la carpeta de datos
.then(res => res.json())
.then(datos => {

    const elemento = datos.find(item => item.id === id);
    const detalles = document.getElementById("detalles");

    if(!elemento){
        detalles.innerHTML = "<h2>Natos NO encontrado</h2>";
        return;
    }
    if(tipo === "obra"){

        let elemento2 = "";

        fetch("data/artistas.json") //como necesita datos de un archivo de aqui, lo busca
        .then(res2 => res2.json()) //trasforma el archivo encontrato en un json
        .then(datos2 => {elemento2 = datos2.find(item2 => item2.id === elemento.artista_id);})
        .then(() => {
            detalles.innerHTML = `
            <div class="detalle-contenedor">
                <div class="detalle-texto">
                    <h1>${elemento.titulo}</h1>
                    <h3>Por: ${elemento2.nombre}</h3>
                    <br>
                    <p><strong>Técnica:</strong> ${elemento.tecnica}</p>
                    <p><strong>Medidas:</strong> ${elemento.medidas}</p>
                    <p><strong>Precio:</strong> ${elemento.precio} lempiras</p>
                    <p><strong>Iraje:</strong> ${elemento.ediciones}</p>
                    <p><strong>Ejemplares disponibles:</strong> ${elemento.disponibles}</p>
                    <br>
                    <p>${elemento.descripcion}</p>

                </div>
                <div class="detalle-lateral">
                    <img
                        src="${elemento.imagen}"
                        alt="${elemento.titulo}"
                        class="detalle-imagen"
                    >
                    <a class="btn-detalles" href="https://josuevasquez-pjj.github.io/Graflab/detalles.html?tipo=artista&id=${elemento.artista_id}">
                        Detalles Artista
                    </a>

                </div>
            </div>
            `;
        });
    }
    //<p><strong>Telefono:</strong> ${elemento.telefono}</p>
    if(tipo === "artista"){
        detalles.innerHTML = `
        <div class="detalle-contenedor">
            <div class="detalle-texto">
                <h1>${elemento.nombre}</h1>
                <h3>Seudonimo: ${elemento.seudonimo}</h3>
                <br>
                <p><strong>Correo:</strong> ${elemento.correo}</p>
                <p><strong>Correo:</strong> ${elemento.instagram}</p>
                <br>
                <p>${elemento.biografia}</p>

            </div>
            <div class="detalle-lateral">
                <img
                    src="${elemento.imagen}"
                    alt="${elemento.seudonimo}"
                    class="detalle-imagen"
                >   
            </div>
        </div>
        `;
    }
    elementoActual = datos.find(item => item.id === id);
});

new QRCode(
    document.getElementById("qrcode"),`https://josuevasquez-pjj.github.io/Graflab/detalles.html?tipo=${tipo}&id=${id}`
);

//href="https://josuevasquez-pjj.github.io/Graflab/detalles.html?tipo=artista&id=${elemento.artista_id}

