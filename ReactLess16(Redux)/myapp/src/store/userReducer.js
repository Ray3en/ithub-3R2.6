

const start_datas = [
    {id: 11, name: 'Alex'},
    {id: 12, name: 'Steven'},
    {id: 13, name: 'Neena'},
    {id: 14, name: 'John'},
]

const defaultState = JSON.parse(localStorage.getItem('users')) ?? start_datas

const DEL_LAST_USER = 'DEL_LAST_USER'
const DEL_FISRT_USER = 'DEL_FIRT_USER'
const ADD_USER_LIST = 'ADD_USER_LIST'
const DEL_USER_BY_ID = 'DEL_USER_BY_ID'
const UPPER_CASE_NAME = 'UPPER_CASE_NAME'

export const usersReducer = (state = defaultState, action)=> {
    switch(action.type){
        case DEL_FISRT_USER:
            return state.slice(1)
        case DEL_LAST_USER:
            return state.slice(0,state.length - 1)
        case ADD_USER_LIST:
            let changed_users = action.payload.map(elem => ({id: elem.id, name: elem.name}))
            return [...state, ...changed_users]
        case DEL_USER_BY_ID:
            return state.filter(elem => elem.id !== action.payload)
        case UPPER_CASE_NAME:
            return state.map(elem => {
                elem.name = elem.name.toUpperCase()
                return elem
            })
        default: 
            return state
    }
}


export const delFirstUserAction = () => ({type: DEL_FISRT_USER})
export const delLastUserAction = () => ({type: DEL_LAST_USER})
export const addUserListAction = (payload) => ({type: ADD_USER_LIST, payload})
export const delUserByIdAction = (payload) => ({type: DEL_USER_BY_ID, payload})
export const upperCaseNameAction = () => ({type: UPPER_CASE_NAME})