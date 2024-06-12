import { combineReducers, legacy_createStore } from "redux";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
    products:productReducer,
})

const store = legacy_createStore(rootReducer);

export default store;