// useEffect - это хук, который позволяет СЛЕДИТЬ за этапом жизненного 
// цикла компонента.
// Задача данного хука заключается в выполнении побочного кода в тот момент, когда 
// компонент переходит в новый этап жизненного цикла

// Довольно часто useEffect работает вместе с хуком useState

import { useEffect, useState } from "react"
import Block from "./Block"

function Example(){

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    
    // console.log('Инициализация')

    // У данного хука есть 4 режима работы:
    // 1-ый режим работы хука (Когда компонент будет смонтирован ИЛИ обновлен)
    // useEffect(() => {
        // console.log('Монтирование или обновление')
    // })

    // 2-ой режим работы (только монтирование)
    // useEffect(() => {
    //     console.log('Монтирование')
    // },[])

    // 3-ий режим работы (монтирование или обновление явно указанного стейта)
    // useEffect(() => {
    //     console.log('Монтирование или обновление (state1)')
    // },[count1])

    // 4-ый режим работы (размонтирование компонента)
    // (см компонент Block)


    return(
        <div>
            <h2>{count1}</h2>
            <button onClick={() => setCount1(count1 + 1)}>Click!</button>
            <h2>{count2}</h2>
            <button onClick={() => setCount2(count2 + 1)}>Click!</button>
            {count2 < 5 && <Block/>}
        </div>
    )
}


export default Example