import { DataTypes } from 'sequelize';
import sequelize  from '../database/db.js';

const Auditoria = sequelize.define('Auditoria', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_detalle: {
    type: DataTypes.STRING,
  },
  motivo: {
    type: DataTypes.ENUM('alta', 'baja', 'modificación'),
  },
  id_correspondiente: {
    type: DataTypes.INTEGER,
  },
  valor_antes: {
    type: DataTypes.DECIMAL(10, 2),
  },
  valor_actual: {
    type: DataTypes.DECIMAL(10, 2),
  },
  campo: {
    type: DataTypes.STRING,
  },
  usuario: {
    type: DataTypes.STRING,
  },
  fecha_hora: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'AUDITORIA',
  timestamps: false,
});

export default Auditoria;
