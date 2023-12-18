import { addProductAction } from "../store/productListReducer"


export function fetchAllProducts(){
    return function(dispatch){
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => dispatch(addProductAction(data.products)))
    }
}