import * as mongoose from 'mongoose';
import { url } from 'inspector';

export class DbUtil {
    
    static _url: string = 'mongodb://localhost:27017/koa_db';
    static _options =  { useNewUrlParser: true,  useUnifiedTopology: true };

    public static async connect(): Promise<mongoose.Mongoose> {
        return await mongoose.connect(DbUtil._url, DbUtil._options);
    }

    public static async disconnect(): Promise<void> {
        await mongoose.connection.close();
    }
}

export default DbUtil;