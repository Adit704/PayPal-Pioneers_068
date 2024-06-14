import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Product } from './Product'
import { DashBoard } from './DashBoard'

export const dashRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/pro' element={<Product/>} />
    </Routes>
  )
}
