import * as Koa from 'koa';
import * as logger from 'koa-logger';
import devRouter from './routes/DeveloperRoute';

const app = new Koa();
const port = 3000;

app.listen(port, () => {
    console.log(`Application running on http://localhost:${port}`);
});

app.use(logger());
app.use(devRouter.routes());
app.use(devRouter.allowedMethods());

