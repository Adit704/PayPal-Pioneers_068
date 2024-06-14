import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import "../styles/wishlist.css"

export const WishList = () => {
    const product_data = useSelector(state => state.wishlist);
    const dispatch = useDispatch();

    const handleRemove = (index) => {
      const updatedProduct = product_data.filter((_, ind) => ind !== index);
      dispatch({type:"REMOVED_ITEM_FROM_WISHLIST", payload: updatedProduct})
    }



  return (
    <div className='wishlist-container'>
        <h1 className='wishlist-header'>Your WishList</h1>
        {product_data.map((el, ind) => (
                <div key={ind} className='wishlist-card'>
                    <img src={el.img} alt={el.title} className='wishlist-card-img' />
                    <div className='wishlist-card-details'>
                        <h2 className='wishlist-card-title'>{el.title}</h2>
                        <div className='wishlist-card-code'>Product code: {el.id}</div>
                        <p className='wishlist-card-description'>{el.description}</p>
                        <div className='wishlist-card-price'>
                            {el.Price}$
                        </div>
                        <div className='wishlist-card-buttons'>
                            <button 
                                className='wishlist-card-button'
                            >
                                Add to Cart
                            </button>
                            <button onClick={() => handleRemove(ind)}  className='wishlist-card-button remove-button'>
                                &#x2715;
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
  )
}
