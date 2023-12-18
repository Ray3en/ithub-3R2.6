
const defaultState = []

const ADD_PRODUCT = 'ADD_PRODUCT'
const FILTER_BY_SALE = 'FILTER_BY_SALE'

export const productListReducer = (state = defaultState, action)=>{
    switch(action.type){
        case ADD_PRODUCT: 
            return action.payload.map(elem => {
                elem.isShow = true
                elem.discountPercentage = (elem.discountPercentage > 10) ? elem.discountPercentage : null
                return elem
            })
        case FILTER_BY_SALE:
            return state.map(elem => {
                if (action.payload){
                    elem.isShow = (elem.discountPercentage) ? true : false
                } else {
                    elem.isShow = true
                }
                return elem
            })
        default:
            return state
    }
}



export const addProductAction = (payload) => ({type: ADD_PRODUCT, payload})
export const filterBySaleAction = (payload) => ({type: FILTER_BY_SALE, payload})