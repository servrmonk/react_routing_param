import { useState } from "react";
import Footer from "./Components/Footer";
import Header from './Components/Header/index'

import Home from "./Components/Pages/Home";
import {product} from "./Components/data/product";
 

function App() {
  const [storeProducts, setStoreProducts] = useState(product);
  

    const [cartCount,setCartCount] = useState({count:0})//pass non primitisve value only

    const updateCart = ()=>{
      const {count} = cartCount;
      setCartCount({count:count+1}) //initial state is a state not a variable so u can't update directly
      // console.log("Hello");
    }

  return (
    <div className="container">
      <Header count={cartCount} />
      <Home  count={cartCount}  products={storeProducts} updateCount={updateCart} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
