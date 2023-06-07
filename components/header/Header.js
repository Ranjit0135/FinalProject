import {useEffect, useState} from 'react'
import styles from "./Header.module.scss"
import { Link,NavLink } from 'react-router-dom'
import {FaShoppingCart, FaTimes, FaUserCircle} from 'react-icons/fa'
import { HiBars3BottomRight } from "react-icons/hi2";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_USER } from '../../redux/slice/authSlice';
import { REMOVE_ACTIVE_USERS } from '../../redux/slice/authSlice';
import ShowOnLogin, { ShowOnLogout } from '../hiddenLink/hiddenLink';
import { useSelector } from 'react-redux';


 const logo=(
    <div className={styles.logo}>
    <Link to="/">
    <h2>
      e<span>Shop</span>.
    </h2>
    
    </Link>
    </div>
  );

  const activeLink = ({isActive})=>(isActive ? `${styles.active}`:"") 
 const Header = () => {
 const [showMENU, setShowMENU] =useState(false)
  const [displayName, setDisplayName] =useState("")
  const navigate= useNavigate();
   const selector = useSelector((state)=> state.cart.cart )
  const dispatch = useDispatch()
//Monitor currently sign in user
 useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
       // console.log(user,"userDetails")
        //const uid=user.uid;
       // console.log(user.displayName)
        setDisplayName(user.displayName)

dispatch(
  SET_ACTIVE_USER({
  email: user.email,
  useName: user.displayName ,
  userID: user.uid,
}))
      }else{
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USERS())
      };
    });
  }, [dispatch, displayName]);
   
  const toggleMenu = ()=>{
      setShowMENU(!showMENU)
    };
     const hideMenu=() => {
      setShowMENU(false)
    }
    const logoutUser=()=>{
      signOut(auth).then(() => {
    toast.success("log Out successfully")
    navigate("/")
      }).catch((error) => {
      toast.error(error.message)
      });
    };


  
 
  return (
    <header >
      <div className={styles.header}>
     {logo}

     <nav className={showMENU ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`  }>
     
     {/* <div className={showMENU ? `${styles["nav-wrapper"]}  ${styles
     ["show-nav-wrapper"]}`
     : `${styles["nav-wrapper"]}` }
     onClick={hideMenu}>
     </div> */}
     <ul onClick={hideMenu}>
     <li className={styles["logo-mobile"]}>
      {logo}
      <FaTimes size={22} color='#fff' onClick={hideMenu}/>
     </li>
      <li>
        <NavLink to="/" className={activeLink}>
        Home
         </NavLink>
      </li>
      <li>
        <Link to="/contact">
        Contact Us
         </Link>
      </li>
      <li>
      <div className={styles["header-right"]} onClick={hideMenu}>
        <span className={styles.Links}>
        <ShowOnLogout>
        <NavLink to="/login" className={activeLink} >Login</NavLink><br></br>
        </ShowOnLogout>
        <ShowOnLogin>
        <a href='#home' style={{color:"#ff7722"}}>
          <FaUserCircle size={16}/>
             Hi ,  {displayName}
        </a>
        </ShowOnLogin>
       <ShowOnLogin>
        <NavLink to="/reset" className={activeLink} >Reset</NavLink><br></br>
        </ShowOnLogin>
        <ShowOnLogin>
        <NavLink to="/order-history" className={activeLink} >My Orders</NavLink><br></br>
        </ShowOnLogin>
        <ShowOnLogin>
        <NavLink to="/" onClick={logoutUser} className={activeLink} >Log Out</NavLink><br></br>
        </ShowOnLogin>
        </span>
        <span className={styles.cart}>
    <Link to="/cart_fun">
      Cart
      <FaShoppingCart size={20}/>
      <p style={{color:"red"}}>{selector.length}</p>
    </Link>
  </span>
         </div>
         </li>
      </ul>
      
         
     </nav>
<div className={styles["menu-icon"]}> 

{ <HiBars3BottomRight size={28} onClick={toggleMenu} /> }
</div>

      </div>
    </header>
  )
};
 export default Header;
