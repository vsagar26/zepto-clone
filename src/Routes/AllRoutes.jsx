import React from 'react';
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute';
import AllProducts from '../Pages/AllProducts';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';


function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/allproducts' element={<AllProducts/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/cart' element={
              <PrivateRoute>
              <Cart/>
              </PrivateRoute>
              } />
        </Routes>
    </>
    
  )
}

export default AllRoutes