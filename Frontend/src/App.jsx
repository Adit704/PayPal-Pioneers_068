import { useEffect } from 'react';
import {Header} from './components/Header.jsx'
import {HeroCarausal} from './components/HeroCarausal.jsx'
import { useDispatch } from 'react-redux';
import { fetchCategory } from './redux/Actions/fetchProducts.js';
import { Routes, Route } from 'react-router-dom';
import { ProductPage } from './components/ProductPage';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCategory());
    },[])
  return (
    <>
    {/* <Header/>
    <HeroCarausal/>
    <Routes>
        <Route path="/productpage" element={<ProductPage />} />
    </Routes> */}
    <ProductPage />
    </>
  )
}

export default App
