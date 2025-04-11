const { DataTypes, Model } = require('sequelize');
const sequelize = require('../Config/database');

class Usuario extends Model {}

Usuario.init({
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,            
  modelName: 'Usuario', 
  tableName: 'usuarios', 
  timestamps: false    
});
  
  module.exports = Usuario;