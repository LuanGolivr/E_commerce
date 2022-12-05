import Products from '../models/Product';


class itemsMiddle {

    
    public async getNewestProducts(){
        
        let products = await Products.find({}).sort({'descending': 1}).skip(0).limit(10);
        return products;
    }

    public async getMostBoughtProducts(){
        let products = await Products.find({view: {$gt: 0}}).sort({'descending': 1});
        console.log(products);
        let result = [];

        for(let i = 0; i < products.length; i++){
            if(i < 10){
                result.push(products[i]);
            } else {
                break;
            }
        }

        return result;
    }

    public async getAllProducts(Page: number){
        let allProducts = await Products.find({view: {$gte: 0}}).sort({'descending': 1}).skip(Page * 20).limit(20);

        return allProducts;
    }
    
    public async getProducts(filter: any, page: number){

    }

}

const itemsMidd = new itemsMiddle();
export default itemsMidd;