import { base_url } from ".."
import { productsByCategoryAction } from "../store/productListReduser"


export function fetchCategoryById(id){
    return function(dispatch){
        fetch(base_url+'/categories/'+id)
        .then(res => res.json())
        .then(data => dispatch(productsByCategoryAction(data)))
    }
}