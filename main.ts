import express from 'express';
import cors from 'cors';
import * as news from './news';
import * as user from './user';
import basicAuth from 'express-basic-auth';

const app = express();

app.use(cors());

app.use(basicAuth({
    users: {
        'admin': 'admin-123',
        'user': 'user-123',
    }
}));

app.use('/user', user.router);
app.use('/news', news.router);

const port = process.env.port || 8080;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
