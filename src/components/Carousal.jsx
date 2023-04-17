import React from 'react'
import { carousalone, carousaltwo, carousalthree, carousalfour, carousalfive, carousalsix, carousalseven } from '../assets';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Carousal = () => {

  const sliderLeft = () =>{
    const slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const sliderRight = () =>{
    const slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <div className='w-[1850px] flex flex-row '>
      <MdChevronLeft onClick={sliderLeft} className="text-[40px] text-black ml-10 cursor-pointer opacity-50 hover:opacity-100 mt-6 md:mt-36"/>
        <div
          id={"slider1"}
          className=" mt-8 flex-row gap-6 cursor-pointer relative flex items-center w-[1350px] h-full whitespace-nowrap scroll-smooth overflow-x-hidden"
        >
            <img src={carousalone} alt="carousalone" className='h-[250px] '/>
            <img src={carousaltwo} alt="carousaltwo" className='h-[250px]'/>
            <img src={carousalthree} alt="carousalthree" className='h-[250px]'/>
            <img src={carousalfour} alt="carousalfour" className='h-[250px]'/>
            <img src={carousalfive} alt="carousalfive" className='h-[250px]'/>
            <img src={carousalsix} alt="carousalsix" className='h-[250px]'/>
            <img src={carousalseven} alt="carousalseven" className='rounded-xl h-[250px]'/>
        </div>
        <MdChevronRight onClick={sliderRight} className="text-[40px] text-black ml-2 cursor-pointer opacity-50 hover:opacity-100 mt-6 md:mt-36"/>
    </div>
  )
}

export default Carousal