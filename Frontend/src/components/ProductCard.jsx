import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToWishlist } from './wishlistFunctions'; 
import '../styles/productCard.css';
import { useToast } from '@chakra-ui/react';

export const ProductCard = ({ item }) => {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useToast();
    const { img: image, newPrice: price, title, id, country, rating, color, type } = item;

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.wishlist && user.wishlist.includes(id)) {
            setIsClicked(true);
        }
    }, [id]);

    const handleAdd = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            toast({title:"Login Required.", description:"Please login before to add item on wishlist", duration:1000, isClosable:true , status:"warning"});

            
            return;
        }
        await addToWishlist(id);
        setIsClicked(true);
        toast({
            title: "Added to wishlist",
            status: 'success',
            duration: 2000,
        });
    };

    const handleRemove = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            alert("Please log in first.");
            return;
        }
        await removeFromWishlist(id);
        setIsClicked(false);
        toast({
            title: "Removed from wishlist",
            status: 'success',
            duration: 2000,
        });
    };

    const handleClick = () => {
        localStorage.setItem("currentCard", id);
        navigate('/productpage');
    };

    const handleAddToCart = () => {
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
        <div className='product-card-container'>
            <div className='product-top-section'>
                <div>
                    <p className='product-rating'><i className="fa-solid fa-star"></i> {rating}</p>
                    <p className='product-code'>Product code : {id}</p>
                </div>
                <div className='product-icon'>
                    <span><i className="fas fa-balance-scale legal-icon"></i></span>
                    <span onClick={isClicked ? handleRemove : handleAdd}>
                        {!isClicked && <i className="fa-regular fa-heart heart-icon" ></i>}
                        {isClicked && <i className="fa-solid fa-heart" style={{ color: "#bf0d12" }}></i>}
                    </span>
                </div>
            <div onClick={handleClick} className="card-main-section">
                <div className='product-image-container'>
                    <img src={image} alt="wine bottle" style={{ mixBlendMode: "multiply" }} className='product-image' />
                </div>
                <div className='product-desc-container'>
                    <p className='product-desc'>{title}</p>
                </div>
                <div className='product-country'>
                    <span className='product-country-span'>{country}</span>
                    <span className='product-country-span'>{color}</span>
                    <span className='product-country-span'>{type}</span>
                </div>
            </div>
            <div className='product-border'></div>
            <div className='product-price-container'>
                <span className='product-price-1'>{price}$</span>
                <span onClick={handleAddToCart} className='product-cart-button'>&#43;</span>
            </div>
        </div>
        </div>
    );
};

