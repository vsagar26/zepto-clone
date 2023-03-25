import React, { useContext, useState } from 'react';
import styles from '../styles/Login.module.css'
import {auth} from '../firebase'
import { signInWithEmailAndPassword } from '@firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const authentication = useContext(AuthContext)

    const navigate = useNavigate();


    const signin = (e) => {
        e.preventDefault();
        
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            alert("Login Successfully done!!")
            authentication.loginUser(userCredential.user.accessToken)
            navigate('/')
            // console.log(userCredential.user.accessToken)
        }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <div className={styles.container} >
        <form onSubmit={signin} >
            <h1>Login</h1>
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

            <button type="submit" className={styles.signupbtn}>Sign In</button>
        </form>
    </div>
  )
}

export default Login