import  { useMemo, useState } from 'react'
import Sidebar from './Sidebar';
import Recommended from './Recommended';
import Products from './Product';
import { ProductCard } from '../ProductCard';
import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useSelector } from 'react-redux';


const CatlogMain = () => {
    const catlogStore = useSelector(state => state.catlog);
    const productsData = useSelector(state => state.products);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(catlogStore.search);
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [selectedColor, setSelectedColor] = useState(catlogStore.color);
    const [query, setQuery] = useState('');

 
    useEffect(()=>{setSelectedCategory(catlogStore.search)},[catlogStore.search])
    useEffect(() => {
      setProducts(productsData.data);
    }, [productsData.status]);
    useEffect(() => {
      setSelectedColor(catlogStore.color);
    }, [catlogStore.color]);
  
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
  
    const handleChange = (event) => {
      console.log(event.target.name);
      if (event.target.name === 'price') {
        setSelectedPriceRange(event.target.value);
      }
      else if(event.target.name === "test1"){
        setSelectedColor(event.target.value);
      }
      else {
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
          ({ category, color, country,type, newPrice, title }) =>
            category.toLowerCase() === selectedCategory.toLowerCase() ||
            color.toLowerCase() === selectedCategory.toLowerCase() ||
            country.toLowerCase().indexOf(selectedCategory.toLowerCase()) !== -1 ||
            type.toLowerCase() === selectedCategory.toLowerCase() ||
            newPrice === selectedCategory ||
            title.toLowerCase().indexOf(selectedCategory.toLowerCase()) !== -1
        );
      }

  
  
      if (selectedPriceRange) {
        filteredProducts = filterByPriceRange(filteredProducts, selectedPriceRange);
      }
      if(selectedColor){
        filteredProducts = filteredProducts.filter(({color})=> color == selectedColor);
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
        {productsData.status == "inprogress" && <h3 style={{fontSize:"20px", textAlign: "center" ,fontWeight:"700", margin:"100px"}}>Loading....</h3> }
        {/* <SortBy/> */}
        <Products result={result} />
        </div>
        </div>
        <Footer/>
        </div>
        
      </>
    );
}

export default CatlogMain
