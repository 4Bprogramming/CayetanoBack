import { DataTypes } from 'sequelize';
import sequelize  from '../database/db.js';

const IdentificacionClientes = sequelize.define('IdentificacionClientes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATE,
  },
  clienteDni: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'IDENTIFICACIONCLIENTES',
  timestamps: false,
});

export default IdentificacionClientes;
