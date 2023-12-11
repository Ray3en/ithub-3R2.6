import { useEffect, useState } from "react"


function User(){

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    },[])

    return(
        <div>
            <h2>Users</h2>
            <button onClick={() => setUsers(users.slice(1))}>Rem first user</button>
            {users.map(elem => <h3 key={elem.id}>{elem.name}</h3>)}
        </div>
    )
}


export default User


// создайте компонент Todos, который будет формировать массив 
// используя сетевой запрос. 
// https://jsonplaceholder.typicode.com/todos
// На разметке сфомриуйте миркированый ul список с li элементами
// каждый li элемент должен содержать заголовок задачи (todo)