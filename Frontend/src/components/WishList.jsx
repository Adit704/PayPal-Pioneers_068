import React, { useEffect, useState } from 'react';
import { removeFromWishlist } from './wishlistFunctions'; 
import '../styles/wishlist.css';

export const WishList = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchWishlist = async () => {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user && user.wishlist.length > 0) {
                const response = await fetch(`https://paypal-pioneers-068.onrender.com/Products`);
                const products = await response.json();
                const wishlistProducts = products.filter(product => user.wishlist.includes(product.id));
                setProductData(wishlistProducts);
            }
        };
        fetchWishlist();
    }, []);

    const handleRemove = async (id) => {
        await removeFromWishlist(id);
        setProductData(prev => prev.filter(product => product.id !== id));
    };

    return (
        <div className='wishlist-container'>
            <h1 className='wishlist-header'>Your WishList</h1>
            {productData.length > 0 ? (
                productData.map((el) => (
                    <div key={el.id} className='wishlist-card'>
                        <img src={el.img} alt={el.title} className='wishlist-card-img' />
                        <div className='wishlist-card-details'>
                            <h2 className='wishlist-card-title'>{el.title}</h2>
                            <div className='wishlist-card-code'>Product code: {el.id}</div>
                            <p className='wishlist-card-description'>{el.description}</p>
                            <div className='wishlist-card-price'>
                                {el.newPrice}$
                            </div>
                            <div className='wishlist-card-buttons'>
                                <button className='wishlist-card-button'>
                                    Add to Cart
                                </button>
                                <button
                                    onClick={() => handleRemove(el.id)}
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