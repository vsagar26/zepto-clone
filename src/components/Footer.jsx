import React from "react";
import { logo } from "../assets";
import { category, socialmedia } from "../constant/data";
import { AiFillApple } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-[100%] pl-8 md:pl-32 pt-4 md:pt-10">
      <div className="">
        <h2 className="text-[18px] md:text-[24px] font-medium ">Categories</h2>
        <div className="mt-4 md:mt-8 mb-6 w-[100%]">
          <ul className="flex flex-col flex-wrap h-[300px] md:h-[200px] w-[200px] md:w-full gap-x-5 md:gap-x-0 text-[12px] md:text-[14px] text-[#575757]">
            {category.map((item, id) => (
              <li key ={id}
                className="my-2 cursor-pointer"
                onClick={() => window.open(item.link)}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <div className="h-[2px] bg-[#97969690] w-[94%] rounded-lg my-8"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-x-32 mb-10 mt-12">
        <div className="">
          <img src={logo} alt="logo" />
          <div className="flex flex-row gap-4 mt-6">
            {socialmedia.map((socialmed, id) => (
              <div
                className="text-[20px] text-slate-600"
                key={id}
                onClick={() => window.open(socialmed.link)}
              >
                {socialmed.icon}
              </div>
            ))}
          </div>
          <p className="mt-5">&#169;KiranaKart Technologies Private Limited</p>
        </div>
        <div className="flex flex-row  gap-12 md:gap-x-32 mb-10 mt-6 md:mt-0">
          <div className="mt-8">
            <ul className="gap-4">
              <li className="mb-2">Home</li>
              <li className="mb-2">Delivery Areas</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Customer Support</li>
              <li className="mb-2">Press</li>
            </ul>
          </div>
          <div className="mt-8">
            <ul>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms of Use</li>
              <li className="mb-2">Responsible Disclosure Policy</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <div>
            <p className="mb-2">Download App</p>
            <div className="flex flex-col gap-4 w-[400px] md:w-full ">
              <button className="mb-2 mt-2 border-2 px-0 md:px-10 py-3 rounded-lg flex flex-row justify-center items-center gap-4" onClick={()=>window.open("https://play.google.com/store/apps/details?id=com.zeptoconsumerapp&pli=1")}>
                <BsGooglePlay className="text-[20px]" />
                Get it on Playstore
              </button>
              <button className="mb-2 border-2 px-4 md:px-10 py-3 rounded-lg flex flex-row justify-center items-center gap-4" onClick={()=>window.open("https://apps.apple.com/in/app/zepto-grocery-delivery/id1575323645")}>
                <AiFillApple className="text-[24px]" />
                Get it on Apple Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
