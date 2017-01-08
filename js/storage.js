//Para almacenar datos del usuario en el navegador que se está utilizando. Se ALMACENA EN EL NAVEGADOR

if (typeof(Storage) !== 'undefined') { //Navegador, tienes el objeto storage? Local no se pierde cuando cerramos ordenador
    localStorage.setItem("name", "Batman");
    console.log(localStorage.getItem("name"));
    //localStorage.removeItem("name");
} else {
    console.error("No dispones de webstorage, instalalo");
}

//en sessionStorage se pierde la información al cerrar el navegador