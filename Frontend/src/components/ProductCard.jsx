import React from 'react'
import '../styles/productCard.css'

export const ProductCard = () => {
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
            <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0xNjQtcC5wbmc.png" alt="wine bottle" className='product-image' />
        </div>
        <div className='product-desc-container'>
            <p className='product-desc'>chateau Beauliew cuvee Alexander, 0.75 L</p>
        </div>
        <div className='product-country'>
            <span className='product-country-span'>🇫🇷 France</span>
            <span className='product-country-span'>Rose</span>
            <span className='product-country-span'>Dry</span>
        </div>
        <div className='product-border'></div>
        <div className='product-price'>
            <span className='product-price-1'>710$</span>
            <span className='product-cart-button'><i class="fa-solid fa-plus"></i></span>
        </div>
    </div>
  )
}