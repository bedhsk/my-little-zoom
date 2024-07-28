const express = require('express');
const app = express();
const fs = require('fs');

// Lee los archivos cert.pem y key.pem
const options = {
    cert: fs.readFileSync('cert/cert.pem'), // Ruta a tu archivo cert.pem
    key: fs.readFileSync('cert/key.pem')     // Ruta a tu archivo key.pem
};

// Creamos un servidor http a partir de la librería de express
const https = require('https').Server(options, app);

// Para generar una comunicación vamos a trabajar con socket.io
const io = require('socket.io')(https);

// routes
app.use(require('./routes/littlezoom.routes'));

// Configuramos los htmls donde vamos a trabajar
app.use(express.static(__dirname + '/public'));

// Generamos la comunicación con el socket
io.on('connection', (socket) => {
    socket.on('stream', (image) => {
        // Emitir evento a los sockets conectados
        socket.broadcast.emit('stream', image);
    });
});

module.exports = https;