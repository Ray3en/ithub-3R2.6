
const defaultState = []

const ADD_PRODUCT = 'ADD_PRODUCT'
const FILTER_BY_SALE = 'FILTER_BY_SALE'
const FILTER_BY_PRICE = 'FILTER_BY_PRICE'

export const productListReducer = (state = defaultState, action)=>{
    switch(action.type){
        case ADD_PRODUCT: 
            return action.payload.map(elem => {
                elem.isShowSale = true
                elem.isShowPrice = true
                elem.discountPercentage = (elem.discountPercentage > 10) ? elem.discountPercentage : null
                return elem
            })
        case FILTER_BY_SALE:
            return state.map(elem => {
                if (action.payload ){
                    elem.isShowSale = (elem.discountPercentage) ? true : false
                } else {
                    elem.isShowSale = true
                }
                return elem
            })
        case FILTER_BY_PRICE:
            const {max, min} = action.payload
            return state.map(elem => {
                    elem.isShowPrice = (!(elem.price >= min && elem.price <= max)) ? false : true
                    return elem
            })
        default:
            return state
    }
}



export const addProductAction = (payload) => ({type: ADD_PRODUCT, payload})
export const filterBySaleAction = (payload) => ({type: FILTER_BY_SALE, payload})
export const filterByPriceAction = (payload) => ({type: FILTER_BY_PRICE, payload})