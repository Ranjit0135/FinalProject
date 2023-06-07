import './App.css';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
// Pages
import { Header,Footer } from './components';
// Components
import { Home,Contact,Login,Register,Reset } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Cart } from './pages/cart/Cart';

import CartFun from './pages/cartFunction/CartFun';
import CheckOut from './pages/checkout/CheckOut';
import { Pay } from './pages/pay/Pay';
import SingleProduct from './pages/singleproduct/SingleProduct';





function App() {
  return (
    <>
     <BrowserRouter>
     <ToastContainer/>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cart_fun' element={<CartFun/>}/>
        <Route path='/single_product/:id' element={<SingleProduct/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/pay' element={<Pay/>}/>
       
        
      </Routes>
     
      <Footer />
     </BrowserRouter> 
    </>
  );
}

export default App;
