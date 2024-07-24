import { google } from 'googleapis';
import stream from 'stream';
import  Cliente  from '../models/Cliente'; // Importa el modelo Cliente

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client
});

const createFolder = async (folderName) => {
  const fileMetadata = {
    name: folderName,
    mimeType: 'application/vnd.google-apps.folder',
  };

  const folder = await drive.files.create({
    resource: fileMetadata,
    fields: 'id',
  });

  return folder.data.id;
};

export const uploadFiles = async (req, res) => {
  try {
    const { clienteId } = req.body; // Obtén el ID del cliente de la solicitud
    const cliente = await Cliente.findByPk(clienteId);

    if (!cliente) {
      return res.status(404).send({ error: 'Cliente no encontrado' });
    }

    // Verifica si el cliente ya tiene una carpeta en Google Drive
    let folderId = cliente.googleDriveFolderId;

    if (!folderId) {
      // Crea una nueva carpeta en Google Drive para el cliente
      folderId = await createFolder(`Cliente_${clienteId}`);
      
      // Guarda el ID de la carpeta en la base de datos
      cliente.googleDriveFolderId = folderId;
      await cliente.save();
    }

    const uploads = [];

    if (req.files.image) {
      const image = req.files.image[0];
      const bufferStream = new stream.PassThrough();
      bufferStream.end(image.buffer);

      uploads.push(drive.files.create({
        requestBody: {
          name: image.originalname,
          mimeType: image.mimetype,
          parents: [folderId], // Subir el archivo a la carpeta del cliente
        },
        media: {
          mimeType: image.mimetype,
          body: bufferStream,
        }
      }));
    }

    if (req.files.imagesArray) {
      req.files.imagesArray.forEach(file => {
        const bufferStream = new stream.PassThrough();
        bufferStream.end(file.buffer);

        uploads.push(drive.files.create({
          requestBody: {
            name: file.originalname,
            mimeType: file.mimetype,
            parents: [folderId], // Subir el archivo a la carpeta del cliente
          },
          media: {
            mimeType: file.mimetype,
            body: bufferStream,
          }
        }));
      });
    }

    const responses = await Promise.all(uploads);
    const data = responses.map(response => response.data);

    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getFiles = async (req, res) => {
  try {
    const response = await drive.files.list({
      pageSize: 10,
      fields: 'files(id, name, mimeType)'
    });

    res.send(response.data.files);
  } catch (error) {
    res.status(500).send(error);
  }
};