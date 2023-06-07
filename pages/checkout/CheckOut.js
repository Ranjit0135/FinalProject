import React from 'react'
import styles from "./CheckOut.module.scss"
import { NavLink } from 'react-router-dom'

const CheckOut = () => {
  return (
    <div className={styles.header}>
      
      
      <div className={styles.section}>

      
      <div className={styles.left}>
<h3 style={{padding:"20px"}}>Billing Address</h3>
<form>

  Name:
    <input type='text'></input>


      Address Line 1:
        <input type='text'></input>
      
     
    Address Line 2:
      <input type='text'></input>
    
    City:
      <input type='text'></input>
      
    State
      <input type='text'></input>
      
    Postal Code:
      <input type='text'></input>
    
    Country:<br></br>
       <select style={{ padding:" 0.5rem 0.7rem", width:"110%"}}>
            <option>Choose Country</option>
            <option>Nepal</option>
            <option>India</option>
            <option>Japan</option>
            <option>China</option>
        </select>
        
        <br></br>
    Phone:
      <input type='text'></input>
     
      
      </form>
     
      </div>
     
      <div className={styles.right}>
        <h3 style={{padding:"20px"}}>Payment</h3>
        <form>

 

      Accepted Card<br></br>
      <img style={{width:"50px", height:"40px",padding:"5px"}} src='https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png' alt=''/>
      <img style={{width:"50px", height:"40px", padding:"5px"}} src='https://finkstock.com/wp-content/uploads/2019/12/Business-Debit-VISA-scaled.jpg' alt=''/>
        <img style={{width:"50px", height:"40px", padding:"5px"}} src='https://lesalarie.ma/wp-content/uploads/2021/12/mastercard-logo-wallpapers-3.png' alt=''/>
      <br></br>
     
    Credit Card Number
      <input type='text'></input>
    
  
      
   
    
    Exp Year<br></br>
       <select style={{ padding:" 0.5rem 0.7rem", width:"110%"}}>
            <option>Choose Year</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
            <option>2027</option>
            <option>2028</option>
            <option>2029</option>
            <option>2030</option>
            <option>2031</option>
        </select>
        
        <br></br>
  CVC:
      <input type='text'></input>
     
      <div>
      <NavLink>
      <button>Pay Now</button>
      </NavLink>
        
      </div>
      </form>
      </div>
      </div>
     
      
      
    </div>
  )
}

export default CheckOut
