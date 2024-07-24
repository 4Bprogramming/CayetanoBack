import { Router } from 'express';
import { uploadFiles, getFiles } from '../controllers/fileController.js';

const router = Router();

router.post('/doc/upload', uploadFiles);
router.get('/doc/files', getFiles);

export default router;
