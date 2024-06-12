import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { productReducer } from "./productReducer";
import {thunk} from 'redux-thunk'
const rootReducer = combineReducers({
    products:productReducer,
})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export default store;