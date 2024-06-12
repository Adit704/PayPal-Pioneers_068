export function CartCard({imgSrc, title, prevAmount, amount, quantity}){
    return(
        <div className="cart-card">
            <img src={imgSrc}/>
            <div>
                <div>{title}</div>
                <div><div>Product code: {id}</div><div><i class="fa-solid fa-xmark"></i></div></div>
                <div>
                    <div>
                        <div>{prevAmount}</div>
                        <div>{amount}</div>
                    </div>
                    <div>
                        <div>
                        <i class="fa-solid fa-plus"></i>
                        {quantity}
                        <i class="fa-solid fa-minus"></i>
                        </div>
                        <div>{quantity*amount}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}