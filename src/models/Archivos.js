import { DataTypes } from 'sequelize';
import sequelize  from '../database/db.js';

const Archivos = sequelize.define('Archivos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mimeType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  googleDriveId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  clienteDni: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

export default Archivos;
