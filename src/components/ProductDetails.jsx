import React from 'react'

function ProductDetails({data}) {

  return (
    <div>
        {
            data.map((el) => 
                <div>{el.title}</div>
            )
        }
    </div>
  )
}

export default ProductDetails