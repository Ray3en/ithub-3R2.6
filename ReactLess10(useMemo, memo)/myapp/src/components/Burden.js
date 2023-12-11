import { memo, useMemo } from "react"

let render = 0

function Burden({value}){

    console.log(`Компонент Burden был обновлен ${++render} раз`)

    // useMemo это хук, который позволяет не вызывать функцию (не возвращать новый return) после обновления компонента.
    // Данный хук также позволяет в качестве второго аргумента указать зависиомтси

    // useCallback позволяет не пересоздавать функцию. useCallback, в отличии от useMemo, возвращает функцию

    let burdenHandler = useMemo(() => {
        let i = 0
        while(i < 1_000_000_000){
            i++
        }
        return (value >= 7) ? 'state2 больше или равен 7' : 'state2 меньше 7'
    },[value])

    // Оптимизировать работу компонента. Добиться результата, когда при обновлениии count2 компонент
    // burden обновлять не будет. Обновление должно произойти только 1 раз когда проп value будет передавать значение 7

    return(
        <div>
            <h1>{burdenHandler}</h1>
        </div>
    )
}

export default memo(Burden, (previousProp, currentProp) => {
    return currentProp.value !== 7
})