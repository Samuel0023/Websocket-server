const express = require('express');
require('dotenv');
const cors = require('cors');

const { socketController } = require('../sockets/sockets.controller');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {}

        //middlewares
        this.middlewares();
        this.app.use(express.json());
        //app routes
        this.routes();
        this.sockets();
    }
    middlewares() {
        //cors
        this.app.use(cors());
        //dir public
        this.app.use(express.static('public'));
    }

    routes() {
        //this.app.use(this.paths.auth, require('../routes/auth.routes'));

    }

    sockets() {
        this.io.on('connection', socketController);
    }
    listen() {

        this.server.listen(this.port, () => {
            console.log('servidor corriendo en puerto ', this.port);
        });
    }
}

module.exports = Server;