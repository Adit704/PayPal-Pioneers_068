import React, { useEffect, useState } from 'react';
import { removeFromWishlist } from './wishlistFunctions'; 
import '../styles/wishlist.css';
import { useDispatch } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import { Header } from './Header';
import { Footer } from './Footer';

export const WishList = () => {
    const [productData, setProductData] = useState([]);
    const dispatch = useDispatch();
    const toast = useToast();
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

    const handleAddToCart = (id) => {
        let obj = JSON.parse(localStorage.getItem("wineCart")) || {};
        obj[id] = 1;
        localStorage.setItem("wineCart", JSON.stringify(obj));
        dispatch({ type: "REFRESH_CART" });
        toast({
            title: "Product added to cart",
            status: 'success',
            duration: 2000,
        });
    };
    return (
        <div className='wishlist-container'>
            <Header/>
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
                                <button onClick={()=>{handleAddToCart(el.id)}} className='wishlist-card-button'>
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
            {/* <Footer/> */}
        </div>
    );
};