import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../Redux/Cart/cart.actions';

function Cart() {

  const dispatch = useDispatch()

  const cartItem = useSelector((store) => {
    return store.cartReducer.cart;
  })

  const handleRemove = (el) => {
    dispatch(removeFromCart(el))
  }
  

  console.log(cartItem,"cart")
  return (
    <div>
      {
        cartItem.map((el) => 
        <>
        <div>{el.title}</div>
          <div>
          <button onClick={() => handleRemove(el)} >Remove</button>
          </div>
        </>
          
          
        )
      }
      
    </div>
  )
}

export default Cart