import React from 'react'

function AllCategories({array,handleClick}) {
    
  return (
    <div className='flex flex-col w-[10%] bg-white ml-20'>
        <ul>
            {
                array.map((el,id) => 
                
                    <li key={id} onClick={() => handleClick(id)} className="flex justify-center items-center px-10 py-4 hover:bg-[#F7E4FF] cursor-pointer">{el}</li>
                )
            }
        </ul>
    </div>
  )
}

export default AllCategories