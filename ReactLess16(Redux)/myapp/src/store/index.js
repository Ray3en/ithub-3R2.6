import {applyMiddleware, combineReducers, createStore} from 'redux'
import { clickerReducer } from './clickerReducer'
import { stringReducer } from './stringReducer'
import { usersReducer } from './userReducer'
import thunk from 'redux-thunk'
import { productListReducer } from './productListReducer'

const rootReducer = combineReducers({
    clicker: clickerReducer,
    string: stringReducer,
    users: usersReducer,
    productList: productListReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))


