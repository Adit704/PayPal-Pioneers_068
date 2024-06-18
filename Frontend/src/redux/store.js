import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { productReducer } from "./reducers/productReducer";
import {thunk} from 'redux-thunk'
import { wishlist } from "./reducers/wishList";
import { cartRefresher } from "./reducers/cartRefresher";
import { catlogReducer } from "./reducers/catlogReducer";
const rootReducer = combineReducers({
    products : productReducer,
    wishlist : wishlist,
    refresh:cartRefresher,
    catlog:catlogReducer,

})



const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export default store;