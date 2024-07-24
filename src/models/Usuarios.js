import { DataTypes } from 'sequelize';
import sequelize  from '../database/db.js';

const Usuarios = sequelize.define('Usuarios', {
  usuarioDni: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  mail: {
    type: DataTypes.STRING,
  },
  contrasena: {
    type: DataTypes.STRING,
  },
  sucursal: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'USUARIOS',
  timestamps: false,
});

export default Usuarios;
