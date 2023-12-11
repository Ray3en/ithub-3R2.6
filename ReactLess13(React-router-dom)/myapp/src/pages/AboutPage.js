import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function AboutPage(){

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])

    console.log(products)

    return (
        <div className="about_content">
            <ul>
            {products.map(elem => 
                <Link to={'/product/'+elem.id}>
                    <li>{elem.title}</li>
                </Link>
            )}
            </ul>
        </div>
    )
}

export default AboutPage