import { base_url } from "..";
import { allProductsAction, salesProductsAction } from "../store/productListReduser";


export function fetchAllProducts(arg){
    return function(disptach){
        fetch(base_url+'/products/all')
            .then(res => res.json())
            .then(data => {
                if (arg === 'all'){
                    disptach(allProductsAction(data))
                } else if (arg === 'sale'){
                    disptach(salesProductsAction(data))
                }
            })
    }
}