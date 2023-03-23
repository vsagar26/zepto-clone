import React from 'react';
import { Route, Routes } from 'react-router-dom'
import AllProducts from '../Pages/AllProducts';
import Home from '../Pages/Home';


function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/allproducts' element={<AllProducts/>} />
        </Routes>
    </>
    
  )
}

export default AllRoutes