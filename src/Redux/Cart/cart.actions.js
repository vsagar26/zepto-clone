import * as types from './cart.types'

export const addToCart = (item) => {
    console.log(item,"lll")
    return {
        type:types.ADD_TO_CART,
        payload:item
    }
}

export const removeFromCart = (item) => {
    return {
        type:types.REMOVE_FROM_CART,
        payload:item
    }
}