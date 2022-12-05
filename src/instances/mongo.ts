import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

class MongoConnection {

    constructor() {
        this.connect();
    }

    private async  connect (){
        try {
            await mongoose.connect(process.env.MONGO as string);
            console.log('connected');
        } catch (error) {
            console.log('Something went wrong', error);
        }
    }

}

export default MongoConnection;