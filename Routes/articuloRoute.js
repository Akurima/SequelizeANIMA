const express = require('express');
const router = express.Router();
const articuloController = require('../Controllers/articuloController');

router.post('/', articuloController.crearArticulo);             
router.get('/', articuloController.obtenerArticulos);           
router.get('/:id', articuloController.obtenerArticuloPorId);    
router.put('/:id', articuloController.actualizarArticulo);      
router.delete('/:id', articuloController.eliminarArticulo);    

module.exports = router;
