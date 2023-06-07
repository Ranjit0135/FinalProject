import React, { useState } from 'react'
import styles from './auth.module.scss'
import loginImg from "../../assets/login.png"
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import Card from '../../components/card/Card'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

const Login = () => {
  const [email, setEmail]= useState("");
  const [password, setPassword]=useState("");
  const [ isLoading, setIsLoading] = useState(false)
const navigate= useNavigate()
  const loginUser=(e)=>{
    e.preventDefault();
    setIsLoading(true)
    
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  
    const user = userCredential.user;
    console.log(user)
    setIsLoading(false)
    toast.success("login successful")
    navigate("/checkout")
  })
  .catch((error) => {
    setIsLoading(false)
   toast.error(error.message)
  });
  };
// login with google auth
const provider = new GoogleAuthProvider();
  const signInWithGoogle =()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
     const user = result.user;
    toast.success("Login Successful") 
     navigate("/checkout")
    
    }).catch((error) => {
      toast.error(error.message)
     
    });
  }
  return (
    <>
    {isLoading && <Loader/>}
   <section className={` container ${styles.auth}`}>
     <div className={styles.img}>
     <img src={loginImg} alt='Login' style={{width:"600px",padding:"10px"}}/>

     </div>
     <Card>
     <div className={styles.form}>
      <h2 >Login</h2>
      <form onSubmit={loginUser}>
        <input type='text' placeholder='Email' value={email} required onChange={(e)=> setEmail(e.target.value)}></input><br></br>
        <input type='password' placeholder='Password' value={password} required onChange={(e)=> setPassword(e.target.value)}></input><br></br>
        <button className="btn" >Login</button>
        <div className={styles.links}>
            <Link to="/reset"> Reset Password</Link>
        </div>
        <p>--or--</p>
      </form>
      <button type='submit' className='btn ' onClick={signInWithGoogle}><FaGoogle color='#fff'/>Login With Google</button>
      <span className={styles.register}>
        <p>Don't have an account?</p>
        <Link to="/register">Register</Link>
      </span>
     </div>
     </Card>
   </section>
   </>
  )
}

export default Login;
