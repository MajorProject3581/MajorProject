import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Signup from './components/signup'
import React, { useState } from "react";
import Footer from './components/Footer';
// import {CartProvider} from 'react-use-cart'
// import Cart from './components/Cart/Cart'

function App() {
  const [isShowLogin, setIsShowLogin] = useState(true);
const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  return (
    <div className="App">
    {/* <CartProvider> */}
      <NavbarComp fun={handleLoginClick} />
      {/* <Cart/> */}
      <Footer/>
    {/* </CartProvider> */}
    </div>   
  );
}

export default App;
