import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// useParams - хук, который позволяет получbть ПАРАМЕТР с ссылки (/product/:id)
function ProductInfoPage(){

    const {id} = useParams()
    const [product, setProduct] = useState({images: []})

    useEffect(() => {
        fetch('https://dummyjson.com/products/'+id)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    console.log(product)

    return (
        <div className="content">
            <h1>{product.title}</h1>
            <img src={product.images?.[0]}/>
            {/* {product.images.map(elem => 
                <div key={elem}>
                    <img src={elem}/>
                </div>
            )} */}
            <p>Price: {product.price}$</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default ProductInfoPage