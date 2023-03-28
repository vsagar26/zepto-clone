import React from "react";
import { BsChevronRight } from "react-icons/bs";
import {
  ebgrocery,
  ebcfruitsandvege,
  ebcpackagedfood,
  ebcfrozenfood,
  ebcmasala,
  ebcsweet,
  ebcpaan,
  ebcbath,
  ebcbiscuits,
  ebcbreakfast,
  ebccleaning,
  ebccolddrink,
  ebcdairy,
  ebcelectricals,
  ebchealth,
  ebchomegrown,
  ebchomeneeds,
  ebchygiene,
  ebcmakeup,
  ebcmeat,
  ebcmuni,
  ebctea,
} from "../assets";

const ExploreByCategories = () => {
  return (
    <div>
      <div className="mt-12 w-[100%] mb-8">
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
        <div className="flex-wrap md:flex flex-row gap-x-4 box-border justify-center items-center ml-10 md:ml-0">
          <div className="flex flex-row gap-x-4">
            <a href="">
              <img
                src={ebcfruitsandvege}
                alt="img"
                className="h-[140px] md:h-[200px]"
              />
            </a>
            <a href="">
              <img
                src={ebgrocery}
                alt="img"
                className="h-[140px] md:h-[200px]"
              />
            </a>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-4 pt-4 xl:pt-0">
            <a href="">
              <img
                src={ebcmasala}
                alt="img"
                className="h-[122px] md:h-[185px]"
              />
            </a>
            <a href="">
              <img
                src={ebcsweet}
                alt="img"
                className="h-[122px] md:h-[185px]"
              />
            </a>
            <a href="">
              <img
                src={ebcfrozenfood}
                alt="img"
                className="h-[122px] md:h-[185px]"
              />
            </a>
            <a href="">
              <img
                src={ebcpackagedfood}
                alt="img"
                className="h-[122px] md:h-[185px]"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap md:flex flex-row gap-x-4 box-border mt-5 ml-10 md:ml-36 gap-y-4">
          <a href="">
            <img src={ebcdairy} alt="img" className="h-[122px] md:h-[185px]" />
          </a>
          <a href="">
            <img
              src={ebccolddrink}
              alt="img"
              className="h-[122px] md:h-[185px]"
            />
          </a>
          <a href="">
            <img src={ebcmuni} alt="img" className="h-[122px] md:h-[185px]" />
          </a>
          <a href="">
            <img src={ebcmeat} alt="img" className="h-[122px] md:h-[185px]" />
          </a>
          <a href="">
            <img
              src={ebcbreakfast}
              alt="img"
              className="h-[122px] md:h-[185px]"
            />
          </a>
          <a href="">
            <img src={ebctea} alt="img" className="h-[122px] md:h-[185px]" />
          </a>
          <a href="">
            <img
              src={ebcbiscuits}
              alt="img"
              className="h-[122px] md:h-[185px]"
            />
          </a>
          <a href="">
            <img src={ebcmakeup} alt="img" className="h-[122px] md:h-[185px]" />
          </a>
          <a href="">
            <img src={ebcbath} alt="img" className="h-[122px] md:h-[185px]" />
          </a>
          <a href="">
            <img
              src={ebccleaning}
              alt="img"
              className="h-[122px] md:h-[185px]"
            />
          </a>
          <a href="">
            <img
              src={ebchomeneeds}
              alt="img"
              className="h-[122px] md:h-[185px]"
            />
          </a>
          <a href="">
            <img
              src={ebcelectricals}
              alt="img"
              className="h-[122px] md:h-[185px]"
            />
          </a>
          <a href="">
            <img
              src={ebchygiene}
              alt="img"
              className="h-[122px] md:h-[185px]"
            />
          </a>
          <a href="">
            <img src={ebchealth} alt="img" className="h-[122px] md:h-[185px]" />
          </a>
          <a href="">
            <img
              src={ebchomegrown}
              alt="img"
              className="h-[122px] md:h-[185px]"
            />
          </a>
          <a href="">
            <img src={ebcpaan} alt="img" className="h-[122px] md:h-[185px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExploreByCategories;