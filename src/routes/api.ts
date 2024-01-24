import express from 'express';
import { uploadFileAnalyse } from '../controllers/fileUploadController';

// Create the router. Here we will add to the router
export const router = express.Router();

// FILE UPLOAD
// ----------------------------------------
router.post('/fileanalyse', uploadFileAnalyse);
