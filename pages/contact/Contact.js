import React from 'react'
import styles from "./Contact.module.scss"
import { AiTwotonePhone,AiTwotoneMail,AiFillFacebook } from "react-icons/ai";
import {HiLocationMarker} from "react-icons/hi"
 const Contact = () => {
  return (
    <div className={styles.header}>
      <div className={styles.section}>
        <div className={styles.left}>
          <h2 style={{padding:"20px" , color:"blue"}}>Contact Us</h2>
          <form>
            <h4>Name</h4>
            <input style={{ border:"1px solid",borderRadius:"10px"}} type='text' ></input>
            <h4>Email</h4>
            <input style={{ border:"1px solid",borderRadius:"10px"}} type='text'></input>
            <h4>Subject</h4>
            <input style={{ border:"1px solid",borderRadius:"10px"}} type='text'></input>
            <h4>Your Message</h4>
            <input type='Box' style={{width:"300px", height:"100px", border:"1px solid",borderRadius:"10px"}}></input>
            <div>
              <button>Send Message</button>
            </div>
          </form>
        </div>
        <div className={styles.right}>
          <h3 style={{padding:"20px", }}><u>Our Contact Information</u></h3>
          <span>
            Fill the form or contact us :
          </span>
          <p> <AiTwotonePhone/> +977 9813990060</p>
          <p> <AiTwotoneMail/> rairanjit391@gmail.com</p>
          <p> <HiLocationMarker/> Koteshwor,Kathmandu</p>
          <p> <AiFillFacebook/>  Rajnit Rai</p>
        </div>
      </div>
    </div>
  )
};
export default Contact;
