import { useEffect } from 'react';
import {Header} from './components/Header.jsx'
import {HeroCarausal} from './components/HeroCarausal.jsx'
import { useDispatch } from 'react-redux';
import { fetchCategory } from './redux/Actions/fetchProducts.js';
import { Routes, Route } from 'react-router-dom';
import { ProductPage } from './components/ProductPage';
import { HomePageDashBoard } from './components/HomePageDashBoard.jsx';

import { Product } from "./components/dashboard/Product"

// import { DashBoard } from "./components/dashboard/DashBoard"



function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCategory());
    },[])
  return (
    <>
    <HomePageDashBoard/>

    <Routes>
        <Route path="/productpage" element={<ProductPage />} />
    </Routes>


    <DashBoard/>
    
   
    </>
  )
}

export default App
