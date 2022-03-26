const { response } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');



const userGet = async(req, res = response) => {


  const {limite =5, desde =0 } =req.query;
 const query = {estado:true};

 const [ total, usuarios ] = await Promise.all([
           
             Usuario.count(query),
             Usuario.find(query)
             .skip(Number(desde))
              .limit(Number(limite))
          ]);


    res.json({
      total,
     usuarios
    });


}


const userPost =  async (req, res = response) => {


    const  {nombre,correo, password, rol}  =req.body;
    const usuario = new Usuario( {nombre,correo, password, rol});

   
    //encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password =bcryptjs.hashSync(password,salt);

    // guardar en la base de datos

    await usuario.save();
    res.json({
      msg: "Post api- controller",
      usuario
    });

}


const userPut = async (req = request, res = response) => {

    const { id}     = req.params;
    const { _id, password, google,correo, ...resto } = req.body;

    
    if( password){
          //encriptar la contraseña
      const salt = bcryptjs.genSaltSync();
      resto.password =bcryptjs.hashSync(password,salt);

    }

    const user = await Usuario.findByIdAndUpdate(id,resto);

    res.json({
          user

    });

}


const userPatch = (req, res = response) => {
    res.json({
      msg: "Patch api- controller",
    });

}

const userDelete= async (req, res = response) => {
   

   const { id } = req.params;

   const usuario = await Usuario.findByIdAndUpdate(id,{estado:false})

    res.json({
      usuario
    });

}



module.exports = {
    userGet,
    userDelete,
    userPatch,
    userPut,
    userPost
}