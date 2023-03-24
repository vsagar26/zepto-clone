import React from 'react'

function ProductCard({data}) {
  return (
    <>
        <div>
            <img src={data.img} alt="img"/>
        </div>
        <div>{data.title}</div>
        <div>{data.price}</div>
        <div>{data.price2}</div>
        <div>{data.weight}</div>
    </>
  )
}

export default ProductCard