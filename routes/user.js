const { Router } = require("express");
const { check } = require("express-validator");
const {userGet, userPost, userPut, userPatch, userDelete,} = require("../controllers/users.controller");
const { roleValido, existeEmail,existeUsuarioPorId } = require("../helpers/db.validators");
const { validarCampos } = require("../middlewares/validar-campos");


const router = Router();

router.get("/", userGet);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password","El password es obligatorio y debe tener min 6 caracateres").isLength({ min: 6 }),
    check("correo", "El correo no es valido").isEmail().custom(existeEmail),
    // check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),

    check("rol").custom(roleValido),

    validarCampos,
  ],
  userPost
);

router.put("/:id",[
    check('id', 'No es in ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check("rol").custom(roleValido),
    validarCampos,
], userPut);

router.patch("/", userPatch);

router.delete("/:id",[
  check('id', 'No es in ID valido').isMongoId(),
  check('id').custom(existeUsuarioPorId),
  validarCampos
], userDelete);

module.exports = router;
