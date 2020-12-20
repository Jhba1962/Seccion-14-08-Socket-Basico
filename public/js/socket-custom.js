var socket = io();

// on: Son para escuchad, ej: conexión desconexión
socket.on('connect', function() {
    console.log('Conectado al Servidor');
});

socket.on('disconnect', function() {

    console.log('Perdimos Conexión con el servidor');

});

// emit : enviar Información
socket.emit('message', {
    usuario: 'Jorge Bravo A',
    message: 'Mensaje enviado con emit'

}, function(resp) {

    console.log('se disparo el Callback');

    console.log('Respuesta Server: ', resp);

});


// Escuchar información enviada por el cliente de js client.emitt()
socket.on('message', function(received) {

    console.log('Información Recibida', received);

});