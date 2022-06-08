const { Router } = require('express');
const router = new Router();
const articulosController = require("../controllers/articulos");

// GET Requests
router.get('/articulos', articulosController.getAll);
router.get('/articulos/:id', articulosController.getById);

module.exports = router;
