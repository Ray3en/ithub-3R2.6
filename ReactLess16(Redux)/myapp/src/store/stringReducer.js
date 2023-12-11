
const defualtState = 'Default string'

const UPPER_STRING = 'UPPER_STRING'
const LOWER_STRING = 'LOWER_STRING'
const CHANGE_STRING = 'CHANGE_STRING'
const INIT_CAP = 'INIT_CAP'

export const stringReducer = (state = defualtState, action) => {
    switch(action.type){
        case UPPER_STRING:
            return state.toUpperCase()
        case LOWER_STRING:
            return state.toLowerCase()
        case CHANGE_STRING: 
            return action.payload
        case INIT_CAP:
            return state[0].toUpperCase() + state.slice(1).toLowerCase()
        default:
            return state
    }
}

export const upperCaseAction = () => ({type: UPPER_STRING})
export const lowerCaseAction = () => ({type: LOWER_STRING})
export const changeStringAction = (payload) => ({type: CHANGE_STRING, payload})
export const initCapAction = () => ({type: INIT_CAP})