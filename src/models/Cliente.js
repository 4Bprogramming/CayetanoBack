import { DataTypes, Model } from 'sequelize';
import sequelize  from '../database/db.js';
class Cliente extends Model {}
Cliente.init({
  dni: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  tipo: {
    type: DataTypes.ENUM('futuro', 'actual'),
  },
  nombre: {
    type: DataTypes.STRING,
  }, 
  telefono: {
    type: DataTypes.STRING,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  observaciones: {
    type: DataTypes.TEXT,
  },
  googleDriveFolderId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modeName: "Cliente",
  timestamps: false,
});

export default Cliente;
