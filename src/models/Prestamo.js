import { DataTypes } from 'sequelize';
import sequelize  from '../database/db.js';

const Prestamo = sequelize.define('Prestamo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATE,
  },
  valor_total_usd: {
    type: DataTypes.DECIMAL(10, 2),
  },
  valor_total_ars: {
    type: DataTypes.DECIMAL(10, 2),
  },
  estado: {
    type: DataTypes.ENUM('Vigente', 'Cerrado', 'En juicio'),
  },
  clienteDni: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'PRESTAMO',
  timestamps: false,
});

export default Prestamo;
