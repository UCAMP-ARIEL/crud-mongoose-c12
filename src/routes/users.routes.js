/* Importing the express module and creating an instance of it. */
const express = require('express')
const { getUsuario, createUsuario, updateUsuario, loginUser, verifyUser } = require('../controllers/users.controllers')
const router = express.Router()
const auth = require('../middlewares/auth')

router.get('/obtener', auth, getUsuario)

router.post('/crear', createUsuario)

router.put('/actualizar', auth, updateUsuario)

router.post('/login', loginUser)

router.post('/verificar', auth, verifyUser)

module.exports = router
