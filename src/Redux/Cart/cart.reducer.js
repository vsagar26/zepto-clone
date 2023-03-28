import * as types from './cart.types';


const initialState = {
    cart:[]
};

const reducer = (state = initialState,action) => {
    const {type,payload} = action;
    switch (type) {
        case types.ADD_TO_CART:
            return {
                ...state,
                cart:[...state.cart,payload]
            }
        case types.REMOVE_FROM_CART:
            return {
                ...state,
                cart:state.cart.filter(item => item.id !== payload.id)
            }
            
    
        default:
            return state;
    }
}

export {reducer}