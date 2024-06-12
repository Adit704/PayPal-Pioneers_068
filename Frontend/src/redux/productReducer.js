export function productReducer(state = {data:[], status:"inprogress"}, {type, payload}){
    switch(type){
        case "PRODUCT_SET_SUCCESS":
            return{status:"success", data:payload};
        case "PRODUCT_SET_FAILED":
            return({...state, status:"failed"});
        case "PRODUCT_SET_INPROGRESS":
            return({...state, status:"inprogress"});
        default:
            return state;

    }
}