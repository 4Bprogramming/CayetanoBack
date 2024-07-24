import { DataTypes } from 'sequelize';
import sequelize  from '../database/db.js';

const Cliente = sequelize.define('Cliente', {
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
  tableName: 'CLIENTE',
  timestamps: false,
});

export default Cliente;
