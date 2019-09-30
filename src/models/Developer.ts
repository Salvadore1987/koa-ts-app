import * as mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    position: {
        type: String,
        required: true
    }
});

export class Developer {

    private name: string;
    private surname: string;
    private age: number;
    private position: string

    constructor(name: string, surname: string, age: number, position: string) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.position = position;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setSurname(surname: string) {
        this.surname = surname;
    }

    public getSurname(): string {
        return this.surname;
    }

    public setAge(age: number) {
        this.age = age;
    }

    public getAge(): number {
        return this.age;
    }

    public setPosition(position: string) {
        this.position = position;
    }

    public getPosition(): string {
        return this.position;
    }

    public static getDbModel(): any {
        const model = mongoose.model('Developer', Schema);
        return model;
    }
}

export default Developer;