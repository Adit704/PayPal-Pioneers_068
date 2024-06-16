import { useEffect, useMemo, useState } from "react"
import { CheckoutCard } from "./CheckoutCard"
import { useSelector } from "react-redux"
import '../styles/checkout.css'
import { Button, Input } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { Cart } from "./Cart"
export function Checkout(){
    const [totalAmount, setTotalAmount] = useState(0)
    const [newTotalAmount, setNewTotalAmount] = useState(0)
    const [checkoutStatus,setCheckoutStatus] = useState("info");
    const navigate = useNavigate();
    // console.log(visible);
    let product = useSelector(state => state.products)
    // useEffect(()=>{
    //     localStorage.setItem("wineCart", JSON.stringify({1:1,2:1,10:1,15:1,20:1}))
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
        <div className="checkout">
            <h1 className="checkout-title">Checkout</h1>
            <div>
                <div className="checkout-info" >
                    <div className="checkoutStatus">
                        <div>1. Information</div>
                        <div>2. Delivery</div>
                        <div>3. Payment method</div>
                    </div>
                    <div>
                        <div>I am a new customer</div>
                        <div>I have an account</div>
                    </div>
                    <div>
                        <form action="">
                        {checkoutStatus == "info" && <div>
                            <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-between"}}>
                                <div style={{width:"45%"}}>
                                    <label htmlFor="">First name</label>
                                    <Input w="100%" border={"1px solid"} required/>
                                </div>
                                <div style={{width:"45%"}}>
                                    <label htmlFor="">Last name</label>
                                    <Input border={"1px solid"} required/>
                                </div>
                            </div>
                                <div>
                                    <label htmlFor="">Phone number</label>
                                    <Input border={"1px solid"} required/>
                                </div>
                                <div>
                                    <label htmlFor="">Email address</label>
                                    <Input border={"1px solid"} required/>
                                </div>
                                <div>
                                    <label htmlFor="">Your message (optional)</label>
                                    <Input border={"1px solid"} />
                                </div>
                        </div> }
                        {checkoutStatus == "deli" && <div>

                        </div> }
                        {}
                        <Button w="100%" colorScheme="red">Continue</Button>
                        </form>
                    </div>
                </div>
                <div>
                    <div className="your-cart" >
                    <div style={{display:"flex", justifyContent:"flex-end", alignItems:"flex-start", width:"100%"}}>
                        <h1 className="cart-title">Your cart</h1>
                        <div onClick={()=>{navigate("/")}} style={{color:"gray"}} ><u>Edit</u></div>
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

                
                <div className="checkout-total">
                    <div>
                    <span>Discount</span><span style={{color:"green",}}>{Math.round(newTotalAmount-totalAmount)}$</span>
                    </div>
                    <div><span>Subtotal</span><span></span>{Math.round(totalAmount)}$</div>
                    <div><span>Delivery</span><span>{newTotalAmount < 1000 && <span>30$</span> }{newTotalAmount >= 1000 && <span>Free</span> }</span></div>
                </div>
                <div className="total-cart-value">
                    <div className="item-count">
                        <div className="subtotal-text">Total Amount</div>
                        <div style={{fontSize:"12px"}} >({cart.length} items)</div>
                    </div>
                    <div>
                        <div style={{display:"flex",gap:"10px"}}>
                            <div className="subtotal-text" >{Math.round(newTotalAmount) >= 1000 && Math.round(newTotalAmount)}{Math.round(newTotalAmount) < Math.round(newTotalAmount)}$</div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}