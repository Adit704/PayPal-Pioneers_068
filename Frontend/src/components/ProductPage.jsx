import React, { useEffect, useState } from 'react'

import '../styles/productpage.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { ProductSuggstion } from './ProductSuggstion';
import { ProductReview } from './ProductReview';
import { Header } from './Header';
import { Footer } from './Footer';
import { useToast } from '@chakra-ui/react';
import { addToWishlist } from './wishlistFunctions';

export const ProductPage = () => {
    const[item, setItem] = useState({});
    const [isClicked, setIsClicked] = useState(false);
    const [loading, isLoading] = useState(false);
    const product_id = localStorage.getItem("currentCard");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useToast();
    useEffect(() => {
       const fetchData = async () => {
        isLoading(true);
        try {
            let res = await fetch(`https://paypal-pioneers-068.onrender.com/Products/${product_id}`);
            let data = await res.json();
            isLoading(false);
            setItem(data);
        } catch (error) {
            console.log(error);
        }
       }
       fetchData();
    },[product_id]);

    const handleAdd = async (id) => {
        // dispatch({type:"DATA_FROM_PRODUCT_PAGE", payload : item})
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

    const handleHomeNavigate = () => {
        navigate("/");
    }

    const handleCatlogNav = () => {
        navigate('/catlog');
    }
    const handleAddToCart = () =>{
        let obj = JSON.parse(localStorage.getItem("wineCart")) || {};
        obj[product_id] = 1; 
        localStorage.setItem("wineCart",JSON.stringify(obj));
        dispatch({type:"REFRESH_CART"})
        toast({
            title:"Product added to cart",
            status: 'success',
            duration: 2000,
        })
    }

    console.log(item);

    return (
        <div className='product-main-page-container'>
            {loading ? (
                <h1 className='page-loading-head'>Loading...</h1>
            ) : (
                <>
                    <Header/>
                    {/* <div className='product-page-navbar'>
                        <span onClick={handleHomeNavigate}>Home</span>
                        <span onClick={handleCatlogNav}>Catalog</span>
                        <span>Red Wine</span>
                        <p>{item.title}</p>
                    </div> */}
                    <div className='product-page-head'>
                        <h1>{item.title}</h1>
                    </div>
                    <div className='productpage-body-container'>
                        <div className='productpage-image'>
                            <img src={item.img} style={{ mixBlendMode: "multiply" }} alt="wine image" />
                        </div>
                        <div className='productpage-right-container'>
                            <div className='product-body-right-top'>
                                <div className='product-body-right-top-content'>
                                    <div className='productpage-rating'>
                                        <p className='product-rating-icon'>
                                            <span>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                {item.rating} {item.reviews} reviews
                                            </span>
                                        </p>
                                        <p className='productpage-product-code'>product code: 15937</p>
                                    </div>
                                    <div className='productpage-instock'>
                                        In stock
                                    </div>
                                </div>
                                <div className='productpage-favicon'>
                                    <span><i className="fas fa-balance-scale legal-icon"></i></span>
                                    <span onClick={()=>{handleAdd(item.id)}}>{!isClicked && <i className="fa-regular fa-heart heart-icon" ></i>}
                                    {isClicked && <i className="fa-solid fa-heart" style={{ color: "#bf0d12" }}></i>}</span>
                                </div>
                            </div>
                            {/* right top */}
                            <div className='product-page-category'>
                                <div>
                                    <p>Color:</p>
                                    <p>{item.color}</p>
                                </div>
                                <div>
                                    <p>Type:</p>
                                    <p>{item.type}</p>
                                </div>
                                <div>
                                    <p>Varietal</p>
                                    <p>Pinot Noir</p>
                                </div>
                                <div>
                                    <p>Alcohol</p>
                                    <p>13.5%</p>
                                </div>
                                <div>
                                    <p>Country:</p>
                                    <p>{item.country}</p>
                                </div>
                            </div>
                            <div className='productpage-desc-map'>
                                <div>
                                    <p className='productpage-desc'>{item.description}</p>
                                </div>
                                <div>
                                    <img src="https://img.freepik.com/premium-vector/highly-detailed-usa-map-with-borders-isolated-background-flat-style_599062-1164.jpg" alt="" />
                                </div>
                            </div>
                            <div className='productpage-availability'>
                                <div className='productpage-availability-content'>
                                    <p>0.75 L</p>
                                    <p>3 bottles left</p>
                                </div>
                                <div className='productpage-availability-content'>
                                    <p>Case of 6 bottles</p>
                                    <p>Not available. I want it</p>
                                </div>
                            </div>
                            <div className='productpage-addtocart-container'>
                                <p>{item.newPrice}$</p>
                                <p onClick={handleAddToCart}>Add to cart</p>
                                <p onClick={()=>{
                            handleAddToCart();
                            navigate("/checkout")
                        }}>Quick order</p>
                            </div>
                            <div className='productpage-bottom-container'>
                                <span>
                                    <p>
                                        <i className="fa-solid fa-truck"></i>
                                    </p>
                                    <p>
                                        Free Delivery over 1000$
                                    </p>
                                </span>
                                <span>
                                    <p>
                                        <i className="fa-solid fa-coins"></i>
                                    </p>
                                    <p>
                                        180 points on this purchase
                                    </p>
                                </span>
                                <span>
                                    <p>
                                        <i className="fa-solid fa-wine-bottle"></i>
                                    </p>
                                    <p>
                                        More bottles less price
                                    </p>
                                </span>
                                <span>
                                    <p>
                                        <i className="fa-solid fa-right-long"></i>
                                    </p>
                                    <p>
                                        Sending on the same day
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <ProductReview />
                    <ProductSuggstion />
                    <Footer/>
                </>
            )}
        </div>
    );
}