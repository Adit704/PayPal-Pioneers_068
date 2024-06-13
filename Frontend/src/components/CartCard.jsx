export function CartCard({id, imgSrc, title, prevAmount, amount, quantity, deleteCartItem,decreaseQuantity,increaseQuantity}){
    return(
        <div  className="cart-card" style={{display:"flex", borderTop:"1px solid", gap:"30px", padding:"20px"}}>
            <img style={{width:"60px", height:"100px", borderRadius:"20px", border:"1px solid lightgray" }} src={imgSrc}/>
            <div style={{width:"100%", boxSizing:"border-box" ,display:"flex", flexDirection:"column", gap:"30px"}}>
                <div>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div>{title}</div>
                        <div><i onClick={()=>{deleteCartItem(id)}} style={{ color:"gray"}} className="fa-solid hover-effect fa-xmark"></i></div>
                    </div>
                    <div style={{fontSize:"smaller", color:"gray"}}>Product code: {id}</div>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
                    <div style={{display:"flex", gap:"10px"}}>
                        <div style={{fontSize:"smaller", color:"gray", textDecoration:"line-through"}} >{prevAmount}$</div>
                        <div>{amount}$</div>
                    </div>
                    <div style={{display:"flex", gap:"20px" ,}}>
                        <div >
                        <i onClick={()=>{increaseQuantity(id)}} style={{fontSize:"12px", marginRight:"5px"}} className="fa-solid hover-effect fa-plus"></i>
                        {quantity}
                        <i onClick={()=>{decreaseQuantity(id)}} style={{fontSize:"12px", marginLeft:"5px"}} className="fa-solid hover-effect fa-minus"></i>
                        </div>
                        <div>{quantity*amount}$</div>
                    </div>
                </div>
            </div>
        </div>
    )
}