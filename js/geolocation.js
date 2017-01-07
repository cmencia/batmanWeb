

function getLocation(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, errorHandler); //Para obtener la posición
    } else {
        alert ("Geolocalizacion no soportada");
    }
}

function showPosition(position) { //Nos devuelve un error que le llamamos position-
    //
    var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensor=true";
    var xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            console.log(xhr);
            console.log("Respuesta servidor", JSON.parse(xhr.responseText));
        }
    }

    xhr.send();
}

function errorHandler(error) { //Manejador de errores
    switch(error.code) {
        case error.PERMISSION_DENIED: //Errores fijos
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

function fakePost() {
    var url = 'http://jsonplaceholder.typicode.com/posts';

    var xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            console.log(xhr);
            console.log("Respuesta servidor", JSON.parse(xhr.responseText));
        }
    }

    xhr.send();
}

// fakePost();

getLocation();