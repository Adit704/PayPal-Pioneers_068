import { useEffect, useMemo,  useState } from "react"
import { CheckoutCard } from "./CheckoutCard"
import { useSelector } from "react-redux"
import '../styles/checkout.css'
import { Button, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { Cart } from "./Cart"
import { Header } from "./Header"
import { Footer } from "./Footer"
import exitImg from "../assets/exitPage.png"
export function Checkout(){
    const checkoutOrder = ["info", "deli", "payment", "confirm"]
    const [totalAmount, setTotalAmount] = useState(0)
    const [newTotalAmount, setNewTotalAmount] = useState(0)
    const [checkoutStatus,setCheckoutStatus] = useState(0);
    const [input, setInput] = useState([]);
    const navigate = useNavigate();
    // console.log(visible);
    let product = useSelector(state => state.products)
    // useEffect(()=>{
    //     localStorage.setItem("wineCart", JSON.stringify({1:1,2:1,10:1,15:1,20:1}))
    // },[])
    // console.log(product);
    const [inputRef,setInputRef] = useState([]);
   
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

    function Confirm(){
        return(
            <div className="confirm-details">
                    <h3>Order Review</h3>
                    <div></div>
                    <div>
                        <div>1. Information</div>
                        <div><span>{input[0]}</span> <span>{input[1]}</span></div>
                        <div>
                            {input[2]}
                        </div>
                    </div>
                    <div>
                        <div >2. Delivery</div>
                        <div>
                            <div>{input[5]}</div>
                            <div><span>{input[6]}</span> <span>{input[7]}</span></div>
                            <div><span>{input[8]}</span>, <span>{input[9]}</span></div>
                        </div>
                    </div>

                </div>
        )
    }

    function handleSubmit(e){
        e.preventDefault();
        if(checkoutStatus >= 3){
            setCheckoutStatus(prev => prev+1);
            

        }
        else{
            setCheckoutStatus(prev => prev+1);
            console.log(inputRef)
            setInput(prev => [...prev, ...inputRef.map(elem => elem.value)]);
            setInputRef([]);
            }
        console.log(input);
    }
    if(checkoutStatus == 4){
        localStorage.removeItem("wineCart");
    }
    return(
        <div className="checkout">
            <Header/>
            <h1 className="checkout-title">Checkout</h1>
                <div>

                <div className="checkout-info" >
                    <div className="checkoutStatus">
                        <div style={{fontWeight:checkoutStatus >= 0 ? "700" :"400"}}>1. Information</div>
                        &lt; <div style={{fontWeight:checkoutStatus >= 1 ? "700" :"400"}}> 2. Delivery</div>
                        &lt;<div style={{fontWeight:checkoutStatus >= 2 ? "700" :"400"}}>3. Payment method</div>
                    </div>
                    
                    <div>
                        <form onSubmit={handleSubmit} className="checkout-form">
                        {checkoutOrder[checkoutStatus] == "info" && <div>
                            <div >
                                <RadioGroup defaultValue="1" mb={5} colorScheme="red" display={"flex"} gap={10} onChange={(value)=>{
                                    if(value == 2){
                                        const user = JSON.parse(localStorage.getItem("user"));
                                        if(user){
                                            inputRef[0].value = user.name;
                                            inputRef[3].value = user.email;
                                        }
                                        else{
                                            navigate("/login");
                                        }
                                    }
                                }}>
                                   
                                        <Radio value="1" checked>I am a new customer</Radio>
                                        <Radio value="2">I have an account</Radio>
                                
                                </RadioGroup>
                            </div>
                            <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-between"}}>
                                <div style={{width:"45%" ,minWidth:"300px"}}>
                                    <label htmlFor="">First name</label>
                                    <Input  ref={(e)=>{inputRef[0] = e}} border={"1px solid"} required/>
                                </div>
                                <div style={{width:"45%",minWidth:"300px"}}>
                                    <label htmlFor="">Last name</label>
                                    <Input  ref={(e)=>{inputRef[1] = e}} border={"1px solid"} />
                                </div>
                            </div>
                                <div>
                                    <label htmlFor="">Phone number</label>
                                    <Input type="number" ref={(e)=>{inputRef[2] = e}} border={"1px solid"} required/>
                                </div>
                                <div>
                                    <label htmlFor="">Email address</label>
                                    <Input type="email" ref={(e)=>{inputRef[3] = e}} border={"1px solid"} required/>
                                </div>
                                <div>
                                    <label htmlFor="">Your message (optional)</label>
                                    <Input ref={(e)=>{inputRef[4] = e}} border={"1px solid"} />
                                </div>
                        </div> }
                        {checkoutOrder[checkoutStatus]  == "deli" && <div>
                            <div>
                                <label htmlFor="">Current Address</label>
                                <Input ref={(e)=>{inputRef[0] = e}} type="" border={"1px solid"} />
                            </div>
                            <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-between"}}>
                                <div style={{width:"45%", minWidth:"300px"}}>
                                <label htmlFor="">City</label>
                                <Input ref={(e)=>{inputRef[1] = e}} type="" border={"1px solid"} />
                                </div>
                                <div style={{width:"45%",minWidth:"300px"}}>
                                <label htmlFor="">District</label>
                                <Input ref={(e)=>{inputRef[2] = e}} type="" border={"1px solid"} />
                                </div>
                            </div>
                            <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-between"}}>
                                <div style={{width:"45%",minWidth:"300px"}}>
                                <label htmlFor="">State</label>
                                <Input ref={(e)=>{inputRef[3] = e}} type="" border={"1px solid"} />
                                </div>
                                <div style={{width:"45%",minWidth:"300px"}}>
                                <label htmlFor="">Pin code</label>
                                <Input ref={(e)=>{inputRef[4] = e}} type="" border={"1px solid"} />
                                </div>
                            </div>
                        </div> }
                        { checkoutOrder[checkoutStatus]  == "payment" && <div>
                            <RadioGroup  colorScheme="red" display={"flex"} gap={10} ref={(e)=>{inputRef[0] = e}}>
                                <Radio>Online Payment</Radio>
                                <Radio>Payment upon receipt</Radio>
                            </RadioGroup>
                        </div>
                        }
                        {
                        checkoutOrder[checkoutStatus]  == "confirm" &&  <Confirm/>
                        }
                        < Button type="submit" mt={5} w="100%" colorScheme="red">{checkoutStatus < 3 &&  "Continue"}{checkoutStatus == 3 &&  "Confirm"}</Button>
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
                    <div><span>Subtotal</span><span></span>+{Math.round(totalAmount)}$</div>
                    <div><span>Delivery</span><span>{newTotalAmount < 1000 && <span>+30$</span> }{newTotalAmount >= 1000 && <span>Free</span> }</span></div>
                </div>
                <div className="total-cart-value">
                    <div className="item-count">
                        <div className="subtotal-text">Total Amount</div>
                        <div style={{fontSize:"12px"}} >({cart.length} items)</div>
                    </div>
                    <div>
                        <div style={{display:"flex",gap:"10px"}}>
                            <div className="subtotal-text" >{Math.round(newTotalAmount) >= 1000 && Math.round(newTotalAmount)}{Math.round(newTotalAmount) < 1000 && Math.round(newTotalAmount)+30}$</div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                {checkoutStatus == 4 &&  <div className="thank-you">
                <img src={exitImg} alt="" />
                <div className="thankyou-details">
                    <h2>Thank you for your purchase!</h2>
                    <div>Your order number is <b>3357</b></div>
                    <div>You can find details in a confirmation mail or your account</div>
                    <Button colorScheme="red" onClick={()=>{navigate("/")}}>Continue shopping</Button>
                </div>
            </div>}
            </div>
            <Footer/>
        </div>
    )
}