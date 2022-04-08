const socketController = (socket) => {

    console.log('client connected', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente Desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload) => {

        socket.broadcast.emit('enviar-mensaje', payload);
    });
}

module.exports = { socketController }