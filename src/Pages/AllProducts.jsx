import React, { useEffect, useState } from "react";
import AllCategories from "../components/AllCategories";
import ProductDetails from "../components/ProductDetails";

function AllProducts() {
  const [data, setData] = useState([]);
  const array = ["Fruits", "Vegetables", "Baths", "Makeup"];

  const getData = async (category) => {
    const response = await fetch(`https://zeptojson.onrender.com/${category}`);
    const products = await response.json();
    setData(products);
  };

  const getAllData = async () => {
    const response = await fetch(`https://zeptojson.onrender.com/Fruits`);
    const products = await response.json();
    const category = "Fruits";
    localStorage.setItem("category", category);
    setData(products);
  };

  const handleClick = (id) => {
    var category = array[id];
    localStorage.setItem("category", category);
    getData(category);
  };

  useEffect(() => {
    getAllData();
  }, []);

  console.log(data);
  return (
    <div className="flex flex-row">
      <AllCategories array={array} handleClick={handleClick} />
        <ProductDetails data={data} />
    </div>
  );
}

export default AllProducts;
