import express from 'express';
import cors from 'cors';
import * as news from './news';
import * as user from './user';

const app = express();

app.use(cors());

app.use('/news', news.router);
app.use('/user', user.router);

const port = process.env.port || 8080;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
