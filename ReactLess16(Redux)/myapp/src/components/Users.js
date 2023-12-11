import { useDispatch, useSelector } from "react-redux"
import { delFirstUserAction, delLastUserAction, delUserByIdAction, upperCaseNameAction } from "../store/userReducer"
import { fetchUserData } from "../asyncActions/users"
import { useEffect } from "react"



function Users(){

    const users = useSelector(store => store.users)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])

    // useEffect(() => {
    //     dispatch(fetchUserData())
    // },[])

    return(
        <div>
            <h2>Users</h2>
            <div>
                <button onClick={() => dispatch(delFirstUserAction())}>Delete first user</button>
                <button onClick={() => dispatch(delLastUserAction())}>Delete last user</button>
                <button onClick={() => dispatch(fetchUserData())}>Add Async User List</button>
                <button onClick={() => dispatch(upperCaseNameAction())}>Upper Name</button>
            </div>
            <div>
                {users.map(elem => 
                    <div key={elem.id} onDoubleClick={() => dispatch(delUserByIdAction(elem.id))}>
                        <p>{elem.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}


export default Users