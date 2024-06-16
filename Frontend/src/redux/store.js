import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { productReducer } from "./productReducer";
import {thunk} from 'redux-thunk'
import { wishlist } from "./wishList";
import { cartRefresher } from "./cartRefresher";
const rootReducer = combineReducers({
    products : productReducer,
    wishlist : wishlist,
    refresh:cartRefresher,
})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export default store;