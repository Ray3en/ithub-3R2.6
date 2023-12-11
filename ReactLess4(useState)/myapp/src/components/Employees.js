import { useEffect, useState } from "react"


function Employees(){

    const data = [
        {id: 1, name: 'Alex', salary: 1000},
        {id: 2, name: 'Steven', salary: 2000},
        {id: 3, name: 'Neena', salary: 3000},
        {id: 4, name: 'John', salary: 4000},
    ]

    const [empl, setEmpl] = useState(data)

    function remLastEmpl(){
        // Решение 1
        setEmpl(empl.slice(0,-1))

        // Решение 2
        // setEmpl(empl.filter((_, ind) => ind !== empl.length - 1))

        // Решение 3
        // let copyEmpl = [...empl]
        // copyEmpl.pop()
        // setEmpl(copyEmpl)

    }

    function remFirstEmpl(){
        setEmpl(empl.slice(1))
    }

    function changeSalary(){
        let changesUser = empl.map(elem => ({...elem, salary: elem.salary * 1.2}))
        setEmpl(changesUser)
    }

    function addNewEmpl(){
        let [name, salary] = prompt().split(' ')
        let newEmpl = {
            id: Date.now(),
            salary: +salary,
            name
        }
        setEmpl([...empl, newEmpl])
    }

    // Создайте кнопку, которая будет фильтровать сотрудноков по четному ID
    function filterEMpl(){
        let filteredEmpl = empl.filter((elem) => elem.id % 2 === 0)
        setEmpl(filteredEmpl)
    }

    // Задание
    // Реализовать сохранение данных пользователй в LS а также их чтение на момент монтирования компонента

    useEffect(() => {
        if (localStorage.getItem('empl') !== '[]' && localStorage.getItem('empl') !== null){
            let data = JSON.parse(localStorage.getItem('empl'))
            setEmpl(data)
        }
    },[])

    useEffect(() => {
        localStorage.setItem('empl', JSON.stringify(empl))
    }, [empl])
    return(
        <div>
            <h1>Сотрудники</h1>
            <button onClick={() => remLastEmpl()}>Delete last empl</button>
            <button onClick={() => remFirstEmpl()}>Delete first empl!</button>
            <button onClick={() => changeSalary()}>Change salary!</button>
            <button onClick={() => addNewEmpl()}>Add new empl!</button>
            <button onClick={() => filterEMpl()}>Filter empl!</button>
            {empl.map(elem => 
                <div key={elem.id}>
                    <h3>{elem.name}</h3>
                    <p>{elem.salary}</p>
                </div>
            )}
        </div>
    )
}

export default Employees