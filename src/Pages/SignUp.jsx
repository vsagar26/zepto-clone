import { createUserWithEmailAndPassword , GoogleAuthProvider,signInWithPopup } from '@firebase/auth';
import {auth} from '../firebase'
import React, { useState } from 'react';
import styles from '../styles/SignUp.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../Redux/UserAuth/userAuth.actions'
import {FcGoogle} from "react-icons/fc";
import "react-toastify/dist/ReactToastify.css";
	
import { toast } from "react-toastify";


function SignUp() {
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isLoading,setLoading] = useState(false);
    const [error,setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const provider = new GoogleAuthProvider()

    const signUp = async(e) => {
        e.preventDefault()
        setError("");

        if(!email || !password)
        {
            setError("All fields are required!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) 
        {
            setError("Invalid email address!");
            return;
        }

        if(password.length < 7) 
        {
            setError("Password must be atleast 7 characters long!");
            return;
        }

        setLoading(true);
        try {
            const res = await createUserWithEmailAndPassword(auth,email,password);
            console.log(res)
            dispatch(userLogin(res.user));
            localStorage.setItem("userInfoF",JSON.stringify(res.user));
            toast.success("Signup Successfully Done!")
            setLoading(false);
            navigate('/login');
        } catch (error) {
            setLoading(false);
            toast.warn("Signup Failed!",error.message)
            console.log(error);
            setError(error)
        }
    }

   

    const handleGoogle = async() => {
        try {
            let res = await signInWithPopup(auth,provider);
            dispatch(userLogin(res.user));
            localStorage.setItem("userInfoF",JSON.stringify(res.user));
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    

  return (
    <div className={styles.container} >
        {
            isLoading ? <div>Loading!!</div>
            :
            <form onSubmit={signUp} >
            <h1>Sign Up</h1> 

            
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
                <p>Already a User? <Link to='/login' >Login</Link> </p>
            </div>


            <button type="submit" className={styles.signupbtn}>Sign Up</button>

            <div>
                <h1 className='text-[18px] font-semibold mt-2'>Or</h1>
            </div>

            <button onClick={handleGoogle} type="submit" className={styles.signGoogle}>Sign Up with Google <FcGoogle className='text-[21px]'/>
            </button>
        </form>
        }
        
    </div>
  )
}

export default SignUp