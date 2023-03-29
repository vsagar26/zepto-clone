import React, { useEffect, useState } from "react";
import AllCategories from "../components/AllCategories";
import ProductDetails from "../components/ProductDetails";
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../Redux/Products/products.actions";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import Filter from "../components/Filter";

function AllProducts() {
  
  const dispatch = useDispatch();

  const {products} = useParams();
  // console.log(products)
  const [searchParams,setSearchParams] = useSearchParams();

  const [page,setPage] = useState(searchParams.get("page") || 1)
  const [sort,setSort] = useState(searchParams.get("sort") || "") 
  const [totalCount,setTotalCount] = useState(0);
  
  
  const isLoading = useSelector((store) => {
    return store.productReducer.isLoading;
  })

  const prod = useSelector((store) => {
    return store.productReducer.products;
  })
  
  
  const getDataOnce = async() => {
    let res = await axios.get("https://zeptojson.onrender.com/Fruits")
    let data = res.data;
    setTotalCount(data.length)
  }
  

  console.log(totalCount)
  

  let params = {};
  if(sort) params.sort = sort;
  if(page) params.page = page;
  
  params.limit = 15;
  useEffect(() => {
    getDataOnce()
    setSearchParams(params)
    const getProductParams = {
      params: { _limit: 15, _page:page}
    }
    if(sort) {
      getProductParams.params._sort = "price";
      getProductParams.params._order = sort;
    }
    dispatch(getProducts(products,getProductParams))
    
  }, [products,sort,page]);

  
  const handleSort = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
  }


  // console.log(sort,"sagar");
  return (
    <>
    <div>
      <select onChange={handleSort} value={sort}>
        <option value="asc" >Price: Low to High</option>
        <option value="desc" >Price: High to Low</option>
      </select>
    </div>
    <div className="flex flex-row w-auto">
      {
        isLoading ? <div>Loading</div>
        :
        <>
        <div>
          <AllCategories />
          <Filter />
        </div>
        <div>{products} ({totalCount})</div>
        <ProductDetails data={prod} />
        </>
      }
    </div>
    <div>
      <div>
        {
          [...Array(Math.ceil(totalCount / 15)).keys()].map((item) => {
            return (
              <button key={item+1} onClick={() => {
                setPage(item + 1);
              }}>
              {item + 1}
              </button>
            )
          })
        }
      </div>
    </div>
    </>
    
  );
}

export default AllProducts;
