const { Router } = require('express');
const router = new Router();
const articulosFamiliasController = require("../controllers/articulosFamilias");

// GET Requests
router.get('/articulosFamilias', articulosFamiliasController.getAll);
router.get('/articulosFamilias/:id', articulosFamiliasController.getById);

module.exports = router;
