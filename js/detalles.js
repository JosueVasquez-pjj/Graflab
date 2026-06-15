const parametros = new URLSearchParams(window.location.search);
const tipo = parametros.get("tipo");
const id = parametros.get("id");

const archivo =
    tipo === "obra"
    ? "data/obras.json"
    : "data/artistas.json";

fetch(archivo)
.then(res => res.json())
.then(datos => {

    const elemento = datos.find(item => item.id === id);
    const detalles = document.getElementById("detalles");

    if(!elemento){
        detalles.innerHTML = "<h2>No encontrado</h2>";
        return;
    }
    if(tipo === "obra"){
        detalles.innerHTML = `
        <img src="${elemento.imagen}" class="detalles-img">
        <h1>${elemento.titulo}</h1>
        <h3>${elemento.artista}</h3>
        <p>${elemento.descripcion}</p>
        `;
    }
    else{
        detalles.innerHTML = `
        <img src="${elemento.imagen}" class="detalles-img">
        <h1>${elemento.nombre}</h1>
        <p>${elemento.biografia}</p>
        `;
    }
});

new QRCode(
    document.getElementById("qrcode"),
    `https://josuevasquez-pjj.github.io/Graflab/detalles.html?tipo=${tipo}&id=${id}`
);
