import { memo } from "react"

let render = {
    count1: 0,
    count2: 0,
}

function Counter({value, elem}){

    console.log(`Компонент ${elem} был смонтирован или обновлен ${++render[elem]} раз`)

    return(
        <div>
            <h2>{value}</h2>
        </div>
    )
}

// Если колбек вернет true - компонент не будет обновляться (компонент будет мемоизирован)
// Если колбек вернет false - компонент обновится

// Дефолтное поведение функции мемо
// export default memo(Counter, (previousProp, nextProp) => {
//     return previousProp.value === nextProp.value
// })

// export default memo(Counter, (previousProp, nextProp) => {
//     return nextProp.value > 5
// })


export default memo(Counter)