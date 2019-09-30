import DeveloperService from "./../services/DeveloperService";
import * as Koa from 'koa';

export default class DeveloperController {
    
    private service: DeveloperService;  

    constructor() {
        console.log('Init developer controller ctor');
        this.service = new DeveloperService();
    }

    public async findById(ctx: Koa.Context) {
        try {
            let service = new DeveloperService();
            console.log(service);
            const id = ctx.params.id;
            const res = await service.findById(id);
            ctx.body = res;
        } catch (err) {
            ctx.app.emit('error', err, ctx);
        }        
    }

    public async findAll(ctx: Koa.Context) {
        try {
            let service = new DeveloperService();
            console.log(service);
            const res = await service.findAll();
            ctx.body = res;
        } catch (err) {
            ctx.app.emit('error', err, ctx);
        }
    }

}