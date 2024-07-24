import { DataTypes } from 'sequelize';
import sequelize  from '../database/db.js';

const Roles = sequelize.define('Roles', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export default Roles;
