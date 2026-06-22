

function descargarQRConTexto(){

    const qrCanvas = document.querySelector("#qrcode canvas");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 500;
    canvas.height = 600;

    // Fondo
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // Título superior
    ctx.fillStyle = "#111";
    ctx.font = "bold 30px Poppins";
    ctx.textAlign = "center";

    ctx.fillText("GRAFLAB",250,60);

    // QR
    ctx.drawImage(qrCanvas,100,100,300,300);

    let parametros = new URLSearchParams(window.location.search);
    let tipo = parametros.get("tipo");
    //console.log(tipo);
    if(tipo === "obra"){
            // Nombre de la obra
        ctx.fillText(elementoActual.titulo,250,470);
        //ctx.fillText(elementoActual.artista,250,520);
    }
    if(tipo === "artista"){
        // Nombre de la obra
        ctx.fillText(elementoActual.nombre,250,470);
        ctx.fillText(elementoActual.seudonimo,250,520);
    }

    const enlace = document.createElement("a");

    enlace.href = canvas.toDataURL("image/png");
    enlace.download = `QR-GRAFLAB-${parametros.get("id")}.png`;
    enlace.click();
}
