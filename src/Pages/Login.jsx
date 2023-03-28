import React, { useState } from 'react';
import styles from '../styles/Login.module.css'
import {auth} from '../firebase'
import { signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup } from '@firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../Redux/UserAuth/userAuth.actions';

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState("");
    const [isLoading,setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const provider = new GoogleAuthProvider();
    
    const validateForm = () => {
        let isValid = true;
        if(!email || !password) 
        {
            setError("Please fill all the credentials!");
            isValid = false;
        } 
        else if(!/\S+@\S+\.\S+/.test(email))
        {
            setError("Invalid Email address!!");
            isValid = false
        } 
        else if(password.length < 7)
        {
            setError("Password must be at least 7 characters!");
            isValid = false
        }
        return isValid;
    }
    
    // const authentication = useContext(AuthContext)


    const signin = async(e) => {
        e.preventDefault();
        
        setError("");
        if(validateForm())
        {
            setLoading(true);
            try {
                let res = await signInWithEmailAndPassword(auth,email,password);
                // console.log(res)
                dispatch(userLogin(res.user));
                localStorage.setItem("userInfoF",JSON.stringify(res.user));
                alert("SignIn Successfully Done!!");
                setLoading(false);
                navigate('/')
            } catch (error) {
                setLoading(false)
                console.log(error.message);
                setError(error);
            }
        }
        
    }

    const handleGoogle = async() => {
        try {
            let res = await signInWithPopup(auth,provider);
            dispatch(userLogin(res.user));
            localStorage.setItem("userInfoF",JSON.stringify(res.user));
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className={styles.container} >
        {
            isLoading ? <div>Loading!!</div>
            :
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

            <div className={styles.signupBox} >
                <p>New User? <Link to='/signup' >SignUp</Link> </p>
            </div>

            <button type="submit" className={styles.signupbtn}>Sign In</button>

            <div>
                <h1>Or</h1>
            </div>

            <button onClick={handleGoogle} type="submit" className={styles.signGoogle}>Login with Google <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" font-size="1.4rem" mx="1rem" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
            c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
            c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
            C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
            c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
            c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg></button>
        </form>
        }
    </div>
  )
}

export default Login