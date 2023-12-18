import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "../asyncActions/products"
import { filterBySaleAction } from "../store/productListReducer"



function ProductList(){

    const productList = useSelector(store => store.productList).filter(elem => elem.isShow)
    const dispatch = useDispatch()

    console.log(productList)

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    function checkBoxHandler(e){
        dispatch(filterBySaleAction(e.target.checked))
    }


    return(
        <div>
            <div>
                <label> Sale -
                    <input onClick={checkBoxHandler} type="checkbox"/>
                </label>
            </div>
            <div>
                {productList.map(elem => 
                    <div key={elem.id}>
                        <h3>{elem.title}</h3>
                        <p style={{color: (elem.discountPercentage) ? 'red' : 'black'}}>
                            {elem.price}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductList