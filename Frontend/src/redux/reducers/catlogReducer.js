export function catlogReducer(state = {search:"",  color:""}, {type, payload}){
    switch(type){
        case "SEARCH":
            return {...state, search:payload}
        case "COLOR":
            return {...state, color:""}
        default :
            return state
    }
}