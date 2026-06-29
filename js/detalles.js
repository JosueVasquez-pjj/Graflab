const parametros = new URLSearchParams(window.location.search); //lee el url de la pagina actual y lo guarda como "json"
const tipo = parametros.get("tipo");
const id = parametros.get("id");

let archivo = "";
let categoria = "";

switch (tipo) {
    case "obra": 
        archivo = "data/obras.json"
        categoria = "obras"
        break;
    case "artista": 
        archivo = "data/artistas.json"
        categoria = "artistas"
        break;
    case "expocicion": 
        archivo = "data/expociciones.json"
        categoria = "expociciones"
        break;
    default:
        break;
}

let elementoActual = null;

    
fetch(archivo) //busca un archivo de la carpeta de datos
.then(res => res.json())
.then(datos => {

    const elemento = datos.find(item => item.id === id);
    const detalles = document.getElementById("detalles");
    

    const pocicion = datos.findIndex(item => item.id === id);
    
    let prev = "";
    let next = "";
    let moverse = ``;

    // CRREAR la forma de desplazarse
    moverse = `<div class="btns-move">`;

    if(pocicion > 0){
        prev = datos[pocicion - 1].id;
        moverse += `
            <a href="detalles.html?tipo=${tipo}&id=${prev}" class="btn-move btn-prev">
                &#10094;
            </a>` 
    }else{moverse += `<div class="btn-move hidden"></div>`}

    moverse += `<a href="${categoria}.html" class="btn-move btn-home">${categoria}</a>`

    if(pocicion < datos.length - 1){
        next = datos[pocicion + 1].id;
        moverse += `
            <a href="detalles.html?tipo=${tipo}&id=${next}" class="btn-move btn-next">
                &#10095;
            </a>`
    }else{moverse += `<div class="btn-move hidden"></div>`}

    moverse += `</div>`;

    console.log(datos.length);


   
    // IDENTIFICAR QUE CATEGORIAS ES
    if(!elemento){
        detalles.innerHTML = "<h2>Natos NO encontrado</h2>";
        return;
    }
    if(tipo === "obra"){

        let elemento2 = "";
        detalles.classList.add("detalles-contenedor-obra")

        /*
        <a class="btn-detalles" href="https://josuevasquez-pjj.github.io/Graflab/detalles.html?tipo=artista&id=${elemento.artista_id}">
            Detalles Artista
        </a>
        */

        fetch("data/artistas.json") //como necesita datos de un archivo de aqui, lo busca
        .then(res2 => res2.json()) //trasforma el archivo encontrato en un json
        .then(datos2 => {elemento2 = datos2.find(item2 => item2.id === elemento.artista_id);})
        .then(() => {
            detalles.innerHTML = `
            <div class="detalle-contenedor">
                <div class="detalle-lateral">
                    <img
                        src="${elemento.imagen}"
                        alt="${elemento.titulo}"
                        class="detalle-imagen"
                        onclick="abrirImagen(this.src)"
                    >

                </div>
                <div class="detalle-texto">
                    <h1>${elemento.titulo}</h1>
                    <h3>Elaborado por: ${elemento2.seudonimo}</h3>
                    <br>
                    <p><strong>Técnica:</strong> ${elemento.tecnica}</p>
                    <p><strong>Medidas:</strong> ${elemento.medidas}</p>
                    <p><strong>Tiraje:</strong> ${elemento.ediciones}</p>
                    <br>
                    <p>${elemento.descripcion}</p>

                </div>
            </div>
            ${moverse}
            `;
        });
    }
    //<p><strong>Telefono:</strong> ${elemento.telefono}</p>
    if(tipo === "artista"){
        detalles.classList.add("detalles-contenedor-artista")

        detalles.innerHTML = `
        <div class="detalle-contenedor">
            <div class="detalle-lateral">
                <img
                    src="${elemento.imagen}"
                    alt="${elemento.seudonimo}"
                    class="detalle-imagen"
                    onclick="abrirImagen(this.src)"
                >   
            </div>
            <div class="detalle-texto">
                <h1>${elemento.seudonimo}</h1>
                <h3>Nombre: ${elemento.nombre}</h3>
                <br>
                <p><strong>Correo:</strong> ${elemento.correo}</p>
                <p><strong>instagram:</strong> ${elemento.instagram}</p>
                <br>
                <p>${elemento.biografia}</p>

            </div>
        </div>
        ${moverse}
        `;
    }
    if(tipo === "expocicion"){
        detalles.classList.add("detalles-contenedor-expocicion")

        detalles.innerHTML = `
        <div class="detalle-contenedor">
            <div class="detalle-lateral">
                <img
                    src="${elemento.imagen}"
                    alt="${elemento.nombre}"
                    class="detalle-imagen"
                    onclick="abrirImagen(this.src)"
                >   
            </div>
            <div class="detalle-texto">
                <h1>${elemento.nombre}</h1>
                <br>
                <p><strong>Ubicacion:</strong> ${elemento.ubicacion}</p>
                <p><strong>pais:</strong> ${elemento.pais}</p>
                <p><strong>fecha:</strong> ${elemento.fecha}</p>
                <br>
                <p>${elemento.descripcion}</p>

            </div>
        </div>
        ${moverse}
        `;
    }
    elementoActual = datos.find(item => item.id === id);
});

new QRCode(
    document.getElementById("qrcode"),`https://josuevasquez-pjj.github.io/Graflab/detalles.html?tipo=${tipo}&id=${id}`
);

//href="https://josuevasquez-pjj.github.io/Graflab/detalles.html?tipo=artista&id=${elemento.artista_id}

