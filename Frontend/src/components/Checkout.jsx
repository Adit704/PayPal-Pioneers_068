import { useMemo, useState } from "react"
import { CheckoutCard } from "./CheckoutCard"
import { useSelector } from "react-redux"
import '../styles/checkout.css'
export function Checkout(){
    const [totalAmount, setTotalAmount] = useState(0)
    const [newTotalAmount, setNewTotalAmount] = useState(0)
    // console.log(visible);

    let product = useSelector(state => state.products)
    // useEffect(()=>{
        // localStorage.setItem("wineCart", JSON.stringify({1:1,2:1,10:1,15:1,20:1}))
    // },[])
    // console.log(product);
    const cart = useMemo(()=>{
        // console.log("hello");
        setTotalAmount(0);
        setNewTotalAmount(0);
        let cardDetails = JSON.parse(localStorage.getItem("wineCart")) || {};
        return product.data.filter((elem)=>{
            if(Object.keys(cardDetails).includes(String(elem.id))) return true;
            else false;
        }).map((elem)=>{ 
            setTotalAmount((prev) => {
                return prev+Number(elem.Price)*Number(cardDetails[elem.id])
            })
            setNewTotalAmount((prev) => {
                return prev+Number(elem.newPrice)*Number(cardDetails[elem.id])
            })
            return {...elem, quantity:Number(cardDetails[elem.id])}})
    },[product.status])

    return(
        <div>
            <h1>Checkout</h1>
            <div>
                <div></div>
                <div>
                <div className="your-cart" >
        <div style={{display:"flex", justifyContent:"flex-end", alignItems:"flex-start", width:"100%"}}>
        <h1 className="cart-title">Your cart</h1>
        <div style={{color:"gray"}} ><u>Edit</u></div>
        </div>
        <div className="progressBar">
            {newTotalAmount>=1000 && <p>You're getting free shipping!</p>}
            {newTotalAmount<1000 && <p>Add item worth <b>{Math.round(1000-newTotalAmount)}</b> more to get free shipping!</p>}
           
        </div>
        {Math.round(newTotalAmount*.1) > 0 && <div className="points-extra-info">
            Earn <b>{Math.round(newTotalAmount*.1)}</b> points on this purchase!
        </div>}
        {product.status == "inprogress" && <div style={{textAlign:"center", color:"gray", marginTop:"100px"}}>Loading.....</div> }
        <div className="product-cart" >
            {cart && cart.map((elem)=>{
                return <CheckoutCard key={elem.id} id={elem.id} imgSrc={elem.img} title={elem.title} prevAmount={elem.Price} amount={elem.newPrice} quantity={elem.quantity}/>
            })}
            {!cart && <div style={{color:"gray", textAlign:"center", padding:"100px 0"}}>You don't have any thing in you cart!</div> }
        </div>

        
        <div className="total-cart-value">
            <div className="item-count">
                <div className="subtotal-text">Subtotal</div>
                <div style={{fontSize:"12px"}} >({cart.length} items)</div>
            </div>
            <div>
                <div style={{display:"flex",gap:"10px"}}>
                    <div><sup style={{color:"gray", textDecoration:"line-through"}}>{Math.round(totalAmount)}$</sup></div>
                    <div>{Math.round(newTotalAmount)}$</div>
                </div>
                <div style={{color:"green", fontSize:"14px"}}>You saved {Math.round(totalAmount-newTotalAmount)}$</div>
            </div>
        </div>
            
            
    </div>
                </div>
            </div>
        </div>
    )
}