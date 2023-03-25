import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from '../styles/SingleProduct.module.css'

function SingleProduct() {

    const {id} = useParams()
    const [data, setData] = useState({});

    const category = localStorage.getItem("category");

    useEffect(() => {
        getData();
    }, []);
    
    const getData = async() => {
        return fetch(`https://zeptojson.onrender.com/${category}/${id}`)
        .then((res) => res.json())
        .then((res) => {     
            setData(res)
        })
        .catch(err =>console.log(err)
        )
    }

    
    console.log(data)
    


  return (
    <div className={styles.main}>
        <div className={styles.box} >
            <div className={styles.leftDiv} >
                <div className={styles.sliderBox} >
                    <img src={data.img} alt='product' />
                </div>
                <div className={styles.about} >
                    <div className={styles.aboutProduct} >
                        <p>About Product</p>
                    </div>
                    <div className={styles.ulStyle} >
                        <ul>
                            <li>Shelf Life : 72 hours</li>
                            <li>Shelf Life : 72 hours</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.rightDiv}>
                <div className={styles.details} >
                    <div className={styles.section} >
                        <p>Home {">"} {category} {">"} {data.title}</p>
                    </div>
                    <div className={styles.title} >
                        <p>{data.title}</p>
                    </div>
                    <div className={styles.weight} >
                        <p>{data.weight}</p>
                    </div>
                    <div className={styles.prices} >
                        <div className={styles.price} >{data.price}</div>
                        <div className={styles.price2} ><s>{data.price2}</s></div>
                        <div className={styles.discount} >{"14% Off"}</div>
                    </div>
                    <div className={styles.addBtn} >
                        <button>Add</button>
                    </div>
                </div>
                <div className={styles.howWorks} ></div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct