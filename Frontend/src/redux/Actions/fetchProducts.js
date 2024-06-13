import axios from 'axios'
export const fetchCategory = () => async(dispatch) =>{
    dispatch({type:"PRODUCT_SET_INPROGRESS"})
     axios.get("https://paypal-pioneers-068.onrender.com/Products")
    .then((res)=>{
        dispatch({payload:res.data, type:"PRODUCT_SET_SUCCESS"})

    })
    .catch((err)=>{
        console.log("Error while fetching the products", err)
        dispatch({ type:"PRODUCT_SET_FAILED"});
    })
}