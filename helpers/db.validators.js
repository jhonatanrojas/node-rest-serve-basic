
const Role = require("../models/role");
const Usuario = require('../models/usuario');
const roleValido = async( rol = '') => {

   
        const exiteRol = await Role.findOne({ rol });
  
        if (!exiteRol) {
          throw new Error("El rol no es valido");
        }
      
}

const existeEmail = async( correo = '') => {

  const existeEmail = await Usuario.findOne({correo});

  if(existeEmail){
    throw new Error("El correo ya se encuentra registrado");
  }
    
}

const existeUsuarioPorId= async( id) => {

  const existeId = await Usuario.findById(id);

  if(!existeId){
    throw new Error("El id no existe");
  }
    
}

module.exports = {
    roleValido,
    existeEmail,
    existeUsuarioPorId
}