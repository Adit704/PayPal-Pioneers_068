import { useEffect } from 'react';
import {Header} from './components/Header.jsx'
import {HeroCarausal} from './components/HeroCarausal.jsx'
import { useDispatch } from 'react-redux';
import { fetchCategory } from './redux/Actions/fetchProducts.js';
import { Routes } from 'react-router-dom';

// import { DashBoard } from "./components/dashboard/DashBoard"



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

    {/* <DashBoard/> */}
      </>
  )
}

export default App
