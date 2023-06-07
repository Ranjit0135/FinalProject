import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styles from './SingleProduct.module.scss'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice/authSlice1';
const SingleProduct = () => {
  const { id } = useParams();
  const dispatch =useDispatch();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
const handleitem=(a)=>{
  dispatch(addToCart(a))
}
  
  return (
    <div className={styles.container}>
    <h2 style={{ padding:"10px", margin: "10px"}}> Product Details</h2>
    <h4 style={{ padding:"10px", margin: "10px"}}><u>{product.category}</u></h4>
      <div className={styles.section}>
        <div className={styles.left}>
        <img style={{width:"400px", height:"400px" , border:"2px solid wheat "}} src={product.image} alt={product.title} />
        </div>
        <div className={styles.right}>
       
        <h4>{product.title}</h4>
        <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p> Count: {product.rating.count}</p>
      <p>Rating {product.rating.rate}
      </p>
    
      
      <button onClick={()=> handleitem(product) } style={{backgroundColor:"orange"}}>Add to cart </button>
     
        </div>
      </div>
     <div className={styles.button}>
     
<h4>Product Reviews</h4>

     </div>
     
    </div>
  );
}

export default SingleProduct;
