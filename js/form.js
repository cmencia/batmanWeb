/**
 * Created by Carlos on 7/1/17.
 */
var form = document.getElementById("form-contact"); //Creamos una variable que nos coja el formulario


//Cogemos todos los inputs que teníamos.
var apellidosInput = document.getElementsByName("tienes_apellidos");
var ejercitoInput = document.getElementById("ejercito");
var tooManyEnemies = document.getElementById("too-many-enemies");

//Si decimos que si tenemos apellidos en el radius que aparezca el input de apellidos
var inputApellidos = document.createElement("input");
//Le ponemos los atributos que necesitamos
inputApellidos.setAttribute("id", "apellidos"); // el segundo parámetro es el valor que queremos que tome
inputApellidos.setAttribute("type", "text");
inputApellidos.setAttribute("name", "apellidos");
inputApellidos.setAttribute("placeholder", "Apellidos");
inputApellidos.setAttribute("required", "");


//Añadimos el escuchador en el si y en el no
for (var i = 0; i < apellidosInput.length; i++) { //Para poner un event listener a los dos inputs creamos el for
    apellidosInput[i].addEventListener('click', function(event){
        if (this.value == 'yes') {
            this.parentNode.appendChild(inputApellidos); //Añadimos al padre el input
        } else if (document.getElementById("apellidos")) { //Por si apretamos varias veces el no, que no salte el error.
            this.parentNode.removeChild(inputApellidos);//Eliminamos el campo apellido
        }
    });
}

ejercitoInput.addEventListener("keyup", function(event){
    if(this.value > 50) {
        tooManyEnemies.style.display = 'block';
    } else {
        tooManyEnemies.style.display = 'none';
    }
});

form.addEventListener("submit", function(event){
    var inputNombre = document.getElementById("nombre");
    var apellidosRadioInput = {
        "apellidos_si": document.getElementById("apellidos_si"),
        "apellidos_no": document.getElementById("apellidos_no")
    };
    var emailInput = document.getElementById("email");

    var misionesRadioInput = {
        "mision1": document.getElementById("tipo_mision_1"),
        "mision2": document.getElementById("tipo_mision_2"),
        "mision3": document.getElementById("tipo_mision_3"),
        "mision4": document.getElementById("tipo_mision_4"),
    };

    var estasSeguroRadioInput = {
        "seguro_si": document.getElementById("seguro_si"),
        "seguro_no": document.getElementById("seguro_no")
    };

    var fechaInput = document.getElementById("fecha");
    var submitInput = document.getElementById("enviar");

    if(inputNombre.checkValidity() == false) {
        alert("Escribe tu nombre");
        inputNombre.focus();
        event.preventDefault();
        return false;
    }

    if(apellidosRadioInput.apellidos_si.checkValidity() == false) {
        alert("Selecciona si tienes apellidos");
        event.preventDefault();
        return false;
    }

    if(document.getElementById("apellidos")) {
        if(document.getElementById("apellidos").checkValidity() == false){
            alert("Escribe tus apellidos");
            document.getElementById("apellidos").focus();
            event.preventDefault();
            return false;
        }
    }

    if(email.checkValidity() == false) {
        alert("Escribe tus email correcto");
        email.focus();
        event.preventDefault();
        return false;
    }

    if(misionesRadioInput.mision1.checkValidity() == false) {
        alert("Introduce el tipo de mision");
        event.preventDefault();
        return false;
    }

    if(tooManyEnemies.style.display === 'block') {
        if(estasSeguroRadioInput.seguro_si.checkValidity() == false){
            alert("Confirmanos que estás seguro");
            event.preventDefault();
            return false;
        }
    }

    if (fechaInput.checkValidity() == false) {
        alert("Introduce la fecha de la mision");
        fecha.focus();
        event.preventDefault();
        return false;
    }

    event.preventDefault();

    setTimeout(function(){
        sendNotification("Formulario recibido", "En breve tendrás respuesta");
    })
});


