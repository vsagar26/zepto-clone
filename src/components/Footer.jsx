import React from "react";
import { logo } from "../assets";
import { category, socialmedia } from "../constant/data";
import {AiFillApple} from "react-icons/ai"
import {BsGooglePlay} from "react-icons/bs"

const Footer = () => {
  return (
    <div>
      <div className="mt-12 ml-12 md:ml-32">
        <h2 className="text-[18px] md:text-[24px] font-medium ">Categories</h2>
        <div className="mt-4 md:mt-8 mb-6">
          <ul className="flex flex-col flex-wrap h-[300px] md:h-[200px] w-[200px] md:w-full gap-x-5 md:gap-x-0 text-[12px] md:text-[14px] text-[#575757]">
            {category.map((item, id) => (
              <li
                className="my-2 cursor-pointer"
                onClick={() => window.open(item.link)}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <div className="h-[1px] w-[96%] bg-slate-300 mt-6"></div>
        </div>
      </div>
      <div className="flex flex-row gap-x-32 mb-10">
        <div className="mt-4 ml-12 md:ml-32">
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
        <div className="mt-8">
          <div>
            <p className="mb-2">Download App</p>
            <div className="flex flex-col gap-4">
            <button className="mb-2 mt-2 border-2 px-10 py-3 rounded-lg flex flex-row gap-4"><BsGooglePlay className="text-[20px]"/>Get it on Playstore</button>
            <button className="mb-2 border-2 px-10 py-3 rounded-lg flex flex-row gap-4"><AiFillApple className="text-[24px]"/>Get it on Apple Store</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
