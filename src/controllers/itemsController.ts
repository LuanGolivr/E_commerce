import {Request, Response} from 'express';
import validator from 'validator';

import itemsMiddle from '../middlewares/itemsMiddleware';


class itemsController {

    public async home(req:Request, res:Response){

        //get the newest products added (10);
        let newestProducts = await itemsMiddle.getNewestProducts();
        //get the most bought products (10);
        let boughtProducts = await itemsMiddle.getMostBoughtProducts();

        res.json({recentProducts: newestProducts, recentBoughtProducts: boughtProducts});
    };

    public async products(req:Request, res:Response){
        let filter = {
            name: '',
            minPrice: 0,
            maxPrice: -1,
            size: '',
            review: -1,
            category: [""],
            color: [""],
            gender: ''
        }

        let page: number = parseInt(req.query.page as string);

        if(req.query){
            filter.name = req.query.name as string,
            filter.minPrice = parseFloat(req.query.minPrice as string);
            filter.maxPrice = parseFloat(req.query.maxPrice as string);
            filter.size = req.query.size as string;
            filter.review = parseFloat(req.query.review as string);
            filter.category = req.query.category as [string];
            filter.color = req.query.color as [string],
            filter.gender = req.query.gender as string;

            let resultFiltered = await itemsMiddle.getProducts(filter, page);

            return res.json({resultFiltered});
        }

        let standardResult = await itemsMiddle.getAllProducts(page);
        
        return res.json({result: standardResult});
    }
}


const itemsInstances = new itemsController();
export default itemsInstances;