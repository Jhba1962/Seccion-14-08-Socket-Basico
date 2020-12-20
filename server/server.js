const express = require('express');
const socketIO = require('socket.io');

// http modulo de Nodej

const http = require('http');

//
const path = require('path');
//
const app = express();

// Define servidor.

let server = http.createServer(app);

// Define path a carpera pública
const publicPath = path.resolve(__dirname, '../public');

// Puerto de la aplicación
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// io = Conexión del BackEnd.
// 
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});