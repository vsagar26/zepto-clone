import React from 'react';
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute';
import AllProducts from '../Pages/AllProducts';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import SingleProduct from '../Pages/SingleProduct';
import UserAccount from '../Pages/UserAccount';
import Payment from '../Pages/Payment';


function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/allproducts/:products' element={<AllProducts/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/cart' element={
              <PrivateRoute>
                <Cart/>
              </PrivateRoute>
              } />
            <Route path='/allproducts/:products/:id' element={
              <SingleProduct/>
            } />
            <Route path='/account/' element={
              <PrivateRoute>
                <UserAccount/>
              </PrivateRoute>
            } />
            <Route path='/payment' element={<Payment/>} />
        </Routes>
    </>
    
  )
}

export default AllRoutes