import React from 'react'
import '../styles/productCard.css'

export const ProductCard = ({image, price, title}) => {
  return (
    <div className='product-card-container'>
        <div className='product-top-section'>
            <div>
                <p className='product-rating'><i class="fa-solid fa-star"></i>4.7</p>
                <p className='product-code'>Product code : 3547</p>
            </div>
            <div className='product-icon'>
                <span><i class="fas fa-balance-scale legal-icon"></i></span>
                <span><i className="fa-regular fa-heart heart-icon"></i></span>
            </div>
        </div>
        <div className='product-image-container'>
            <img src={image} alt="wine bottle" className='product-image' />
        </div>
        <div className='product-desc-container'>
            <p className='product-desc'>{title}</p>
        </div>
        <div className='product-country'>
            <span className='product-country-span'>🇫🇷 France</span>
            <span className='product-country-span'>Rose</span>
            <span className='product-country-span'>Dry</span>
        </div>
        <div className='product-border'></div>
        <div className='product-price'>
            <span className='product-price-1'>{price}$</span>
            <span className='product-cart-button'><i class="fa-solid fa-plus"></i></span>
        </div>
    </div>
  )
}