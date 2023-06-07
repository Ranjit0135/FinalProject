import React from 'react'
import styles from './auth.module.scss'
import registerImg from "../../assets/register.png"
import Card from '../../components/card/Card'
import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config'
import Loader from '../../components/loader/Loader'


const Register = () => {
  const [ email, setEmail] = useState("")
  const [ password, setPassword] = useState("")
  const [ cpassword, setCPassword] = useState("")
  const [ isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const registerUser = (e)=>{
    e.preventDefault()
    if(password !==cpassword){
toast.error("password do not match");
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    setIsLoading(false)
    toast.success("Registration successful........")
    navigate("/login")
  })
  .catch((error) => {
   
    toast.error(error.message)
    setIsLoading(false)
  });
  }
  return (
    <>
    <ToastContainer />
    {isLoading && <Loader/>}
    <section className={` container ${styles.auth}`}>
    <div className={styles.img}>
    <img src={registerImg} alt='registerImg' style={{width:"600px",padding:"10px"}}/>

    </div>
    <Card>
    <div className={styles.form}>
     <h2>Register</h2>
     <form onSubmit={registerUser}>
       <input type='text' placeholder='Email' value={email} required onChange={(e)=> setEmail(e.target.value)}></input><br></br>
       <input type='password' placeholder='Password' value={password} required onChange={(e)=> setPassword(e.target.value)}></input><br></br>
       <input type='password' placeholder='conform Password' value={cpassword} required onChange={(e)=> setCPassword(e.target.value)}></input><br></br>
       <button type='submit' className='--btn --btn-primary --btn-block'>Register</button>
       
     </form>
     {/* <button className='--btn --btn-danger --btn-block'><FaGoogle color='#fff'/>Login With Google</button> */}
     <span className={styles.register}>
       <p>Already have an account?</p>
       <Link to="/register">Login</Link>
     </span>
    </div>
    </Card>
  </section>
  </>
  )
}

export default Register;
