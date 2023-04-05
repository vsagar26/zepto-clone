import React from 'react';
import styles from '../styles/UserAccount.module.css';
import { BsFillBagCheckFill , BsFillChatTextFill , BsFillGeoAltFill , BsFillPersonFill} from "react-icons/bs";
import Order from '../components/Order';
import Profile from '../components/Profile';
import Customer from '../components/Customer';
import Addresses from '../components/Addresses';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../Redux/UserAuth/userAuth.actions';
import { addToCart } from '../Redux/Cart/cart.actions';
const arr = JSON.parse(localStorage.getItem("orderItem")) || [];

function UserAccount() {

console.log(
    arr
)

    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.setItem("userInfoF",null);
        dispatch(userLogout());
        dispatch(addToCart([]));
        localStorage.removeItem("address");
        localStorage.removeItem("orderItem");
        window.location.reload()
      }

    const userData = useSelector((store) => {
        return store.userAuthReducer.user
    })

    console.log(userData,"uer")

    function openList(listName) {
        // console.log(listName)
        var i;
        var x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        document.getElementById(listName).style.display = "block";  
    }
  return (
    <div className={styles.userMain} >
        <div>
            <div className={styles.accountDiv} >
                <div className={styles.accountLeft} >
                    <div>
                        <div className={styles.first} >
                            <div className={styles.myAccount}><p>My Account</p></div>
                            <div className={styles.emailText}><p>{userData.email}</p></div>
                        </div>
                        <div className={styles.second} >
                            <ul>
                                <li onClick={() => openList("Order")}><BsFillBagCheckFill/>Orders</li>
                                <li onClick={() => openList("Customer")}><BsFillChatTextFill/>Customer Support</li>
                                <li onClick={() => openList("Address")}><BsFillGeoAltFill/>Addresses</li>
                                <li onClick={() => openList("Profile")}><BsFillPersonFill/>Profile</li>
                            </ul>
                        </div>
                        <div className={styles.third} >
                            <button onClick={handleLogout} >Log Out</button>
                        </div>
                    </div>
                </div>
                <div className={styles.accountRight} >
                    <div id="Order" class="w3-container city">
                        <Order/>
                    </div>
                
                    <div id="Customer" class="w3-container city" style={{display:"none"}}>
                        <Customer/>
                    </div>
                
                    <div id="Address" class="w3-container city" style={{display:"none"}}>
                        <Addresses/>
                    </div>

                    <div id="Profile" class="w3-container city" style={{display:"none"}}>
                        <Profile/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserAccount