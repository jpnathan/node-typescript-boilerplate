import express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import resouceExampleRoutes from './core/routes';

dotenv.config();

import cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(resouceExampleRoutes);

app.listen(process.env.PORT, () => {
	return console.log(`server is listening on ${process.env.PORT}`);
});
