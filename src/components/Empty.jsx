import React from 'react'

function Empty() {
  return (
    <div className='bg-white h-[100vh] flex flex-col items-center'>
      <div className='flex flex-col justify-center items-center pt-28'>
        <img src="https://cdn.zeptonow.com/app/images/empty-bag.png?tr=w-640,q-70" alt="emptycart" className='h-[50px] mb-5' />
        <p>Your cart is empty</p>
        <a href="/"><button className='border-2 border-[#FF3269] text-[#FF3269] mt-3 rounded px-4 py-1'>Browse Products</button></a>
        </div>
      
    </div>
  )
}

export default Empty