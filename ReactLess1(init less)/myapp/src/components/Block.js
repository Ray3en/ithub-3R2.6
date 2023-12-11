

function Block(props){
    const {size, color} = props

    // let size = 'xl'
    // let color = 'gray'

    let sizeValue = {
        xl: '400px',
        l:  '200px',
        m:  '100px'
    }

    let styleObj = {
        backgroundColor: color,
        width: sizeValue[size],
        height: sizeValue[size],
    }

    return(
        <div style={styleObj}>

        </div> 
    )
}

export default Block





















    // 1) Создайте компонент Block и вызовете его разметку (любую) в компоненте App

    // 2)
    // Задан объект productInfo
    // На стороен разметки необходимо создать два тега h1 и p
    // h1 должен пердавать значение имени продукта
    // p должен отображать текстовое сво-во 'Sale!' по условию: 
    // Если товар продается со скидкой, параграф должен оказаться на размкетке, 
    // если скидки нет - параграфа быть не должно
    // let productInfo = {
    //         name: 'Велосипед',
    //         price: 199,
    //         salePrice: 19
    // }

    // let isSale = productInfo.price !== productInfo.salePrice

    // // let styleObj = {
    // //     color: 'red',
    // //     fontSize: '150px'
    // // }

    // return(
    //     <div>
    //         <h1 style={{color: 'red'}}>{productInfo.name}</h1>
    //         {isSale && <p>Sale!</p>}
    //     </div>
    // )
    // ----------------------------------
    // Зданаие: задана переменная num с числовым значением
    // Если числовой тип делится на 2 без остатка, в компонетне 
    // должен появиться заголовок h1 с значением Вычисляется, если нет - обычный параграф с значением не вычисляется
  
    // let num = 9

    // return(
    //     <div>
    //         {(num % 2 === 0) ? <h1>Вычисляется</h1> : <p>Не вычисляется</p>}
    //     </div>
    // )
    // ------------------------
    // Заданы две переменые size и color
    // Необходимо создать div элемента с указанными размерами в зависимости от занчение переменной size 
    // а также фоном, котоый передаетсяв занчении color
    // в случае, если size будет xl, размеры элемента должна быть 400х400
    // l - 200x200
    // m - 100x100
    // color передает текстовый тип цвета. 
    // 'red', 'blue', 'purple'