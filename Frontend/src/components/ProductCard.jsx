import React, { useEffect, useState } from 'react'
import '../styles/productCard.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

export const ProductCard = ({item}) => {
    const [data, setData] = useState(() => {
        const savedData = localStorage.getItem("WishListData");
        return savedData ? JSON.parse(savedData) : [];
    });
    const dispatch = useDispatch();

    const [isClicked, setIsClicked] = useState(false);

    const navigate = useNavigate();

    const {img : image, newPrice : price, title, id,country, rating, color, type} = item;

    const handleAdd = () => {
        const updatedData = [...data, item]
        setData(updatedData);
        setIsClicked(true);
        console.log(item);
    }
    console.log(data);

    useEffect(() => {
        localStorage.setItem("WishListData", JSON.stringify(data));
    }, [data])

    const handleClick = () => {
        localStorage.setItem("currentCard", id);
        navigate('/productpage');
    }

    const handleAddToCart = () =>{
        let obj = JSON.parse(localStorage.getItem("wineCart"));
        obj[id] = 1; 
        localStorage.setItem("wineCart",JSON.stringify(obj));
        dispatch({type:"REFRESH_CART"})
    }


  return (
    <div className='product-card-container'>
        <div className='product-top-section'>
            <div>
                <p className='product-rating'><i className="fa-solid fa-star"></i> {rating}</p>
                <p className='product-code'>Product code : {id}</p>
            </div>
            <div className='product-icon'>
                <span><i className="fas fa-balance-scale legal-icon"></i></span>
                <span onClick={handleAdd}>
                <i className={`fa-regular fa-heart heart-icon ${isClicked ? 'red' : ''}`}></i>
                    </span>
            </div>
        </div>
        <div onClick={handleClick}  className="card-main-section">

        <div className='product-image-container'>
            <img src={image} alt="wine bottle" style= {{mixBlendMode:"multiply"}} className='product-image' />
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
  )
}