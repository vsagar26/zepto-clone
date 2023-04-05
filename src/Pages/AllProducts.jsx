import React, { useEffect, useState } from "react";
import AllCategories from "../components/AllCategories";
import ProductDetails from "../components/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/products.actions";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import Filter from "../components/Filter";
import ProductLoading from "../components/LoadingComponent/ProductLoading";
import CategoryLoading from "../components/LoadingComponent/CategoryLoading";

function AllProducts() {
  const dispatch = useDispatch();

  const { products } = useParams();
  // console.log(products)
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [sort, setSort] = useState(searchParams.get("sort") || "");
  const [totalCount, setTotalCount] = useState(0);

  const isLoading = useSelector((store) => {
    return store.productReducer.isLoading;
  });

  const prod = useSelector((store) => {
    return store.productReducer.products;
  });

  const getDataOnce = async () => {
    let res = await axios.get("https://zeptojson.onrender.com/Fruits");
    let data = res.data;
    setTotalCount(data.length);
  };

  console.log(totalCount);

  let params = {};
  if (sort) params.sort = sort;
  if (page) params.page = page;

  params.limit = 15;
  useEffect(() => {
    getDataOnce();
    setSearchParams(params);
    const getProductParams = {
      params: { _limit: 15, _page: page },
    };
    if (sort) {
      getProductParams.params._sort = "price";
      getProductParams.params._order = sort;
    }
    dispatch(getProducts(products, getProductParams));
  }, [products, sort, page]);

  const handleSort = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
  };

  // console.log(sort,"sagar");
  return (
    <div className="">
      <div className="flex flex-row w-auto">
        {isLoading ? 
          <>
          <CategoryLoading/>
          <div className='flex flex-row flex-wrap pb-20 w-auto mt-[90px]' >
            {[...Array(15).keys()].map((item) => {
              return (
                <ProductLoading/>
              );
            })}
            </div>
          </>
          
         : 
          <div className="flex flex-row ">
            <div>
              <AllCategories />
              <Filter />
            </div>
            <div className="pt-5 flex flex-col justify-center items-center">
              <div className="flex flex-row justify-between w-[100%] pr-[50px]">
                <div className="text-2xl font-semibold pb-[20px] ml-6">
                  {products} ({totalCount})
                </div>
                <div>
                  <select className=" px-4 py-2" onChange={handleSort} value={sort}>
                    <option className="hover:bg-blue-400"  value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                  </select>
                </div>
                
              </div>
              <div>
                <ProductDetails data={prod} />
              </div>
              <div></div>
            </div>
          </div>
        }
      </div>
      <div className="flex justify-center items-center">
        <div>
          {[...Array(Math.ceil(totalCount / 15)).keys()].map((item) => {
            return (
              <button
                key={item + 1}
                onClick={() => {
                  setPage(item + 1);
                }}
                className="bg-white border-2 border-[#F61571] hover:bg-[#F61571] px-3 py-2  hover:text-white rounded-lg ml-1 text-[#F61571]"
              >
                {item + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
