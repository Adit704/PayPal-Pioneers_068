import React, { useEffect, useState } from 'react'

import '../styles/productpage.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { ProductSuggstion } from './ProductSuggstion';

export const ProductPage = () => {
    const[item, setItem] = useState({});
    const product_id = localStorage.getItem("currentCard");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
       const fetchData = async () => {
        try {
            let res = await fetch(`https://paypal-pioneers-068.onrender.com/Products/${product_id}`);
            let data = await res.json();
            setItem(data);
        } catch (error) {
            console.log(error);
        }
       }
       fetchData();
    },[product_id]);


    const handleAdd = () => {
        dispatch({type:"DATA_FROM_PRODUCT_PAGE", payload : item})
    }

    const handleHomeNavigate = () => {
        navigate("/");
    }

    const handleCatlogNav = () => {
        navigate('/catlog');
    }
    const handleAddToCart = () =>{
        let obj = JSON.parse(localStorage.getItem("wineCart"));
        obj[product_id] = 1; 
        localStorage.setItem("wineCart",JSON.stringify(obj));
        dispatch({type:"REFRESH_CART"})
    }

    console.log(item);

  return (
    <div className='producr-main-page-container'>
        <div className='product-page-navbar'>
            <span onClick={handleHomeNavigate}>Home</span>
            <span onClick={handleCatlogNav}>Catalog</span>
            <span>Red Wine</span>
            <p>{item.title}</p>
        </div>
        <div className='product-page-head'>
            <h1>{item.title}</h1>
        </div>
        <div className='productpage-body-container'>
            <div className='productpage-image'>
                <img src={item.img} style= {{mixBlendMode:"multiply"}} alt="wine image" />
            </div>
            <div className='productpage-right-container'>
                    <div className='product-body-right-top'>
                    <div className='product-body-right-top-content'>
                        <div className='productpage-rating'>
                        <p className='product-rating-icon'>
                        <span><i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                            {item.rating} {item.reviews}  reviews
                        </span>
                        </p>
                        <p className='productpage-product-code'>product code: 15937</p>
                        </div>
                        <div className='productpage-instock'>
                            in stock
                        </div>
                        </div>
                       <div className='productpage-favicon'>
                       <span><i className="fas fa-balance-scale legal-icon"></i></span>
                        <span onClick={handleAdd}><i className="fa-regular fa-heart heart-icon"></i></span>
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
                            <p>Varitel</p>
                            <p>Pinor Noir</p>
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
                            <img src="https://img.freepik.com/premium-vector/highly-detailed-usa-map-with-borders-isolated-background-flat-style_599062-1164.jpg"  alt="" />
                        </div>
                    </div>
                    <div className='productpage-availability'>
                        <div className='productpage-availability-content'>
                            <p>0,75 L</p>
                            <p>3 bottle left</p>
                        </div>
                        <div className='productpage-availability-content'>
                            <p>Case of 6 bottle</p>
                            <p>Not available. I want it</p>
                        </div>
                    </div>
                    {/* middle sec */}
                    <div className='productpage-addtocart-container'>
                        <p>{item.Price}$</p>
                        <p onClick={handleAddToCart}>Add to cart</p>
                        <p onClick={()=>{
                            handleAddToCart();
                            navigate("/checkout")
                        }}>Quick order</p>
                    </div>
                    <div className='productpage-bootom-container'>
                        <span>
                            <p>
                                <i className="fa-solid fa-truck"></i>
                            </p>
                            <p>
                                Free Delivery
                                over 1000$ 
                            </p>
                        </span>
                        <span>
                            <p>
                            <i className="fa-solid fa-coins"></i>
                            </p>
                            <p>
                                180 points
                                on this purshase
                            </p>
                            </span>
                            <span>
                            <p>
                            <i className="fa-solid fa-wine-bottle"></i>
                            </p>
                            <p>
                                more bottle less price
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
        <div>
        </div>
        <ProductSuggstion />
    </div>
  )
}