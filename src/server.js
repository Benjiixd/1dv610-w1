import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes/router.js';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import {dirname, join} from "node:path"
import { fileURLToPath } from 'node:url';

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser())
app.use(helmet());
app.use(cors());
app.use((req, res, next) => {
    if (req.is('json')) {
        console.log("its json")
        req.headers['content-type'] = 'application/json';
    }
    next();
});


const directoryFullName = dirname(fileURLToPath(import.meta.url))
app.set('view engine', 'ejs')
app.set('views', join(directoryFullName) + "/views", 'views')

app.use('/', router);

const server = app.listen(4020, async () => {
  try {
    
  } catch (err) {
    console.error(err);
  }
  console.log(`Server running on port ${server.address().port}`);
  
});
