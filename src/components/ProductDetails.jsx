import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

function ProductDetails({data}) {

  return (
    <div>
        {
            data.map((el,id) => 
            <>
              <Link to={`/singleProduct/${id}`} >
                <div style={{border:"1px solid black"}} >
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