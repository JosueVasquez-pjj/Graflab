fetch("components/imageViewer.html")
.then(res=>res.text())
.then(data=>{

    document.getElementById("image-viewer-container").innerHTML=data;
    
    iniciarImageViewer();

});