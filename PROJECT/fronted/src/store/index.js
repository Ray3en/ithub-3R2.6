import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { productListReducer } from './productListReduser'

const rootReducer = combineReducers({
    productList: productListReducer
})
 
export const store = createStore(rootReducer, applyMiddleware(thunk))