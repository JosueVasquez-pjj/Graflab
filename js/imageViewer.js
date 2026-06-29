let escala = 0.2;
let mover = false;
let inicioX = 0;
let inicioY = 0;
let x = 0;
let y = 0;


let ultimoX;
let ultimoY;


const visor = ()=> document.getElementById("image-viewer");
const imagen = ()=> document.getElementById("viewer-image");

function actualizarTransform(){
    
    imagen().style.transform =
        `
        translate(${x}px,${y}px)
        scale(${escala})
        `;
}

// EVENTOS DE IMAGN
function iniciarImageViewer(){

    imagen().addEventListener("pointerdown",(e)=>{

        mover = true;

        ultimoX = e.clientX;
        ultimoY = e.clientY;
        
        inicioX = e.clientX - x;
        inicioY = e.clientY - y;

    });
    imagen().addEventListener("pointermove",(e)=>{
    
        if(!mover) return;
    
        x += e.clientX - ultimoX;
        y += e.clientY - ultimoY;
        
        ultimoX = e.clientX;
        ultimoY = e.clientY;
    
        actualizarTransform();
    });
    imagen().addEventListener("pointerup",()=>{ 
        mover=false;
    });
}

function abrirImagen(src){
    escala = 0.2;
    x = 0;
    y = 0;

    imagen().src = src;
    actualizarTransform();

    document.body.style.overflow = "hidden";

    visor().classList.add("open");
}

function cerrarImagen(){ //funciona
    visor().classList.remove("open");

    document.body.style.overflow = "";
}

// EVENTOS DE ZOOM
document.addEventListener("wheel",(e)=>{ //funciona

    if(!visor().classList.contains("open"))
        return;

    e.preventDefault();

    const escalaAnterior = escala;

    if(e.deltaY<0){
        escala*=1.1;

    }else{
        escala/=1.1;
    }

    const factor = escala / escalaAnterior;
    escala=Math.max(.1,Math.min(9,escala));

    x *= factor;
    y *= factor;

    actualizarTransform();

},{passive:false});



// EVENTOS PARA SALIR
window.addEventListener("keydown",(e)=>{
    if(e.key==="Escape"){
        cerrarImagen();
    }
});

document.addEventListener("click",(e)=>{
    if(e.target.id==="viewer-close"){
        cerrarImagen();
    }
    if(e.target.id==="image-viewer"){
        cerrarImagen();
    }
});

