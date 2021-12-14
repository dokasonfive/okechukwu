import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import React, {useState} from 'react'
import CartProvider from "./components/store/CartProvider";


function App() {

  const[cartIsShow,setCartIsShown]=useState(false)

  const showCartHandler=()=>{
    setCartIsShown(true)
  }

  const closeCartHandler=()=>{
    setCartIsShown(false)
  }
  return (
    <CartProvider>
     { cartIsShow && <Cart onClose={closeCartHandler} />}
     <Header onShowCart={showCartHandler} />
     <main>
     <Meals />
     </main>
    </CartProvider>
  );
}

export default App;
