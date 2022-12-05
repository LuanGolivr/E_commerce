import {Model, Schema, model, connection} from 'mongoose';

type gender = "male" | "female" | "universal";

type productType = {

    name: string,
    description: string,
    price: number,
    discountPrice: number,
    size: {
        pp: number,
        p: number,
        m: number,
        g: number,
        gg: number, 
    },
    review: number,
    category: [string],
    color: [string]
    gender: gender,
    addedDate: Date,
    view: number
};

const schema = new Schema<productType>({

    name: {type: String},
    description: {type: String},
    price: {type: Number},
    discountPrice: {type: Number},
    size: {
        pp: {type: Number},
        p: {type: Number},
        m: {type: Number},
        g: {type: Number},
        gg: {type: Number}
    },
    review: {type: Number},
    category: {type: [String]},
    color: {type: [String]},
    gender: {type: String},
    addedDate: {type: Date},
    view: {type: Number}
});


const modelName: string = "products";

const productsModel = connection &&  connection.models[modelName]?(connection.models[modelName] as Model<productType>):model<productType>(modelName, schema);

export default productsModel;