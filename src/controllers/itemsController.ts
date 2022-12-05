import {Request, Response} from 'express';


class itemsController {

    public async home(req:Request, res:Response){

        //get the newest products added (10);
        //get the most bought products (10);
    };

    public products(req:Request, res:Response){

    }
}


const itemsInstances = new itemsController();
export default itemsInstances;