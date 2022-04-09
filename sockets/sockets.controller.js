const socketController = (socket) => {

    console.log('client connected', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente Desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 123456;
        callback(id);

        /// para emitir a todos los clientes conectados
        socket.broadcast.emit('enviar-mensaje', payload);
    });
}

module.exports = { socketController }