import { IDeveloper } from "../models/Developer.model";


export interface IDeveloperService {
    findById(id: number): Promise<IDeveloper>;
    findAll(): Promise<Array<IDeveloper>>;
    save(doc: IDeveloper): Promise<IDeveloper>;
    update(id: number, doc: IDeveloper): Promise<any>;
    remove(id: number): Promise<any>;
}