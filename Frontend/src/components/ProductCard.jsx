import React from 'react'
import '../styles/productCard.css'
import { useDispatch } from 'react-redux';

export const ProductCard = ({image, price, title, id,country, color, type, item}) => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch({type: "DATA_FROM_PRODUCT_CARD", payload : item})
    }

  return (
    <div className='product-card-container'>
        <div className='product-top-section'>
            <div>
                <p className='product-rating'><i class="fa-solid fa-star"></i>4.7</p>
                <p className='product-code'>Product code : 3547</p>
            </div>
            <div className='product-icon'>
                <span><i class="fas fa-balance-scale legal-icon"></i></span>
                <span onClick={handleAdd}><i className="fa-regular fa-heart heart-icon"></i></span>
            </div>
        </div>
        <div onClick={() => {localStorage.setItem("currentCard", id)
            
        }}>

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
        <div className='product-price'>
            <span className='product-price-1'>{price}$</span>
            <span className='product-cart-button'><i class="fa-solid fa-plus"></i></span>
        </div>
    </div>
  )
}