// 1) Подход импрота скаченного ИЗОБРАЖЕНИЯ
import pricePng from './picture.png'
// 2) Подход с импортом скаченной ИКОНКИ (векторного изображения)
import { ReactComponent as InstIcon} from './icon.svg'


function Numbers(){

    let num = [1,2,3,4,5,6,7,8,9]

    return(
        <>
            <ul className="second_text">
                {num.map((elem, ind) => 
                    <li key={ind}>{elem}</li>
                )}
            </ul>
            <div>
                <img src={pricePng} width={100} height={100}/>
                <InstIcon width={50} height={50} fill='#656565'/>
            </div>
        </>
    )
}

export default Numbers