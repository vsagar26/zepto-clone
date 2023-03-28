import * as types from './products.types';
const initialState = {
    products:[],
    isLoading:false,
    isError:false
};

const reducer = (state=initialState,action) => {
    const {type,payload} = action;

    switch (type) {
        case types.PRODUCT_REQUEST:
            return {...state,isLoading:true}
        case types.PRODUCT_ERROR:
            return {...state,isLoading:false,isError:true}
        case types.PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading:false,
                products:payload.data
            }
        default:
            return state;
    }
}

export {reducer}