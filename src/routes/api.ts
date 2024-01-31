import express from 'express';
import { uploadFileAnalyse } from '../controllers/fileUploadController';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

// Create the router. Here we will add to the router
export const router = express.Router();

// FILE UPLOAD
// ----------------------------------------
router.post('/fileanalyse', upload.single('upfile'), uploadFileAnalyse);
