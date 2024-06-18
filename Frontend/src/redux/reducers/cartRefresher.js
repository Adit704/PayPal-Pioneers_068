export function cartRefresher(state = false, {type, payload}){
    switch(type){
        case "REFRESH_CART":
            return !state
        default:
            return state;
    }
}