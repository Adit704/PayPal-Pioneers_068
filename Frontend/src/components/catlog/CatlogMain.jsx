import  { useState } from 'react'
import Sidebar from './Sidebar';
import Recommended from './Recommended';
import Products from './Product';
import { ProductCard } from '../ProductCard';
import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useSelector } from 'react-redux';


const CatlogMain = () => {
    const productsData = useSelector(state => state.products);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [query, setQuery] = useState('');

 
  
    useEffect(() => {
      setProducts(productsData.data);
    }, [productsData.status]);
  
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
        <div style={{backgroundColor:"#FFF8E9", minWidth:"470px"}}>
        <Header/>
        <div style={{display:"flex"}}>
        <Sidebar handleChange={handleChange} />
        {/* <Navigation query={query} handleInputChange={handleInputChange} /> */}
        <div style={{width:"80%", padding:"30px"}}>
        <Recommended handleClick={handleClick} />
        {productsData.status == "inprogress" && <h3>Loading....</h3> }
        <Products result={result} />
        </div>
        </div>
        <Footer/>
        </div>
        
      </>
    );
}

export default CatlogMain
