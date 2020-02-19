const express = require('express')
const router = express.Router()

const PizzasController = require('../controllers/PizzasController')

router.get('/', PizzasController.listarPizzas())

router.get('/:id', PizzasController.mostrarPizza())

module.exports = router
