import React from 'react'
import { Link } from 'react-router-dom'

function AllCategories() {
    
  return (
    <div className='flex flex-col w-[10%] bg-white ml-20'>
        
        <ul>
            <Link to='/allproducts/Fruits' ><li>Fruits</li></Link>
            <Link to='/allproducts/Vegetables' ><li>Vegetables</li></Link>
            <Link to='/allproducts/Baths'><li>Baths</li></Link>
            <Link to='/allproducts/Makeup'><li>Makeup</li></Link>
        </ul>
        
    </div>
  )
}

export default AllCategories