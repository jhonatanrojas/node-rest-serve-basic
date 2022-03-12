const express = require("express");
var cors = require('cors')
;

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.usuariosPach='/api/users';

    //Middlewares
    this.middleware();

    //rutas de la apicacion
    this.routes();
  }

  middleware() {
    //directorio publico
    this.app.use(express.static("+"));
    //CORS
    this.app.use(cors());
    
    //parseo y lectura de body 
    this.app.use(express.json())

  }

  routes() {

    this.app.use(this.usuariosPach, require('../routes/user'))

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("listening on port", this.port);
    });
  }
}

module.exports = Server;
