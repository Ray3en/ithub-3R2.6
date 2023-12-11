import {applyMiddleware, combineReducers, createStore} from 'redux'
import { clickerReducer } from './clickerReducer'
import { stringReducer } from './stringReducer'
import { usersReducer } from './userReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    clicker: clickerReducer,
    string: stringReducer,
    users: usersReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))


