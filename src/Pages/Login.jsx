import React, { useState } from 'react';
import styles from '../styles/Login.module.css'
import {auth} from '../firebase'
import { signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup } from '@firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../Redux/UserAuth/userAuth.actions';
import {FcGoogle} from "react-icons/fc";
import "react-toastify/dist/ReactToastify.css";
	
import { toast } from "react-toastify";

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
                toast.success("Login")
                setLoading(false);
                navigate('/')
            } catch (error) {
                setLoading(false)
                toast.warn("SignIn Failed!",error.message)
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
            
            <input className={styles.Input}
                type="email"
                placeholder="Enter your email"
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            required />

            
            <input className={styles.Input} 
                type="password" 
                placeholder="Enter your password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            required />

            {error && (
                <div className={styles.error}>
                  {"* "}
                  {error}
                </div>
              )}

            <div className={styles.signupBox} >
                <p>New User? <Link to='/signup' >SignUp</Link> </p>
            </div>

            <button type="submit" className={styles.signupbtn}>Sign In</button>

            <div>
                <h1 className='text-[18px] font-semibold mt-2'>Or</h1>
            </div>

            <button onClick={handleGoogle} type="submit" className={styles.signGoogle}>Login with Google 
            <FcGoogle className='text-[21px]'/></button>
        </form>
        }
        
    </div>
  )
}

export default Login