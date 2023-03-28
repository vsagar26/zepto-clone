import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as productReducer} from './Products/products.reducer';
import {reducer as userAuthReducer} from './UserAuth/userAuth.reducer';
import {reducer as cartReducer} from './Cart/cart.reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    productReducer,
    userAuthReducer,
    cartReducer
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))