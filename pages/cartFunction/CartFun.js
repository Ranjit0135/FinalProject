import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './CartFun.module.scss'
import { AiFillDelete } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { removeFromCart, clear, incrementQuantity, decrementQuantity } from '../../redux/slice/authSlice1';
const CartFun = () => {

  const items = useSelector((state)=> state.cart.cart)
  const total = items.map((item)=> item.price * item.quantity).reduce((curr,prev)=>curr+prev,0)
  const dispatch= useDispatch()
  console.log(items,"cart fun")

  const handledelete=(data)=>{
dispatch(removeFromCart(data))
  }
  const handleClear=(datas)=>{
    dispatch(clear(datas))
  }
  const incrementItemQuantity=(data)=>{
    dispatch(incrementQuantity(data))
  }
  const decrementItemQuantity=(data)=>{
dispatch(decrementQuantity(data))
  }

  return (
<>
    <div className={styles.header}>
<h2>Shopping Cart</h2>
{/* <div className={styles.element}>
<span >s/n</span>
<span>Product</span>
<span>price</span>
<span>quantity</span>
<span>Total</span>
<span>actions</span>
</div> */}
   
    </div>

    <div>
    <table className={styles.cart}>
    <thead >
  <tr>
 
<th >Product</th>
  <th >price</th>
  <th >quantity</th>
  <th >Total</th>
  <th >actions</th>
  
  </tr>  
          
</thead>

     {items.map(product => (

<>

          
          <tbody  key={product.index}>
            <>
              
              <th >
              <div>
              {product.title}
              </div>
              <div > <img style={{width:"80px", height:"80px",}} src={product.image} alt=''/> </div> </th>
             <th > $ {product.price}</th>
              <th >
              <button onClick={()=> decrementItemQuantity(product)} style={{backgroundColor:"grey"}}> - </button>
              
               <span> {product.quantity} </span>
               <button  onClick={()=> incrementItemQuantity(product)}  style={{backgroundColor:"grey"}}> + </button>
                </th>
             <th>$ {product.price*product.quantity}</th>
           <th onClick={()=> handledelete(product)}><AiFillDelete/></th> 
            </>
        

          </tbody>
         
  </>
       
      ))}
    </table>
   
    
    </div>
    <div className={styles.button}>
      <div className={styles.btn}>
      <button onClick={()=> handleClear(items)} style={{backgroundColor:"orangered"}}> Clear Cart</button>
      </div>
      <div className={styles.disc}>
        <h3>Cart Items : {items.length}</h3>
        <h2> Subtotal : </h2><span> $ {total.toFixed(1)}</span>
        <p>Taxes and shipping calculated at Checkout</p>
        <NavLink to="/Login"><button style={{backgroundColor:"orangered" , width:"100%", cursor:"pointer"}}>Checkout</button></NavLink> 
      </div>
    </div>
    </>
  )
}

export default CartFun
