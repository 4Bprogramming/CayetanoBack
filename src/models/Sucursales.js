import { DataTypes } from 'sequelize';
import sequelize  from '../database/db.js';

const Sucursales = sequelize.define('Sucursales', {
  numero: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  direccion: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'SUCURSALES',
  timestamps: false,
});

export default Sucursales;
