import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"


function NotFoundPage(){

    // Это хук, котоырй возвращает информацию о странице
    let location = useLocation()
    console.log(location)

    // Хук позволяет в виде функции осуществлять маршрутизацию по приложению (когда Link это делает для клика)
    let navigate = useNavigate()

    // Можно использовать navigate в useEffect
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate('/about')
    //     },5000)
    // }, [])

    return (
        <div className="content">
            <button onClick={() => navigate('/')}>Go home</button>
            <button onClick={() => navigate(-1)}>Go back</button>
            <img src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg"/>
        </div>
    )
}

export default NotFoundPage