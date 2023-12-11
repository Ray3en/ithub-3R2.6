import { useEffect, useState } from "react"

function String(){
    // Задача 1. 
    // Реализуйте сохранения состояния при каждом его измениии в LS
    // Задача 2. 
    // Реализуйте чтение записи из LS сразу же при формировании defaultState

    // Задача 3 
    // Сделать со строковым стейтом тоже самое

    const [string, setString] = useState(localStorage.getItem('string') ?? 'Default string')
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) ?? true)
    // const [theme, setTheme] = useState((localStorage.getItem('theme') ?? 'true') === 'true')

    // В дополнении к смене темы, реализуйте процесс, который будет отображть марикрованный спсиок
    // если булевый тип theme будет false, маркированный список должен исчезнуть из разметки

    function reverse(){
        setString(string.split('').reverse().join(''))
    }

    function toUpper(){
        setString(string.toUpperCase())
    }

    function toLower(){
        setString(string.toLowerCase())
    }

    function changeTheme(){
        setTheme(!theme)
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        localStorage.setItem('string', string)
    }, [string])

    return(
        <div style={{backgroundColor: (theme) ? 'green' : 'red'}}>
            <h1>Cтрока</h1>
            <h2>{string}</h2>
            <button onClick={() => setString(prompt())}>Изменить текст строки</button>
            <button onClick={() => reverse()}>Reverse!</button>
            <button onClick={() => toUpper()}>Верхний регистр!</button>
            <button onClick={() => toLower()}>Нижний регистр!</button>
            <button onClick={() => changeTheme()}>Сменить тему</button>
            {
                theme && 
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                </ul>
            }
        </div>
    )
}

export default String