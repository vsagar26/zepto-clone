import { createUserWithEmailAndPassword } from '@firebase/auth';
import {auth} from '../firebase'
import React, { useState } from 'react';
import styles from '../styles/SignUp.module.css';
import { useNavigate } from 'react-router-dom';


function SignUp() {
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate()

    const signUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            alert("SignUp Successfully Done!!")
            navigate('/login')
            console.log(userCredential)
        }).catch((error) => {
            alert("Please Check Your internal error!!")
            console.log(error)
        })
    }


  return (
    <div className={styles.container} >
        <form onSubmit={signUp} >
            <h1>Sign Up</h1> 

            <label for="email">Email</label>
            <input className={styles.Input} 
            type="email" 
            placeholder="Enter your email" 
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required />

            <label for="password">Password</label>
            <input className={styles.Input} 
            type="password" 
            placeholder="Enter your password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />


            <button type="submit" className={styles.signupbtn}>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp