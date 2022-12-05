import {Model, Schema, model, connection} from 'mongoose';

type Gender = "Male" | "Female" | "Other";

type userType = {

    firstName: string,
    lastName: string,
    email: string, 
    passwordHash: string,
    birthDate: Date,
    gender: Gender,
    token: string
}

const schema = new Schema<userType>({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    passwordHash: {type:String, required:true},
    birthDate: {type: Date},
    gender: {type: String},
    token: {type: String}
});

const modelName: string = "users";

const userModel = connection &&  connection.models[modelName]?(connection.models[modelName] as Model<userType>):model<userType>(modelName, schema);

export default userModel;