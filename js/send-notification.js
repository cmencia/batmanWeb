function sendNotification(msg, body) {

    var notification = Notification || mozNotification || webkitNotification; // Para ver si tenemos notificaciones en el navegador
    if (body) {
        var options = {
            'body': body
        };
    }
    if (typeof(notification) === 'undefined') {
        console.error("Notificaciones no soportadas");
    } else {
        notification.requestPermission(function(permission){ //Pide permiso y función de callback
            if (Notification.permission === 'granted') { //el usuario nos ha concedido permiso
                var notification = new Notification(msg, options); //Creamos objeto de la clase notificación
            }
        });
    }
}