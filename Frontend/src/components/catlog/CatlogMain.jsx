import  { useState } from 'react'
import Sidebar from './Sidebar';
import Recommended from './Recommended';
import Products from './Product';
import { ProductCard } from '../ProductCard';
import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';


const CatlogMain = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [query, setQuery] = useState('');

 
  
    useEffect(() => {
      fetch('https://paypal-pioneers-068.onrender.com/Products')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
  
    const handleChange = (event) => {
      if (event.target.name === 'price') {
        setSelectedPriceRange(event.target.value);
      } else {
        setSelectedCategory(event.target.value);
      }
    };
  
    const handleClick = (event) => {
      setSelectedCategory(event.target.value);
    };
  
    const filterByPriceRange = (products, range) => {
      if (!range) return products;
  
      const [min, max] = range.split('-').map(Number);
      return products.filter((product) => {
        const price = parseFloat(product.newPrice);
        if (!isNaN(min) && isNaN(max)) return price > min;
        if (!isNaN(min) && !isNaN(max)) return price >= min && price <= max;
        return true;
      });
    };
  
    const filteredItems = products.filter(
      (product) => product.title.toLowerCase().includes(query.toLowerCase())
    );
  
    function filteredData(products, selectedCategory, selectedPriceRange, query) {
      let filteredProducts = products;
  
      if (query) {
        filteredProducts = filteredItems;
      }
  
      if (selectedCategory) {
        filteredProducts = filteredProducts.filter(
          ({ category, color, company, newPrice, title }) =>
            category === selectedCategory ||
            color === selectedCategory ||
            company === selectedCategory ||
            newPrice === selectedCategory ||
            title === selectedCategory
        );
      }

  
  
      if (selectedPriceRange) {
        filteredProducts = filterByPriceRange(filteredProducts, selectedPriceRange);
      }
  
      // console.log(filteredProducts);
      return filteredProducts.map(
        (item) => (
          <ProductCard item= {item}  key={item.id}/>
        )
      );
    }

  
    const result = filteredData(products, selectedCategory, selectedPriceRange, query);
    return (
      <>
        <Header/>
        <Sidebar handleChange={handleChange} />
        {/* <Navigation query={query} handleInputChange={handleInputChange} /> */}
        <Recommended handleClick={handleClick} />
        <Products result={result} />
        <Footer/>
        
      </>
    );
}

export default CatlogMain
