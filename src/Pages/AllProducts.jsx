import React, { useEffect } from "react";
import AllCategories from "../components/AllCategories";
import ProductDetails from "../components/ProductDetails";
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../Redux/Products/products.actions";
import { useParams } from "react-router-dom";

function AllProducts() {
  
  const dispatch = useDispatch();

  const {products} = useParams();
  // console.log(products)

  const isLoading = useSelector((store) => {
    return store.productReducer.isLoading;
  })

  const prod = useSelector((store) => {
    return store.productReducer.products;
  })

 
  useEffect(() => {
    // getAllData()
    dispatch(getProducts(products))
    
  }, [products]);

  


  // console.log(prod,"sagar");
  return (
    <div className="flex flex-row w-auto">
      {
        isLoading ? <div>Loading</div>
        :
        <>
        <AllCategories />
        <ProductDetails data={prod} />
        </>
      }
    </div>
  );
}

export default AllProducts;
