import React from 'react'

function AllCategories({array,handleClick}) {
    
  return (
    <div>
        <ul>
            {
                array.map((el,id) => 
                    <li key={id} onClick={() => handleClick(id)} >{el}</li>
                )
            }
        </ul>
    </div>
  )
}

export default AllCategories