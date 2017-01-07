/**
 * Created by Carlos on 7/1/17.
 */

var navbarItems = document.getElementsByClassName('navbar-item');

for (var i = 0; i < navbarItems.length; i++) {
    navbarItems[i].addEventListener('click', function(event){
        deleteActiveClass();

        if (Modernizr.classList) {
            this.classList.add('active');
        } else {
            this.className += ' active';
        }

        var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
        if (sectionToGo.length > 1) {
            event.preventDefault();
            var goTo = sectionToGo[sectionToGo.length - 1];
            getElementByIdAndScroll(goTo);
        }
    });
}

function getElementByIdAndScroll(name) { //Cogemos la clase para saber a la sección que hemos de ir
    var element;
    if (name == '') { //Si está vacío es que estamos en el header.
        element = document.getElementsByClassName('header')[0];
    } else {
        element = document.getElementById(name);
    }

    scrollToElement(element); //Llamamos a la funcion que nos llevará a la sección
}

function scrollToElement(element) {
    //console.log(element.getBoundingClientRect()); Printamos en pantall donde estamos de la web
    var jump = parseInt(element.getBoundingClientRect().top * 0.3); //Nos calcula donde está realmente el elmento (caja) y coge el top. 0.3 es para hacer la cantidad de pagina que vamos a saltar
    document.body.scrollTop += jump; //Propiedade del body que nos dice donde está el scroll

    if(!element.lastJump || element.lastJump > Math.abs(jump)) { //Para que esta función se llame a si misma |abs = valor absoluto. Esta linia es por si es la primera iteración o por si ya hemos llegado
        element.lastJump = Math.abs(jump);

        setTimeout(function() { //Llamarse a si mismo cada cierto tiempo
            scrollToElement(element);
        }, "60"); //Para que salte mas suave y tener el efecto de salto
    } else { //Cuando tenemos el último salto
        element.lastJump = null; //Ya hemos llegado donde queríamos y reiniciamos a null
    }
}

function deleteActiveClass() {
    if (Modernizr.classList) {
        document.getElementsByClassName('navbar-item active')[0].classList.remove('active');
    } else {
        document.getElementsByClassName('navbar-item active')[0].className = 'navbar-item';
    }
}

//Esta función anónima calcula a cuanta distancia está mi elemento de arriba del tot
var cumulativeOffset = function(element) {
    var top = 0;
    do { //Hacemos un bucle             // El 0 es para que no pete
        top += element.offsetTop || 0; //Propiedad offset es el desplazamiento que existe desde el que tenemos a su padre (body) y lo sumamos a tod o.
        element = element.offsetParent;
    } while(element);

    return top;
};

//Variables para saber donde está cada sección
var offsetQuienSoy = cumulativeOffset(document.getElementById('quien-soy')) - 59; //Les restamos 59 porque la barra de navegación está en estático y mide 59
var offsetEquipo = cumulativeOffset(document.getElementById('equipo')) - 59;
var offsetTransporte = cumulativeOffset(document.getElementById('transporte')) - 59;

//Añadoimos un evento a la ventana - window es el bom
window.addEventListener('scroll', changeMenuStyle);

function changeMenuStyle(event) {
    var previous; //Previous es una variable de control que ponemos para saber si estamos en el mismo sitio y devuelve false para que no ejecute nada. Así no creamos bucles infinitos.

    if (window.pageYOffset >= 0 && window.pageYOffset < offsetQuienSoy) { //Donde estamos en el eje vertical
        if(!previous) {
            previous = 1;
        } else if(previous == 1) {
            return false;
        }

        deleteActiveClass();

        if(Modernizr.classList) {
            document.querySelector('a[href="#"]').parentNode.classList.add("active");
        } else {
            document.querySelector('a[href="#"]').parentNode.className += " active";
        }
    } else if(window.pageYOffset >= offsetQuienSoy && window.pageYOffset < offsetEquipo) {
        if(!previous) {
            previous = 2;
        } else if(previous == 2) {
            return false;
        }

        deleteActiveClass();

        if(Modernizr.classList) {
            document.querySelector('a[href$="quien-soy"]').parentNode.classList.add("active"); //$ es que acaba por. .parentNode nos devuelve el padre
        } else {
            document.querySelector('a[href$="quien-soy"]').parentNode.className += " active";
        }
    } else if (window.pageYOffset >= offsetEquipo && window.pageYOffset < offsetTransporte) {
        if(!previous) {
            previous = 3;
        } else if(previous == 3) {
            return false;
        }

        deleteActiveClass();

        if(Modernizr.classList) {
            document.querySelector('a[href$="equipo"]').parentNode.classList.add("active");
        } else {
            document.querySelector('a[href$="equipo"]').parentNode.className += " active";
        }
    } else if (window.pageYOffset >= offsetTransporte) {
        if(!previous) {
            previous = 4;
        } else if(previous == 4) {
            return false;
        }

        deleteActiveClass();

        if(Modernizr.classList) {
            document.querySelector('a[href$="transporte"]').parentNode.classList.add("active");
        } else {
            document.querySelector('a[href$="transporte"]').parentNode.className += " active";
        }
    }
}




