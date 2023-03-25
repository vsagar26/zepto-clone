import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

function ProductDetails({data}) {

  return (
    <div className='flex flex-row flex-wrap pb-20'>
        {
            data.map((el,id) => 
            <>
              <Link to={`/singleProduct/${id}`} >
                <div className='border-[1px] border-[#b9b9b971]'  >
                  <ProductCard key={id} data={el} />
                </div>
              </Link>
            </>
                
            )
        }
    </div>
  )
}

export default ProductDetails