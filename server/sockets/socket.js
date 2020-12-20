const { io } = require('../server');





io.on('connection', (client) => {

    console.log('usuario conectado');
    // console.log(client);


    client.emit('message', {
        usuario: 'Administrador',
        message: ' Bienvenido a la aplicacion Socket en NodeJS'
    });



    client.on('disconnect', () => {
        console.log('Usuario desConectado');
    });

    // Escuchar al cliente
    client.on('message', (data, callback) => {

        client.broadcast.emit('message', data);


        console.log(data);

        // if (message.usuario) {
        //     callback({
        //         resp: 'Todo Salio Bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo Salio Mal'
        //     });
        // }

    });


});