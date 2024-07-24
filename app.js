import express from 'express';
import sequelize  from './src/database/db.js';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer';
import router from './src/routes/index.js';
import GastosOrdinarios from './src/models/GastosOrdinarios.js';
import GastosRelacionadosPrestamo from './src/models/GastosOrdinarios.js';
import Valores from './src/models/Valores.js';
import Auditoria from './src/models/Auditoria.js';
import Observaciones from './src/models/Observaciones.js';
import IdentificacionClientes from './src/models/IdentificacionCliente.js';
import Sucursales from './src/models/Sucursales.js';
import Usuarios from './src/models/Usuarios.js';
import Cuota from './src/models/Cuota.js';
import Archivos from './src/models/Archivos.js';
import Cliente from './src/models/Cliente.js';
import Vehiculo from './src/models/Vehiculo.js';
import Prestamo from './src/models/Prestamo.js';
import Roles from './src/models/Roles.js';



dotenv.config();

const { PORT } = process.env;

const app = express();
app.use(bodyParser.json());

// Configura CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Cambia esto al origen de tu aplicación Next.js en producción
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configura multer
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // limita el tamaño de archivo a 10MB
});

// Middleware de multer para manejo de archivos
app.use((req, res, next) => {
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'imagesArray', maxCount: 10 },
  ])(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res.status(500).json({ error: err.message });
    }
    next();
  });
});

app.use(router);

// Definir relaciones entre modelos
// Definir relaciones entre modelos

// Relaciones entre Archivos y Cliente
Cliente.hasMany(Archivos, { foreignKey: 'clienteDni', as: 'archivosCliente' });
Archivos.belongsTo(Cliente, { foreignKey: 'clienteDni', as: 'clienteArchivos' });

// Relaciones entre Cliente y Vehiculo
Cliente.hasMany(Vehiculo, { foreignKey: 'clienteDni', as: 'vehiculosCliente' });
Vehiculo.belongsTo(Cliente, { foreignKey: 'clienteDni', as: 'clienteVehiculo' });

// Relaciones entre Cliente y Prestamo
Cliente.hasMany(Prestamo, { foreignKey: 'clienteDni', as: 'prestamosCliente' });
Prestamo.belongsTo(Cliente, { foreignKey: 'clienteDni', as: 'clientePrestamo' });

// Relaciones entre Usuarios y Sucursales
Sucursales.hasMany(Usuarios, { foreignKey: 'sucursal', as: 'usuariosSucursal' });
Usuarios.belongsTo(Sucursales, { foreignKey: 'sucursal', as: 'sucursalUsuarios' });

// Relaciones entre Prestamo y GastosRelacionadosPrestamo
Prestamo.hasMany(GastosRelacionadosPrestamo, { foreignKey: 'prestamoId', as: 'gastosPrestamo' });
GastosRelacionadosPrestamo.belongsTo(Prestamo, { foreignKey: 'prestamoId', as: 'prestamoGastos' });

// Relaciones entre Prestamo y Cuota
Prestamo.hasMany(Cuota, { foreignKey: 'prestamoId', as: 'cuotasPrestamo' });
Cuota.belongsTo(Prestamo, { foreignKey: 'prestamoId', as: 'prestamoCuotas' });

// Relaciones entre Observaciones y Cliente
Cliente.hasMany(Observaciones, { foreignKey: 'dni', as: 'observacionesCliente' });
Observaciones.belongsTo(Cliente, { foreignKey: 'dni', as: 'clienteObservaciones' });

// Relaciones entre IdentificacionClientes y Cliente
IdentificacionClientes.belongsTo(Cliente, { foreignKey: 'clienteDni', as: 'clienteIdentificacion' });
Cliente.hasOne(IdentificacionClientes, { foreignKey: 'clienteDni', as: 'identificacionCliente' });

// Relaciones entre Usuarios y Roles
Usuarios.belongsTo(Roles, { foreignKey: 'roleId', as: 'rolUsuarios' });
Roles.hasMany(Usuarios, { foreignKey: 'roleId', as: 'usuariosRol' });

