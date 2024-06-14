export function CheckoutCard({id, imgSrc, title, prevAmount, amount, quantity, deleteCartItem,decreaseQuantity,increaseQuantity}){
    return(
        <div  className="cart-card" style={{display:"flex", borderTop:"1px solid", gap:"30px", padding:"20px"}}>
            <img style={{width:"60px", height:"100px", borderRadius:"20px", mixBlendMode:"multiply" }} src={imgSrc}/>
            <div style={{width:"100%", boxSizing:"border-box" ,display:"flex", flexDirection:"column", gap:"30px"}}>
                <div>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div>{title}</div>
                    </div>
                    <div style={{fontSize:"smaller", color:"gray"}}>Product code: {id}</div>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
                    <div style={{display:"flex", gap:"10px"}}>
                        
                        <div>{amount}$</div>
                        <div>x {quantity}</div>
                    </div>
                    <div style={{display:"flex", gap:"20px" ,}}>
                        <div>{Math.round(quantity*amount)}$</div>
                    </div>
                </div>
            </div>
        </div>
    )
}