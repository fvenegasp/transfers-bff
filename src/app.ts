import express from 'express';
import {logger}  from '../config/winston';
import {env} from '../config/environment';

const app = express();
const PORT = env.PORT;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
    logger.info(`server is listening on ${PORT}`);
});