// Relaciones de Auditoria
Auditoria.belongsTo(Archivos, { foreignKey: 'archivoId', as: 'archivoAuditoria' });
Auditoria.belongsTo(Cliente, { foreignKey: 'clienteId', as: 'clienteAuditoria' });
Auditoria.belongsTo(Vehiculo, { foreignKey: 'vehiculoId', as: 'vehiculoAuditoria' });
Auditoria.belongsTo(Prestamo, { foreignKey: 'prestamoId', as: 'prestamoAuditoria' });
Auditoria.belongsTo(GastosRelacionadosPrestamo, { foreignKey: 'gastosRelacionadosPrestamoId', as: 'gastoRelacionadoAuditoria' });
Auditoria.belongsTo(GastosOrdinarios, { foreignKey: 'gastosOrdinariosId', as: 'gastoOrdinarioAuditoria' });
Auditoria.belongsTo(Valores, { foreignKey: 'valoresId', as: 'valorAuditoria' });
Auditoria.belongsTo(Usuarios, { foreignKey: 'usuarioId', as: 'usuarioAuditoria' });
Auditoria.belongsTo(Sucursales, { foreignKey: 'sucursalId', as: 'sucursalAuditoria' });
Auditoria.belongsTo(Roles, { foreignKey: 'roleId', as: 'rolAuditoria' });




// Archivos.belongsTo(Cliente, { foreignKey: 'clienteDni', as: 'cliente' });
// Cliente.hasMany(Archivos, { foreignKey: 'clienteDni', as: 'archivos' });

// Cliente.belongsTo(Vehiculo, { foreignKey: 'patente', as: 'vehiculo' });
// Vehiculo.hasMany(Cliente, { foreignKey: 'patente', as: 'cliente' });
// Cliente.belongsTo(Prestamo, { foreignKey: 'prestamoId', as: 'prestamo' });
// Prestamo.hasMany(Cliente, { foreignKey: 'prestamoId', as: 'cliente' });

// Prestamo.hasMany(GastosRelacionadosPrestamo, { foreignKey: 'prestamoId', as: 'gastosRelacionadosPrestamo' });
// GastosRelacionadosPrestamo.belongsTo(Prestamo, { foreignKey: 'prestamoId', as: 'prestamo' });

// Prestamo.belongsTo(Valores, { foreignKey: 'valoresId', as: 'valores' });
// Vehiculo.belongsTo(Valores, { foreignKey: 'valoresId', as: 'valores' });

// Cuota.belongsTo(Prestamo, { foreignKey: 'prestamoId', as: 'prestamo' });
// Prestamo.hasMany(Cuota, { foreignKey: 'prestamoId', as: 'cuota' });

// Observaciones.belongsTo(Cliente, { foreignKey: 'dni', as: 'cliente' });
// Cliente.hasMany(Observaciones, { foreignKey: 'dni', as: 'observaciones' });

// IdentificacionClientes.belongsTo(Cliente, { foreignKey: 'clienteDni', as: 'cliente' });
// Cliente.hasMany(IdentificacionClientes, { foreignKey: 'clienteDni', as: 'identificacionClientes' });

// Usuarios.belongsTo(Sucursales, { foreignKey: 'numero', as: 'sucursal' });
// Sucursales.hasMany(Usuarios, { foreignKey: 'numero', as: 'usuario' });
// Usuarios.belongsTo(Roles, { foreignKey: 'roleId', as: 'id' });
// Roles.hasMany(Usuarios, { foreignKey: 'roleId', as: 'id' });

// Auditoria.belongsTo(Archivos, { foreignKey: 'archivoId', as: 'id' });
// Auditoria.belongsTo(Cliente, { foreignKey: 'clienteId', as: 'dni' });
// Auditoria.belongsTo(Vehiculo, { foreignKey: 'vehiculoId', as: 'patente' });
// Auditoria.belongsTo(Prestamo, { foreignKey: 'prestamoId', as: 'id' });
// Auditoria.belongsTo(GastosRelacionadosPrestamo, { foreignKey: 'gastosRelacionadosPrestamoId', as: 'id' });
// Auditoria.belongsTo(GastosOrdinarios, { foreignKey: 'gastosOrdinariosId', as: 'id' });
// Auditoria.belongsTo(Valores, { foreignKey: 'valoresId', as: 'id' });
// Auditoria.belongsTo(Usuarios, { foreignKey: 'usuarioId', as: 'id' });
// Auditoria.belongsTo(Sucursales, { foreignKey: 'sucursalId', as: 'numero' });
// Auditoria.belongsTo(Roles, { foreignKey: 'roleId', as: 'id' });



// Sincroniza la base de datos y escucha en el puerto especificado
async function intro() {
  try {
    await sequelize.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error, "it is not working");
  }
}

intro();
export  {
  Cliente,
  Vehiculo,
  Prestamo,
  GastosRelacionadosPrestamo,
  GastosOrdinarios,
  Valores,
  Auditoria,
  Observaciones,
  IdentificacionClientes,
  Sucursales,
  Usuarios,
  Cuota,
};