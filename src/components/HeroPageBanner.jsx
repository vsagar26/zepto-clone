import React from 'react'

const HeroPageBanner = () => {
  return (
    <>
        <div className='hidden lg:flex'>
        <div className="flex flex-row relative ">
          <div className="flex flex-row w-[50vw] h-[80px] bg-gradient-to-l from-[#450072] to-[#82197A]"></div>
          <div className="flex flex-row w-[50vw] h-[80px] bg-gradient-to-l from-[#82197A] to-[#450072]"></div>
        </div>

        <div className="flex flex-row absolute top-[80px] left-[31%] h-[80px]">
          <div className="bg-gradient-to-l from-[#FC4162] to-[#FF6255] rounded-tl-[54%] rounded-bl-[54%]">
          <i><h2 className="text-white text-[12px] font-medium px-8 py-1 ml-4">
              <span className="text-[20px] font-bold ">FREE</span><br/> DELIVERY
              <br />
              Above 149
            </h2></i>
          </div>
          <div className="bg-[#450072] w-[300px]">
            <h2 className="text-white text-[20px] font-semibold py-2 px-4">
              Delivering In
              <br /> 20 Mins
            </h2>
          </div>
          <div className="bg-gradient-to-l from-[#F82F69] to-[#580F79] rounded-tr-[54%] rounded-br-[54%]">
          <i><h2 className="text-white text-[12px] font-medium px-8 py-1 ml-3">
              <span className="text-[20px] font-bold ">FREE</span><br/> DELIVERY
              <br />
              Above 149
            </h2></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroPageBanner