const Articulos = require('../models/articulos');
const Usuario = require('../models/usuario');


const crearArticulo = async (req, res) => {
  try {
    const nuevoArticulo = await Articulos.create(req.body);
    res.status(201).json(nuevoArticulo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const obtenerArticulos = async (req, res) => {
  try {
    const articulos = await Articulos.findAll({
      include: {
        model: Usuario,
        as: 'autor',
        attributes: ['nombre', 'apellido']
      }
    });
    res.status(200).json(articulos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const obtenerArticuloPorId = async (req, res) => {
  try {
    const articulo = await Articulos.findByPk(req.params.id, {
      include: {
        model: Usuario,
        as: 'autor',
        attributes: ['nombre', 'apellido']
      }
    });
    if (!articulo) {
      return res.status(404).json({ error: 'Articulo no encontrado' });
    }
    res.status(200).json(articulo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const actualizarArticulo = async (req, res) => {
  try {
    const articulo = await Articulos.findByPk(req.params.id);
    if (!articulo) {
      return res.status(404).json({ error: 'Articulo no encontrado' });
    }
    await articulo.update(req.body);
    res.status(200).json(articulo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const eliminarArticulo = async (req, res) => {
  try {
    const articulo = await Articulos.findByPk(req.params.id);
    if (!articulo) {
      return res.status(404).json({ error: 'Articulo no encontrado' });
    }
    await articulo.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  crearArticulo,
  obtenerArticulos,
  obtenerArticuloPorId,
  actualizarArticulo,
  eliminarArticulo
};