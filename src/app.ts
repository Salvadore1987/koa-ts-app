import * as Koa from 'koa';
import * as logger from 'koa-logger';
import { DeveloperRouter } from './routes/Developer.router';

class App {
    public app: Koa;
    public router: DeveloperRouter;

    constructor() {
        this.app = new Koa();
        this.router = new DeveloperRouter();
        this.config();
    }

    private config(): void {
        this.app.use(logger());
        this.app.use(this.router.routes());
        this.app.use(this.router.allowedMethods());

    }
}

export default new App().app;

