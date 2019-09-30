import * as Router from 'koa-router';
import DeveloperController from './../controllers/DeveloperController'

const router = new Router();
const developerControler = new DeveloperController();

router
    .get('/developers/:id', developerControler.findById)
    .get('/developers', developerControler.findAll);




export default router;