import React, { useEffect, useState } from 'react'
import style from "./Cart.module.scss"
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import { addToCart } from '../../redux/slice/authSlice1'
import { removeFromCart } from '../../redux/slice/authSlice1'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
// import { singleProduct } from '../../redux/slice/authSlice1'


export const Cart = () => {
  const [data, setData]= useState([])
  const [search, setSearch] = useState("")
  const [filter, setFilter]= useState([])

  const dispatch =useDispatch();
 const selector= useSelector((state)=> state.cart.cart)

  // const items = useSelector((state)=>state.Cart)


//   const cart = useSelector((state)=> state.auth.cart)
   
//     const dispatch = useDispatch();
    const addItemToCart=(product)=>{
        dispatch(addToCart(product));
        
      
  }
  const  removeItemFromCart =(products)=>{
dispatch(removeFromCart(products))
  }
  // const singleProduct = (id)=>{
  //   dispatch(singleProduct(id))
  // }

 
//  const removeItemFromCart =(item)=>{
//     dispatch(remove(item))
//  }


   useEffect(()=>{
  const products = async()=>{
    const items=  await fetch(" https://fakestoreapi.com/products") 
      .then(data=>data.json())
      setData(items);
      // console.log(items,"i am data")
     setFilter(items)
    }
    products()
 },[])
 console.log(search,"hello")

const ProductFilter=(item)=>{
  const updateFilter= data.filter((x)=> x.category===item)
  setFilter(updateFilter)
 
}

 console.log(filter,"I am filter data")
 const showProduct =()=>{
  return (
    <>
  <h2  >Categories</h2>
<p style={{cursor:"pointer"}} onClick={()=> setFilter(data)}>All</p>
<p style={{cursor:"pointer"}} onClick={()=> ProductFilter("men's clothing")}>Men's Clothing</p>
<p style={{cursor:"pointer"}} onClick={()=> ProductFilter("women's clothing")}>Women's Clothing</p>
<p style={{cursor:"pointer"}} onClick={()=> ProductFilter("jewelery")}>Jewelers</p>
<p style={{cursor:"pointer"}} onClick={()=> ProductFilter("electronics")}>Electronics</p>
</>
  )

  
}
const handleSubmit=(e)=>{
e.preventDefault();

}
  return (
<>
    <div className={style.main}>
<div className={style.sidebar}>
{showProduct()}
</div>
 
    <div className={style.container}>
    <div className={style.right_item}> 
   <h2 style={{padding:"25px"}} >
    No. of Product: <span style={{color:"red"}}>{filter.length}</span>
   </h2>
   <form onSubmit={handleSubmit}>
   <input type='text'
   placeholder='Search Items'
 value={search}
 onChange={(e)=> setSearch(e.target.value)}
    style={{ width: "250px",
        height: "20px",
        border: "solid 1px black",
        borderRadius:"5px",
        marginTop:"25px" ,

        }}></input>
        </form>
   {/* <h3 style={{width:"100px"}}>Sort By: <select>
   <option></option>
      <option >Alphabet</option>
      <option>Name</option>
      <option>Id</option>
      <option>aksjn</option>
   </select></h3> */}
   </div>
   <div className={style.element}>
 {filter.filter(user=>user.title.includes(search)).map((item, index)=>(

  <div className={style.block} key={index}  >
 <img style={{height:"100px", width:"100px"}} src={item.image} alt=''/>
 
  <h3>{item.category}</h3>
  
    <p><b>Price:$</b>{item.price}</p>
    <p><b>Rating:</b>{item.rating.rate}</p>
    <p><b>Count:</b>{item.rating.count}</p>
   
    {selector.some((x)=> x.id===item.id) ? (
    <button onClick={()=>removeItemFromCart(item)}  style={{backgroundColor:"orangered" , width:"100%", cursor:"pointer"}}  >
Remove from  Cart
   </button>
) : (
  <button  onClick={()=>addItemToCart(item)}  style={{backgroundColor:"orangered" , width:"100%", cursor:"pointer"}}>Add to Cart</button>
 )} 


 {/* <NavLink to= "/single_product" >
 
 </NavLink> */}
 <NavLink to={`/single_product/${item.id}`}>
 <button   style={{backgroundColor:"orangered" , width:"100%", cursor:"pointer"}}>Info</button> 
 </NavLink>
 
  </div>
 
)


)} 
</div>
</div> 
 </div>
   </>
  )
  
}

