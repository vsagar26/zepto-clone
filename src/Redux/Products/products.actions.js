import { getProductAPI } from './products.api';
import * as types from './products.types';

const productRequest = () => {
    return {type : types.PRODUCT_REQUEST};
};
const productError = () => {
    return {type:types.PRODUCT_ERROR};
}
const productSuccess = (payload) => {
    return {type:types.PRODUCT_SUCCESS,payload}
};

const getProducts = (category,params) => async(dispatch) => {
    dispatch(productRequest());
    try {
        let res = await getProductAPI(category,params);
        dispatch(productSuccess(res));
    } catch (error) {
        dispatch(productError());
    }
}

export {getProducts}