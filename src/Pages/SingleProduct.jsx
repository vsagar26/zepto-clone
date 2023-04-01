import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../Redux/Cart/cart.actions';
import styles from '../styles/SingleProduct.module.css';
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
	
import { toast } from "react-toastify";

function SingleProduct() {

    const {id , products} = useParams()
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    const cartItem = useSelector((store) => {
        return store.cartReducer.cart;
    })


    useEffect(() => {
        getData();
    }, []);
    
    const getData = async() => {
        return fetch(`https://zeptojson.onrender.com/${products}/${id}`)
        .then((res) => res.json())
        .then((res) => {  
               
            setData(res)
        })
        .catch(err =>console.log(err)
        )
    }

    const handleAddToCart = () => {
        toast.info("Add to Cart!")
        dispatch(addToCart({...data}))
    }

    
    // console.log(data)
    


  return (
    <div className={styles.main}>
        <div className={styles.box} >
            <div className={styles.leftDiv} >
                <div className={styles.sliderBox} >
                    <img src={data.img} alt='img1' />
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
                        <p>Home {">"} {products} {">"} {data.title}</p>
                    </div>
                    <div className={styles.title} >
                        <p>{data.title}</p>
                    </div>
                    <div className={styles.weight} >
                        <p>{data.weight}</p>
                    </div>
                    <div className={styles.prices} >
                        <div className={styles.price} >₹{data.price}</div>
                        <div className={styles.price2} ><s>₹{data.price2}</s></div>
                        <div className={styles.discount} >{data.discount} Off</div>
                    </div>
                    <div className={styles.addBtn} >
                        <button isDisabled={
                            cartItem.find((item) => item.id == data.id)}
                            onClick={handleAddToCart} >Add</button>
                    </div>
                </div>
                <div className={styles.howWorks} >
                    <p className={styles.howPTag} >How it Works</p>
                    <div>
                        <div className={styles.workBorder} ><img src='https://cdn.zeptonow.com/mweb-prod/images/pdp/place-order.svg' alt='works' /></div>
                        <div>
                            <p className={styles.p1} >Place an order</p>
                            <p className={styles.p2} >Choose from a wide range of daily essentials</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.workBorder} ><img src='https://cdn.zeptonow.com/mweb-prod/images/pdp/do-not-blink.svg' alt='works' /></div>
                        <div>
                            <p className={styles.p1}>Don’t Blink</p>
                            <p className={styles.p2}>Our delivery partner will be at your door</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.workBorder} ><img src='https://cdn.zeptonow.com/mweb-prod/images/pdp/enjoy.svg' alt='works' /></div>
                        <div>
                            <p className={styles.p1}>Enjoy</p>
                            <p className={styles.p2}>Boom! You’ll never have to wait for groceries again</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct