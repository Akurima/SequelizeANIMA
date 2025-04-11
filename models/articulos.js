const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario'); 


class Articulo extends Model {}

Articulo.init({
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  autorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Articulo',
  tableName: 'articulos',
  timestamps: false
});


Articulo.belongsTo(Usuario, {
  as: 'autor',        
  foreignKey: 'autorId' 
});

module.exports = Articulo;
