import { DataTypes } from 'sequelize';
import sequelize  from '../database/db.js';

const Observaciones = sequelize.define('Observaciones', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATE,
  },
  detalle: {
    type: DataTypes.TEXT,
  },
  dni: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'OBSERVACIONES',
  timestamps: false,
});

export default Observaciones;
