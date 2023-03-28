import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { explorenewcategory } from "../constant/data";

const ExploreNewCategories = () => {
  return (
    <div>
      <div className="flex flex-row justify-around gap-[200px] ml-0 md:gap-[700px] pb-6 sm:ml-0">
        <h2 className="text-md sm:text-xl font-semibold">
          Explore By Categories
        </h2>
        <a
          href="/"
          className="flex flex-row justify-center items-center gap-2 font-semibold text-[#FF3269]"
        >
          See All
          <BsChevronRight />
        </a>
      </div>
      <div className="w-[100%]">
        <div className="overflow-x-scroll ml-28">
          <div className="flex flex-row w-[1600px] gap-4 px-8 ">
            {explorenewcategory.map((item, id) => (
              <div key={id}>
                <img src={item.img} alt="img" className="h-[200px] " />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 mb-6"><img src="https://cdn.zeptonow.com/production///tr:w-981,ar-981-342,pr-true,f-webp,q-80/inventory/banner/ba092e9b-6ee7-4f65-aff0-db7c1bf109ad-Late-Night-Cravings-Sorted_Premium-Promo_(1).jpg" alt="bannerimg"  className="h-[180px] lg:h-[430px] flex pl-2 lg:pl-[150px]"/></div>
    </div>
  );
};

export default ExploreNewCategories;
