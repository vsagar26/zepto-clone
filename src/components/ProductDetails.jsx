import React from 'react'
import ProductCard from './ProductCard'

function ProductDetails({data}) {

  return (
    <div>
        {
            data.map((el,id) => 
                <ProductCard key={id} data={el} />
            )
        }
    </div>
  )
}

export default ProductDetails