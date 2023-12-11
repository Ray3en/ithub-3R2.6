const defualtState = 0

const INCR = 'INCR'
const DECR = 'DECR'
const RESET = 'RESET'

export const clickerReducer = (state = defualtState, action) => {
    switch(action.type){
        case INCR:
            return state + action.payload
        case DECR:
            return state - action.payload
        case RESET:
            return 0
        default:
            return state
    }
}

// Генератор экшена - это функция, которая возвращает экшн
export const incrAction = (payload) => ({type: INCR, payload})
export const decrAction = (payload) => ({type: DECR, payload})
export const resetAction = () => ({type: RESET})