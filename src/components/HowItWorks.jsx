import React from "react";
import { howitworks } from "../constant/data";

const HowItWorks = () => {
  return (
    <div className="mt-16 mb-4 w-[100%] h-auto">
      <div className="flex flex-col justify-center items-center mt-8 mb-4">
        <div>
          <h2 className="text-2xl font-semibold pt-4 pb-6">How it Works</h2>
        </div>
        <div className=" flex flex-wrap md:flex-row justify-center items-center gap-8 box-border">
          {howitworks.map((item, id) => (
            <div
              key={id}
              className=" px-8 py-12 flex flex-col justify-center items-center shadow-xl rounded-xl border-[1px] border-[#c9c8c83c]"
            >
              <img src={item.img} alt="" />
              <h2 className="text-xl font-semibold pt-4">{item.title}</h2>
              <p className="w-[240px] text-center text-sm pt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-[1px] w-[400px] md:w-[1300px] flex justify-center items-center h-auto mt-20 ml-10 md:ml-[120px]"></div>
    </div>
  );
};

export default HowItWorks;
