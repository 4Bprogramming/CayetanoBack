import { DataTypes } from 'sequelize';
import sequelize  from '../database/db.js';

const Valores = sequelize.define('Valores', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  dia: {
    type: DataTypes.DATE,
  },
  valor_fecha_credito_usd: {
    type: DataTypes.DECIMAL(10, 2),
  },
  valor_fecha_credito_ars: {
    type: DataTypes.DECIMAL(10, 2),
  },
  valor_fecha_actual_usd: {
    type: DataTypes.DECIMAL(10, 2),
  },
  valor_fecha_actual_ars: {
    type: DataTypes.DECIMAL(10, 2),
  },
  valor_dia_secuestro_usd: {
    type: DataTypes.DECIMAL(10, 2),
  },
  valor_dia_secuestro_ars: {
    type: DataTypes.DECIMAL(10, 2),
  },
  valor_dia_devolucion_usd: {
    type: DataTypes.DECIMAL(10, 2),
  },
  valor_dia_devolucion_ars: {
    type: DataTypes.DECIMAL(10, 2),
  },
  valor_dia_venta_usd: {
    type: DataTypes.DECIMAL(10, 2),
  },
  valor_dia_venta_ars: {
    type: DataTypes.DECIMAL(10, 2),
  },
  valor_dia_venta: {
    type: DataTypes.DECIMAL(10, 2),
  },
}, {
  tableName: 'VALORES',
  timestamps: false,
});

export default Valores;
