import { DataTypes } from 'sequelize';
import sequelize  from '../database/db.js';

const Vehiculo = sequelize.define('Vehiculo', {
  patente: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  marca: {
    type: DataTypes.STRING,
  },
  modelo: {
    type: DataTypes.STRING,
  },
  dominio_registro: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.ENUM('Garantía', 'Secuestrado', 'Secuestrado vendido'),
  },
  clienteDni: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'VEHICULO',
  timestamps: false,
});

export default Vehiculo;
