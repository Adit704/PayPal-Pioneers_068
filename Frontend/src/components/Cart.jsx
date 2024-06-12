import { useEffect, useMemo, useState } from "react"
import '../styles/Cart.css'
import { CartCard } from "./CartCard"
import { useDispatch } from "react-redux"
import { fetchCategory } from "../redux/Actions/fetchProducts"
export function Cart(){
    
    const [totalAmount, setTotalAmount] = useState(1000)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCategory());
        localStorage.setItem("wineCart", JSON.stringify({"1":1,"2":1,"10":1,"15":1,"20":1}))
    },[])
    const cart = useMemo(()=>{
        return JSON.parse(localStorage.getItem("wineCart"))
    },[])
    return (
    <div className="cart">
        <h1>Shopping cart</h1>
        <div className="progressBar">
            {totalAmount>=1000 && <p>You're getting free shipping!</p>}
            {totalAmount<1000 && <p>Add item worth <b>{1000-totalAmount}</b> more to get free shipping!</p>}
            <div  className="progress-bar-section">
            <span>0$</span>
            <progress id="progress-bar" max="1000" value={totalAmount}></progress>
            <span>1000$</span>
            </div>
        </div>
        <div className="points-extra-info">
            Earn <b>{Math.round(totalAmount*.1)}</b> points on this purchase!
        </div>
        <div className="product-cart">
            {cart && cart.map((elem)=>{
                // return <CartCard/>
                return <div>{elem}</div>
            })}
            {!cart && <div style={{color:"gray", textAlign:"center", padding:"100px 0"}}>You don't have any thing in you cart!</div> }
        </div>
    </div>
    )
}