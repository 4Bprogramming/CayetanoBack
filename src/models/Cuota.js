import { DataTypes } from 'sequelize';
import sequelize  from '../database/db.js';

const Cuota = sequelize.define('Cuota', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  estado: {
    type: DataTypes.ENUM('a vencer', 'vencida', 'pagada'),
  },
  fecha_credito: {
    type: DataTypes.DATE,
  },
  dias_de_atraso: {
    type: DataTypes.INTEGER,
  },
  numero_cuota: {
    type: DataTypes.INTEGER,
  },
  cuota_pura_usd: {
    type: DataTypes.DECIMAL(10, 2),
  },
  cuota_pura_ars: {
    type: DataTypes.DECIMAL(10, 2),
  },
  intereses_usd: {
    type: DataTypes.DECIMAL(10, 2),
  },
  intereses_ars: {
    type: DataTypes.DECIMAL(10, 2),
  },
  valor_usd: {
    type: DataTypes.DECIMAL(10, 2),
  },
  valor_ars: {
    type: DataTypes.DECIMAL(10, 2),
  },
  intereses_punitorios_usd: {
    type: DataTypes.DECIMAL(10, 2),
  },
  intereses_punitorios_ars: {
    type: DataTypes.DECIMAL(10, 2),
  },
  total_usd: {
    type: DataTypes.DECIMAL(10, 2),
  },
  total_ars: {
    type: DataTypes.DECIMAL(10, 2),
  },
  prestamoId: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'CUOTA',
  timestamps: false,
});

export default Cuota;
