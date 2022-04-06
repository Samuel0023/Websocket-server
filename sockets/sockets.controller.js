const socketController = (socket) => {

    console.log('client connected', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente Desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload) => {
        console.log('enviar mensaje del server recibido: ', payload);
    });
}

module.exports = { socketController }