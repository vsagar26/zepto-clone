import React, { useEffect, useState } from 'react'
import AllCategories from '../components/AllCategories'
import ProductDetails from '../components/ProductDetails';
import styles from '../styles/styles.module.css';


function AllProducts() {
    const [data,setData] = useState([])
    const array = ["Fruits","Vegetables"];

    const getData = async(category) => {
        const response = await fetch(`http://localhost:3000/${category}`)
        const products = await response.json();
        setData(products)
    }

    const getAllData = async() => {
        const response = await fetch(`http://localhost:3000/Fruits`)
        const products = await response.json();
        setData(products)
    }

    const handleClick = (id) => {
        var category = array[id];
        getData(category)
        
    }

    useEffect(() => {
        getAllData()
    },[])

    

    console.log(data)
  return (
    <div className={styles.main} >
        <AllCategories array={array} handleClick={handleClick} />
        <ProductDetails data={data} />
    </div>
  )
}

export default AllProducts