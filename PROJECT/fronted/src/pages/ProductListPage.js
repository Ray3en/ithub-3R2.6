import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "../asyncActions/productsList"
import { useLocation, useParams } from "react-router-dom"
import { fetchCategoryById } from "../asyncActions/categoriesList"
import { base_url } from ".."



function ProductListPage({type}){

    const {category_name, productList} = useSelector(store => store.productList)
    const dispatch = useDispatch()
    const location = useLocation()
    const {id} = useParams()

    useEffect(() => {
        if (type !== 'category'){
            dispatch(fetchAllProducts(type))
        } else {
            dispatch(fetchCategoryById(id))
        }
    }, [location.pathname])


    return(
        <div>
            <h2>{category_name}</h2>
            <div className="products_wrapper">
                {productList.map(elem => 
                    <div key={elem.id}>
                        <img width={200} src={base_url+elem.image}/>
                        <p>{elem.title}</p>
                    </div>
                )}
            </div>
        </div>
    )
}


export default ProductListPage