import Developer from "../models/Developer";

export interface IDeveloperService {
    findById(id: number): Promise<any>;
    findAll(): Promise<any>;
    save(model: Developer): Promise<any>;
    update(id: number, model: Developer): Promise<any>;
    remove(id: number): Promise<any>;
}