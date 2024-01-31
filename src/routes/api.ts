import express from 'express';
import { uploadFileAnalyse } from '../controllers/fileUploadController';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

// Create the router. Here we will add to the router
export const router = express.Router();

// FILE UPLOAD
// ----------------------------------------
// upfile is the name used in the name attribute of the input tag in index.html!
// <input id="inputfield" type="file" name="upfile" />
router.post('/fileanalyse', upload.single('upfile'), uploadFileAnalyse);
