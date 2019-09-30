import Developer from './../models/Developer';
import { IDeveloperService } from './IDeveloperService';
import DbUtil from './../db/DbUtil';

export default class DeveloperService implements IDeveloperService {

    private developerModel: any;

    constructor() {
        this.developerModel = Developer.getDbModel();
    }

    public async save(model: Developer): Promise<any> {
        await DbUtil.connect();
        const dev = new this.developerModel(model);
        const res = await dev.save();
        await DbUtil.disconnect();
        return res;
    }

    public async findById(id: number): Promise<any> {
        await DbUtil.connect();
        const res = await this.developerModel.findById(id);
        await DbUtil.disconnect();
        return res;
    }

    public async findAll(): Promise<any> {
        await DbUtil.connect();
        const res = await this.developerModel.find();
        await DbUtil.disconnect();
        return res;
    }

    public async update(id: number, model: Developer): Promise<any> {
        await DbUtil.connect();
        const res = await this.developerModel.updateOne(
            {_id: id}, 
            {$set: {name: model.getName(), surname: model.getSurname(), age: model.getAge(), position: model.getPosition()}}
        );
        await DbUtil.disconnect();
        return res;
    }

    public async remove(id: number): Promise<any> {
        await DbUtil.connect();
        const res = await this.developerModel.remove({_id: id});
        await DbUtil.disconnect();
        return res;
    }
}