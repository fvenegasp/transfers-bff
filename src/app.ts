import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import {logger}  from '../config/winston';
import {env} from '../config/environment';
import routes from './routes';
import mongoose from 'mongoose';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

const BASE_PATH = '/v1/';
app.use(BASE_PATH, routes);


mongoose.connect(env.STRCONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    logger.info('Connected to DB');
})
.catch(error => {
    logger.info('Connection to DB Failed');
    logger.info(error.message);
    process.exit(-1);
});

const PORT = env.PORT;
app.get('/', (req, res) => { 
    logger.info(`Express + TypeScript Server`)
    res.send('Express + TypeScript Server') 
});
app.listen(PORT, () => {
    logger.info(`server is listening on ${PORT}`);
});
