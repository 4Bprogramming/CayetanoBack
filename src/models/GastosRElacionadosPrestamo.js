import { DataTypes } from 'sequelize';
import sequelize  from '../database/db.js';

const GastosRelacionadosPrestamo = sequelize.define('GastosRelacionadosPrestamo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  prestamoId: {
    type: DataTypes.INTEGER,
  },
  nombre: {
    type: DataTypes.ENUM('Intereses', 'Comisiones', 'Seguros', 'Otros'),
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
  tableName: 'GASTOS_RELACIONADOS_PRESTAMO',
  timestamps: false,
});

export default GastosRelacionadosPrestamo;
