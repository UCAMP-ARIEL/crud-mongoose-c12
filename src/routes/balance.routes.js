/* Importing the express module and creating an instance of it. */
const { Router } = require('express')
const { getBalance, createBalance, updateBalance, deleteBalance } = require('../controllers/balance.controllers')
const router = Router()

router.get('/obtener', getBalance)

router.post('/nuevo', createBalance)

router.put('/actualizar', updateBalance)

router.delete('/borrar', deleteBalance)

module.exports = router
