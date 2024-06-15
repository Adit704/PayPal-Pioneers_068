import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { ProductCard } from './ProductCard'
import '../styles/productsuggestion.css'
import { useNavigate } from "react-router-dom";



export const ProductSuggstion = () => {
    let productData = useSelector(state => state.products);
    const navigate = useNavigate();
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4;
    const maxItems = 5;




    const handleViewAll = () => {
        navigate('/catlog')
    }

    const handleRight = () => {
        if (startIndex + itemsPerPage < 20) {
            setStartIndex(prev => prev + itemsPerPage);
        }
    };

    const handleLeft = () => {
        if (startIndex > 0) {
            setStartIndex(prev => prev - itemsPerPage);
        }
    };

  return (

        <div className='product-suggestion-container'>
            <div className='product-suggestion-header'>
            <h1>You may Like</h1>
            <h4>
                    <i className="fa-solid fa-left-long" onClick={handleLeft}></i>
                    {Math.ceil((startIndex + 1) / itemsPerPage)}/{maxItems}
                    <i className="fa-solid fa-right-long" onClick={handleRight}></i>
                </h4>
            </div>
            <div className="product-suggestion-on-productpage">
            {productData.data.slice(startIndex, startIndex + itemsPerPage).map((item, index) => (
                    <ProductCard key={index} item={item} />
                ))}
            </div>
            <button className='view-all-button' onClick={handleViewAll}>View All <i className="fa-solid fa-right-long"></i></button>
    </div>
  )
}
