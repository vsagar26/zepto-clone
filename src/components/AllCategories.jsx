import React from "react";
import { Link } from "react-router-dom";

function AllCategories() {
  return (
    <div className="flex flex-col w-[30%] bg-white ml-16">
      <ul className="w-[100%]">
        <Link to="/allproducts/Fruits">
          <li className="pl-3 pr-12 py-2 hover:bg-[#F7E4FF] border-l-4 border-[#Fff] hover:border-l-4 hover:border-[#450072] flex flex-row justify-start items-center gap-3 w-[200px]"><img src="https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-webp,q-80/inventory/subcategory/6a18617b-93ce-429d-af41-f516d56142dc-image_file.png" alt="imgicon" className="h-[50px]"/>Fruits</li>
        </Link>
        <Link to="/allproducts/Vegetables">
          <li className="pl-3 pr-12 py-2 hover:bg-[#F7E4FF] border-l-4 border-[#Fff] hover:border-l-4 hover:border-[#450072] flex flex-row justify-start items-center gap-3 w-[200px]"><img src="https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-webp,q-80/inventory/subcategory/14ce93e3-cfe8-47b1-a76a-0f54cee99389-image_file.png" alt="imgicon" className="h-[50px]"/>Vegetables</li>
        </Link>
        <Link to="/allproducts/Baths">
          <li className="pl-3 pr-12 py-2 hover:bg-[#F7E4FF] border-l-4 border-[#Fff] hover:border-l-4 hover:border-[#450072] flex flex-row justify-start items-center gap-3 w-[200px]"><img src="https://cdn.zeptonow.com/production///tr:w-90,ar-200-200,pr-true,f-webp,q-80/inventory/subcategory/4988bfb8-6dc8-4445-bfb6-ae3cd5fc6f36-Untitled_design_-_2022-08-17T063858.846-removebg-preview.png" alt="imgicon" className="h-[50px]"/>Baths</li>
        </Link>
        <Link to="/allproducts/Makeup">
          <li className="pl-3 pr-12 py-2 hover:bg-[#F7E4FF] border-l-4 border-[#Fff] hover:border-l-4 hover:border-[#450072] flex flex-row justify-start items-center gap-3 w-[200px]"><img src="https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-webp,q-80/inventory/subcategory/229fbf50-33b0-49d3-ab8a-9b4941e932e4-Makeup___More-removebg-preview_(1).png" alt="imgicon" className="h-[50px]"/>Makeup</li>
        </Link>
        <Link to="/allproducts/Grocery">
          <li className="pl-3 pr-12 py-2 hover:bg-[#F7E4FF] border-l-4 border-[#Fff] hover:border-l-4 hover:border-[#450072] flex flex-row justify-start items-center gap-3 w-[200px]"><img src="https://cdn.zeptonow.com/production///tr:w-90,ar-280-224,pr-true,f-webp,q-80/inventory/subcategory/68d13476-6218-4b28-a97a-117da5094c8c-5143add5-a250-48dc-82ce-eb26716a6d65-Cooking_Essentials-removebg-preview-min.png" alt="imgicon" className="h-[50px]"/>Grocery</li>
        </Link>
        <Link to="/allproducts/Drinks">
          <li className="pl-3 pr-12 py-2 hover:bg-[#F7E4FF] border-l-4 border-[#Fff] hover:border-l-4 hover:border-[#450072] flex flex-row justify-start items-center gap-3 w-[200px]"><img src="https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-webp,q-80/inventory/subcategory/04b49ab1-4cec-4a0f-a788-263091a93e8d-image_file.png" alt="imgicon" className="h-[50px]"/>Drinks</li>
        </Link>
      </ul>
    </div>
  );
}

export default AllCategories;
