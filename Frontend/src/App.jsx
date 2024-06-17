import { useEffect } from 'react';
// import {Header} from './components/Header.jsx'
// import {HeroCarausal} from './components/HeroCarausal.jsx'
import { useDispatch } from 'react-redux';
import { fetchCategory } from './redux/Actions/fetchProducts.js';
import { Routes, Route } from 'react-router-dom';
import { ProductPage } from './components/ProductPage';
import { HomePageDashBoard } from './components/HomePageDashBoard.jsx';
import { Checkout } from './components/Checkout.jsx';
import { WishList } from './components/WishList.jsx';
// import { ProductCard } from './components/ProductCard.jsx';
import CatlogMain from './components/catlog/CatlogMain.jsx';
import { DashBoard } from './components/dashboard/DashBoard';
import { Product } from './components/dashboard/Product';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import { PrivateRoute } from './components/PrivateRoute.jsx';
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCategory());
    }, [])
  return (
    <>
    
    <Routes>
        <Route path='/' element={<HomePageDashBoard />} />
        <Route path ='/checkout' element={<Checkout/>}/>
        <Route path="/productpage" element={<ProductPage />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path ='/catlog' element={<CatlogMain/>}/>
        <Route path='/dashboard' element={<PrivateRoute><DashBoard /></PrivateRoute>}/>
        <Route path='/products' element={<Product/>} />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        
    </Routes>
    </>
  )
}

export default App
