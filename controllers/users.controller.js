const { response } = require('express');


const userGet = (req, res = response) => {
    res.json({
      msg: "get api- controller",
    });

}


const userPost = (req, res = response) => {

    const {nombre, edad} =req.body;

    res.json({
      msg: "Post api- controller",
      nombre, edad
    });

}


const userPut = (req = request, res = response) => {

    const id     = req.params.id;
    const { apikey=null } = req.query;
    res.json({
      msg: "Put api- controller",
      apikey
    });

}


const userPatch = (req, res = response) => {
    res.json({
      msg: "Patch api- controller",
    });

}

const userDelete= (req, res = response) => {
    res.json({
      msg: "Delete api- controller",
    });

}



module.exports = {
    userGet,
    userDelete,
    userPatch,
    userPut,
    userPost
}