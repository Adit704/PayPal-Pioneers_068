import axios from 'axios'
export const fetchCategory = () => async(dispatch) =>{
    dispatch({type:"PRODUCT_SET_INPROGRESS"})
    try{
        let res =  await axios.get("https://paypal-pioneers-068.onrender.com/Products");
        dispatch({type:"PRODUCT_SET_SUCCESS", payload:res.data})
    }
    catch(err){
        console.log("Error while fetching the products", err)
        dispatch({ type:"PRODUCT_SET_FAILED"})
    }
}