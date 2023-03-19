import React from 'react'
import { logo } from '../assets'
import {BsBag, BsSearch} from "react-icons/bs"
import {BiUser} from "react-icons/bi"

const Navbar = () => {
  return (
    <>
    <div className='bg-[#450072] flex flex-row h-[80px] w-[100vw] items-center justify-around md:justify-evenly'>
        <div className='flex flex-row items-center justify-evenly'>
        <img src={logo} alt="logo" className='h-[24px] md:h-[36px] md:ml-7'/>
        <div className='h-[30px] w-[3px] bg-[#c6c6c6b8] rounded-xl ml-4'></div>
        <h2 className='text-white font-semibold text-[13px] md:text-[16px] lg:text-[20px] ml-4'>Location</h2>
        </div>
        <div>
            <input type="text" className='hidden md:flex md:w-[400px] lg:w-[800px] h-[42px] rounded-lg px-8' placeholder='Search for over 5000+ products'/>
        </div>
        <BsSearch className='hidden sm:flex md:hidden text-white text-[20px]'/>
        <a href="#" className='text-white font-semibold hidden sm:flex'>Login</a>
        <button className='hidden sm:flex bg-[#FF3269] text-white text-[13px] md:text-[16px] font-semibold px-4 md:px-9  rounded-lg lg:flex mr-10 h-[60px] items-center justify-center'>
            <BsBag className='text-[24px] mr-3'/>My Cart
        </button>
        
        <BiUser className='flex sm:hidden text-white text-[20px] font-semibold cursor-pointer'/>
    </div>
    </>
  )
}

export default Navbar