import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

function ProductDetails({data}) {
  
  // console.log(data,"product")
  return (
    <>
    
    <div className='flex flex-row flex-wrap pb-20 w-auto'>
    
        {
            data?.map((el,id) => 
            <>
              <Link to={`${id}`} key={id} >
                <div className='border-[1px] border-[#b9b9b971] relative'  >
                  <ProductCard key={id} data={el} />
                </div>
              </Link>
              
            </>
                
            )
        }
    </div>
    </>
    
  )
}

export default ProductDetails