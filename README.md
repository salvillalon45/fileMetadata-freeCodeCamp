# File Metadata

freeCodeCamp - Back End Development and APIs | Project: File Metadata

# Summary

Create a File Metadata REST API that you upload a file in the HTML view, you will get back a JSON response with the file name, type, and size in bytes of the uploaded file!
**[Learn more about the Project Task.](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice)**

It has the folowing:

-   **/api/fileanalyse** - **POST**: Use `Multer` npm package for handling multipart/form-data. `Multer` is used for uploading files!
-   Response Example: `{ "name": "test_image.png", "type": "image/png", "size": 124002 }`

-   **views/index.html**

    -   Contains the view for users to upload the file

### Implementation

-   Created a TypeScript + Express API
-   Created the `routes/api.ts` to organize the routes that the api will use
-   Created the `controllers/fileUploadController.ts`. It contains all the api controllers that the routes will use to do the logic on each api call
-   Created `utils/index.ts` contains the `PORT` the server will listen to
-   Created the `uploadFileAnalyse` API Controller. This controller extracts the metadata which is `mimetype`, `size`, and `originalname` from the `req.file` and send it as a `JSON` response
-   In the controller I set up `multer` by doing the following
    ```
    import multer from 'multer';
    const upload = multer({ dest: 'uploads/' });
    ```
-   `multer` will create an `uploads` directory where all the files will be stored
-   Attached the `upload.single('upfile')` middleware to place the uploaded file in the `req.file`. `upfile` is the name used in the name attribute of the input tag in index.html!
-   Created one route along with their api controller and `multer` support:
    -   `router.post('/fileanalyse', upload.single('upfile'), uploadFileAnalyse);`

### Resources

-   Use the tutorial for learning how to use `multer`! [Multer: Easily upload files with Node.js and Express
    ](https://blog.logrocket.com/multer-nodejs-express-upload-file/#install-configure-multer)

### Demo

https://github.com/salvillalon45/fileMetadata-freeCodeCamp/assets/18276475/8a999d75-c4e1-4faf-be24-09245f8de637


# Technologies:

-   JavaScript
-   TypeScript
-   Render
-   Multer
