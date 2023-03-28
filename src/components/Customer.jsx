import React from 'react';
import { BsChatDots , BsPenFill} from "react-icons/bs";
import styles from '../styles/Customer.module.css'

function Customer() {
  return (
    <div className={styles.customerMain} >
        <div className={styles.contactUs} >Contact Us</div>
        <div className={styles.emailDiv} >
            <div><BsPenFill style={{fontSize:"30px"}} /></div>
            <div>
                <p>Email</p>
                <p className={styles.emailName} >support@geddit.in</p>
            </div>
        </div>
        <div className={styles.chatDiv} >
            <div><BsChatDots style={{fontSize:"30px"}}/></div>
            <div>Chat with us</div>
        </div>
    </div>
  )
}

export default Customer