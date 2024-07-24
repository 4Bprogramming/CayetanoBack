// import express from 'express';
// import { sequelize } from './database/db.js';
// import bodyParser from 'body-parser';
// import mysql from 'mysql2/promise';
// import * as dotenv from 'dotenv';
// import cors from 'cors';
// import multer from 'multer';
// import { google } from 'googleapis';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// // import './models/Project.js'
// // import Project from './models/Project.js';
// // import DBIMAGE from './models/DBIMAGE.js';

// dotenv.config();
// const { PORT, REFRESH_TOKEN, REDIRECT_URI, CLIENT_SECRET, CLIENT_ID } = process.env;

// const app = express();
// app.use(bodyParser.json());

// // Configura CORS
// const corsOptions = {
//   origin: 'http://localhost:3000', // Cambia esto al origen de tu aplicación Next.js en producción
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Configura multer
// const storage = multer.memoryStorage();
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 10 * 1024 * 1024 }, // limita el tamaño de archivo a 10MB
// });

// // Middleware de multer para manejo de archivos
// app.use((req, res, next) => {
//   upload.fields([
//     { name: 'image', maxCount: 1 },
//     { name: 'imagesArray', maxCount: 10 },
//   ])(req, res, (err) => {
//     if (err instanceof multer.MulterError) {
//       return res.status(400).json({ error: err.message });
//     } else if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     next();
//   });
// });

// // Configuración de Google Drive API
// const oauth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI
// );

// oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// const drive = google.drive({
//   version: 'v3',
//   auth: oauth2Client
// });


//  app.use( router);

// // Define las asociaciones entre modelos


// // Sincroniza la base de datos y escucha en el puerto especificado
// async function intro() {
//     try {
//       await sequelize.sync({force: true});
//       app.listen(PORT, () => {
//         console.log(`"Listening on port ${PORT}`);
//       });
//     } catch (error) {
//       console.log(error, "it is not working");
//     }
//   }
  
//   intro()