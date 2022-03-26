const mongoose = require('mongoose');


const dbConnection = async () => {

    try {
        
      await  mongoose.connect(process.env.MONGO_DB,{
        autoIndex: true
    

      });

      console.log('bases de datos online');

    } catch (error) {

        console.log(error);
        throw new Error('ERROR a la hora de iniciar la BD');
        
    }

}

module.exports = {
    dbConnection
}