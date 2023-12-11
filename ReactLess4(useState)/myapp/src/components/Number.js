import { useEffect, useState } from "react"
// Хуки - это специальные функции, которые импортируются с библиотеки реакт
// Хуки позволяют упралвять жизненным циклом компонента

// useState - это хук, который позволяет обновить компонент

function Number(){
    // const [state, setState] = useState(0)
    // state - есть значение (состояние), которое будет динамически меняиться
    // Задача setState - обновить компонент, переписав значение стейта

    // ВАЖНО! Значение стейта меняется только через setState!


    // Дефолтное значение представляет из себя оператор нулевого слияния 
    // метод geiItem иногда может вернуть NULL, тогда оператор сформирует для него значение 0
    // https://teams.microsoft.com/l/message/19:meeting_MWY0ZGY1ZTItNGVhOC00NTk3LTk2NTItMTQwZTllODQ4ZTNi@thread.v2/1696950358472?context=%7B%22contextType%22%3A%22chat%22%7D
    const [count, setCount] = useState(+(localStorage.getItem('count') ?? 0))

    function getNumber(){
        let answer = +prompt()
        if (!isNaN(answer)){
            setCount(count + answer)
        }
    }

    // При монтировании мы сохраняем данные из LS и применяем их к стейту

    // useEffect(()=> {
    //     if (localStorage.getItem('count') !== null){
    //         let data = +localStorage.getItem('count')
    //         setCount(data)
    //     }
    // }, [])

    // В данном еффекте при каждом изменении стейта мы сохраняем его актуальное значение в LS
    useEffect(() => {
        localStorage.setItem('count', count)
    }, [count])

    return(
        <div>
            <h1>Счетчик</h1>
            <h2 
                style={{color: (count % 2 == 0) ? 'green' : 'red'}}
            >
                {count}
            </h2>
            <button onClick={() => setCount(count + 1)}>Инкремент!</button>
            <button onClick={() => setCount(count - 1)}>Декремент!</button>
            <button onClick={() => setCount(count + 100)}>Увеличить на 100!</button>
            <button onClick={() => setCount(count - 100)}>Уменьшить на 100!</button>
            <button onClick={() => setCount((count ** 0.5 % 1 === 0) ? count ** 0.5 : 0)}>Посчитать корень!</button>
            <button onClick={() => getNumber()}>Увеличить на n!</button>
        </div>
    )
}

export default Number