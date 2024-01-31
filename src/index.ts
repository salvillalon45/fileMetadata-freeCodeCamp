import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PORT } from './utils';
import { router } from './routes/api';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

// Use the routes
app.use('/api', router);

app.get('/', function (req, res) {
	res.sendFile(process.cwd() + '/src/views/index.html');
});

app.listen(PORT, function () {
	console.log(`Server is running on port ${PORT}`);
});
