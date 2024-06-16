import React, { useEffect, useState } from 'react';
import '../styles/wishlist.css';

export const WishList = () => {
    const [productData, setProductData] = useState([]);


    
    useEffect(() => {
        const data = localStorage.getItem("WishListData");
        if (data) {
            setProductData(JSON.parse(data));
        }
    }, []); 

    const handleRemove = (index) => {
        const updatedProduct = productData.filter((_, ind) => ind !== index);
        setProductData(updatedProduct);
        localStorage.setItem("WishListData", JSON.stringify(updatedProduct));
    };

    return (
        <div className='wishlist-container'>
            <h1 className='wishlist-header'>Your WishList</h1>
            {productData.length > 0 ? (
                productData.map((el, ind) => (
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
                                <button 
                                    onClick={() => handleRemove(ind)} 
                                    className='wishlist-card-button remove-button'
                                >
                                    &#x2715;
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No items in wishlist</p>
            )}
        </div>
    );
};