import { useEffect, useMemo, useState } from "react"
import '../styles/Cart.css'
import { CartCard } from "./CartCard"
import { useSelector } from "react-redux"
import { Button, Switch } from "@chakra-ui/react"
import { ProductCard } from "./ProductCard"
export function Cart({visible, cartToggle}){
    
    const [totalAmount, setTotalAmount] = useState(0)
    const [newTotalAmount, setNewTotalAmount] = useState(0)
    const [toggleRender, setToggleRender ] = useState(false);
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
        let cardDetails = JSON.parse(localStorage.getItem("wineCart"));
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
    },[product.status, toggleRender])

    function deleteCartItem(id){
       
        let cardDetails = JSON.parse(localStorage.getItem("wineCart"));
        let newCardDetails = Object.keys(cardDetails).reduce((acc, key)=>{
            if(key != id){
                acc[key] = cardDetails[key];
            }
            return acc;
            },{})
        localStorage.setItem("wineCart",JSON.stringify(newCardDetails));
        setToggleRender(prev => !prev);
    }

    function decreaseQuantity(id){
        let cardDetails = JSON.parse(localStorage.getItem("wineCart"));
        let newCardDetails = Object.keys(cardDetails).reduce((acc, key)=>{
            if(key == id && cardDetails[key] > 1){
                acc[key] = cardDetails[key]-1;
            }
            else{
                acc[key] = cardDetails[key];
            }
            return acc;
            },{})
        localStorage.setItem("wineCart",JSON.stringify(newCardDetails));
        setToggleRender(prev => !prev);
    }
    function increaseQuantity(id){
        let cardDetails = JSON.parse(localStorage.getItem("wineCart"));
        let newCardDetails = Object.keys(cardDetails).reduce((acc, key)=>{
            if(key == id){
                acc[key] = cardDetails[key]+1;
            }
            else{
                acc[key] = cardDetails[key];
            }
            return acc;
            },{})
        localStorage.setItem("wineCart",JSON.stringify(newCardDetails));
        setToggleRender(prev => !prev);
    }
    return (
    <div className="cart" style={{display:visible}}>
        <div style={{display:"flex", justifyContent:"flex-end", alignItems:"flex-start", width:"100%"}}>
        <h1 className="cart-title">Shopping cart</h1>
        <div ><i onClick={cartToggle} style={{fontSize:"20px", color:"gray"}} className="fa-solid hover-effect fa-xmark"></i></div>
        </div>
        <div className="progressBar">
            {newTotalAmount>=1000 && <p>You're getting free shipping!</p>}
            {newTotalAmount<1000 && <p>Add item worth <b>{Math.round(1000-newTotalAmount)}</b> more to get free shipping!</p>}
            <div  className="progress-bar-section">
            <span>0$</span>
            <progress id="progress-bar" max="1000" value={newTotalAmount}></progress>
            <span>1000$</span>
            </div>
        </div>
        {Math.round(newTotalAmount*.1) > 0 && <div className="points-extra-info">
            Earn <b>{Math.round(newTotalAmount*.1)}</b> points on this purchase!
        </div>}
        {product.status == "inprogress" && <div style={{textAlign:"center", color:"gray", marginTop:"100px"}}>Loading.....</div> }
        <div className="product-cart" >
            {cart && cart.map((elem)=>{
                return <CartCard increaseQuantity = {increaseQuantity} decreaseQuantity={decreaseQuantity} deleteCartItem={deleteCartItem} key={elem.id} id={elem.id} imgSrc={elem.img} title={elem.title} prevAmount={elem.Price} amount={elem.newPrice} quantity={elem.quantity}/>
            })}
            {!cart && <div style={{color:"gray", textAlign:"center", padding:"100px 0"}}>You don't have any thing in you cart!</div> }
        </div>

        <div className="signCart">
            <label>I am 18+</label>
            <div style={{display:"flex", gap:"20px", marginTop:"10px"}} >
                <Switch colorScheme="red"/>
                <div style={{color:"gray", fontSize:"14px"}}>An adult signature (18+) is required for delivery</div>
            </div>
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
            
        <Button colorScheme="red" className="checkout-button" >Checkout</Button>
        {product.status == "success" && <div>
            <div className="mayLike-text">You may like</div>
            <div className="recommend-cards">
                <ProductCard  image={product.data[0].img} price={product.data[0].Price} title={product.data[0].title} id={product.data[0].id}/>
                <ProductCard  image={product.data[1].img} price={product.data[1].Price} title={product.data[1].title} id={product.data[1].id}/>
                <ProductCard  image={product.data[2].img} price={product.data[2].Price} title={product.data[2].title} id={product.data[2].id}/>
                <ProductCard  image={product.data[3].img} price={product.data[3].Price} title={product.data[3].title} id={product.data[3].id}/>
            </div>

        </div>}
            
    </div>
    )
}