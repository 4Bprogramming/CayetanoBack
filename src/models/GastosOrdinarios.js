import { DataTypes } from 'sequelize';
import sequelize  from '../database/db.js';

const GastosOrdinarios = sequelize.define('GastosOrdinarios', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.ENUM('Salarios', 'Servicios', 'Suministros', 'Mantenimiento', 'Otros'),
    allowNull: false,
  },
  detalle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  valor_usd: {
    type: DataTypes.DECIMAL(10, 2),
  },
  valor_ars: {
    type: DataTypes.DECIMAL(10, 2),
  },
}, {
  tableName: 'GASTOS_ORDINARIOS',
  timestamps: false,
});

export default GastosOrdinarios;
