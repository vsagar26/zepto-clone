import React from 'react';
import styles from '../styles/Order.module.css'

function Order() {
  return (
    <div className={styles.orderMain} >
        <div>
            <div className={styles.orderTitle} >Garlic you have buyed</div>
            <div className={styles.priceDiv} >
                <div>₹166</div>
                <div className={styles.delivered} >Delivered</div>
            </div>
        </div>
    </div>
  )
}

export default Order