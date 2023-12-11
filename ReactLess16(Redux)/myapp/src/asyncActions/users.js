import { addUserListAction } from "../store/userReducer"

export const fetchUserData = () => {
    return function(dispatch){
        let url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(addUserListAction(data)))
    }
}

export const fetchUserIdData = (id) => {
    return function(dispatch){
        let url = 'https://jsonplaceholder.typicode.com/users/'+id
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(addUserListAction(data)))
    }
}