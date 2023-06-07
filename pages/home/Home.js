import React from 'react'
import Slider from '../../components/slider/Slider';
import { Cart } from '../cart/Cart';
 const Home = () => {
  return (
    <div>
      <Slider/>
      <div>
        <Cart/>
      </div>
    </div>
  )
};
export default Home;

