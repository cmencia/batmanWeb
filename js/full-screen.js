document.getElementById("video-batman").addEventListener("click" , function(event) { //El event es opcional
    launchFullScreen(this);
    this.play(); //Para empezar directamente con el play
});

document.getElementById("video-batman").addEventListener("ended", function(event){ //Función para cerrar cuando acabe
    exitFullScreen();
});

function launchFullScreen(element) {
    if (element.requesFullScreen) { //Le preguntamos si tiene la API de pantalla completa
        element.requesFullScreen(); //Si lo tiene lo ejecutamos. 1 para cada navegador
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exitFullScreen() {
    if (document.exitFullScreen) { //Podemos salir apuntando a document
        document.exitFullScreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if(document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}