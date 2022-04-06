const socket = io();

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

socket.on('connect', () => {
    console.log('connectado al servidor');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    console.log('desconectado del servidor');

    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});


btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    console.log(mensaje);
    let payload = {
        mensaje,
        id: '123123',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload);
});
console.log(socket);