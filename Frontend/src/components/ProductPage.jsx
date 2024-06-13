import React, { useEffect } from 'react'
import '../styles/productpage.css'
import {useSelector} from "react-redux"

export const ProductPage = () => {
    const product_id = localStorage.getItem("currentCard");

    


  return (
    <div className='producr-main-page-container'>
        <div className='product-page-navbar'>
            <span>Home</span>
            <span>Catalog</span>
            <span>Red Wine</span>
            <p>Flower Sonoma Cost pinot Noir,0.75L</p>
        </div>
        <div className='product-page-head'>
            <h1>Flower Sonoma Cost pinot Noir,0.75L</h1>
        </div>
        <div className='productpage-body-container'>
            <div className='productpage-image'>
                <img src="https://i.pinimg.com/736x/ed/6a/34/ed6a34eb72cf17ae770668446345114b.jpg" alt="wine image" />
            </div>
            <div className='productpage-right-container'>
                    <div className='product-body-right-top'>
                    <div className='product-body-right-top-content'>
                        <div className='productpage-rating'>
                        <p className='product-rating-icon'>
                        <span><i class="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                            4,8 8 reviews
                        </span>
                        </p>
                        <p className='productpage-product-code'>product code: 15937</p>
                        </div>
                        <div className='productpage-instock'>
                            in stock
                        </div>
                        </div>
                       <div className='productpage-favicon'>
                       <span><i class="fas fa-balance-scale legal-icon"></i></span>
                        <span><i className="fa-regular fa-heart heart-icon"></i></span>
                       </div>
                    </div>
                    {/* right top */}
                    <div className='product-page-category'>
                        <div>
                            <p>Color:</p>
                            <p>Red</p>
                        </div>
                        <div>
                           <p>Type:</p> 
                            <p>Dry</p>
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
                            <p>United States</p>
                        </div>
                    </div>
                    <div className='productpage-desc-map'>
                        <div>
                            <p className='productpage-desc'>A beautiful Mix of red and blue fruits on the nose unfolds with distinctive layers of violets, spice notes, and the fresh, haunting quality of an  evergreen   forest</p>
                        </div> 
                        <div>
                            <img src="https://img.freepik.com/premium-vector/highly-detailed-usa-map-with-borders-isolated-background-flat-style_599062-1164.jpg" alt="" />
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
                        <p>1800$</p>
                        <p>Add to cart</p>
                        <p>Quick order</p>
                    </div>
                    <div className='productpage-bootom-container'>
                        <span>
                            <p>
                                <i class="fa-solid fa-truck"></i>
                            </p>
                            <p>
                                Free Delivery
                                over 1000$ 
                            </p>
                        </span>
                        <span>
                            <p>
                            <i class="fa-solid fa-coins"></i>
                            </p>
                            <p>
                                180 points
                                on this purshase
                            </p>
                            </span>
                            <span>
                            <p>
                            <i class="fa-solid fa-wine-bottle"></i>
                            </p>
                            <p>
                                more bottle less price
                            </p>
                            </span>
                            <span>
                            <p>
                            <i class="fa-solid fa-right-long"></i>
                            </p>
                            <p>
                                Sending on the same day
                            </p>
                        </span>
                    </div>
            </div>
        </div>
    </div>
  )
}