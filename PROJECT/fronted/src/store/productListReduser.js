
const defaultState = {
    category_name: '',
    productList: []
}

const ALL_PRODUCTS = 'ALL_PRODUCTS'
const SALES_PRODUCTS = 'SALES_PRODUCTS'
const PRODUCTS_BY_CATEGORY = 'PRODUCTS_BY_CATEGORY'

export const productListReducer = (state = defaultState, action) => {
    switch(action.type){
        case ALL_PRODUCTS:
            return {category_name: 'All products', productList: action.payload}
        case SALES_PRODUCTS:
            const all_sales_products = action.payload.filter(elem => elem.discont_price)
            return {category_name: 'Discounted items', productList: all_sales_products}
        case PRODUCTS_BY_CATEGORY:
            return {category_name: action.payload.category.title, productList: action.payload.data} 
        default: 
            return state
    }
}

export const allProductsAction = (payload) => ({type: ALL_PRODUCTS, payload})
export const salesProductsAction = (payload) => ({type: SALES_PRODUCTS, payload})
export const productsByCategoryAction = (payload) => ({type: PRODUCTS_BY_CATEGORY, payload})