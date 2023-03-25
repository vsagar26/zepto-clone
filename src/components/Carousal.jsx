import React from 'react'
import { carousalone, carousaltwo, carousalthree, carousalfour, carousalfive, carousalsix, carousalseven } from '../assets'

const Carousal = () => {
  return (
    <div className='w-[100%]'>
        <div className='mt-8 flex flex-row h-[260px] gap-6 px-8 ml-28 overflow-x-scroll w-[1280px] cursor-pointer'>
            <img src={carousalone} alt="carousalone" />
            <img src={carousaltwo} alt="carousaltwo" />
            <img src={carousalthree} alt="carousalthree" />
            <img src={carousalfour} alt="carousalfour" />
            <img src={carousalfive} alt="carousalfive" />
            <img src={carousalsix} alt="carousalsix" />
            <img src={carousalseven} alt="carousalseven" className='rounded-xl'/>
        </div>
    </div>
  )
}

export default Carousal