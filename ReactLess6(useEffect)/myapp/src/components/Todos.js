import { useEffect, useState } from "react"


function Todos(){

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])

    return(
        <ul>
            {todos.map(elem => <li key={elem.id}>{elem.title}</li>)}
        </ul>
    )
}


export default Todos