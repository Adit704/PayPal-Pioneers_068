import { useEffect } from 'react';
import {Header} from './components/Header.jsx'
import {HeroCarausal} from './components/HeroCarausal.jsx'
import { useDispatch } from 'react-redux';
import { fetchCategory } from './redux/Actions/fetchProducts.js';
import { Routes, Route } from 'react-router-dom';
import { ProductPage } from './components/ProductPage';
import { HomePageDashBoard } from './components/HomePageDashBoard.jsx';




import { WishList } from './components/WishList.jsx';
import { ProductCard } from './components/ProductCard.jsx';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCategory());
    },[])
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePageDashBoard />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path='/wishlist' element={<WishList />} />
    </Routes>
    </>
  )
}

export default App
