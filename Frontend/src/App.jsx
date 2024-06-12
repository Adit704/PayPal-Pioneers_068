import { useEffect } from 'react';
import {Header} from './components/Header.jsx'
import {HeroCarausal} from './components/HeroCarausal.jsx'
import { useDispatch } from 'react-redux';
import { fetchCategory } from './redux/Actions/fetchProducts.js';
import { Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCategory());
    },[])
  return (
    <>
    <Header/>
    <HeroCarausal/>
    <Routes>
    </Routes>

    </>
  )
}

export default App
