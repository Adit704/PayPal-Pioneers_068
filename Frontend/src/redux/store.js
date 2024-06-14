import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { productReducer } from "./productReducer";
import {thunk} from 'redux-thunk'
import { wishlist } from "./wishList";
const rootReducer = combineReducers({
    products : productReducer,
    wishlist : wishlist,
})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export default store;