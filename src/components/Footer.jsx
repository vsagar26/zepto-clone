import React from 'react'
import { category } from '../constant/category'

const Footer = () => {
  return (
    <div>
        <div className='mt-12 ml-32'>
            <h2 className='text-[24px] font-medium '>
                Categories
            </h2>
            <div className='mt-8 mb-6'>
                <ul className='flex flex-col flex-wrap h-[200px] w-full text-[14px] text-[#575757]'>
                    {category.map((item, id)=>(
                        <li className='my-2 cursor-pointer' onClick={()=>window.open(item.link)}>{item.title}</li>
                    ))}
                </ul>
                <div className='h-[1px] w-[96%] bg-slate-300 mt-6'></div>
            </div>
        </div>
    </div>
  )
}

export default Footer