import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header/index";

import Home from "./Components/Pages/Home";
import { product } from "./Components/data/product";
import About from "./Components/Pages/About";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Components/Pages/Signin";

function App() {
  const [storeProducts, setStoreProducts] = useState(product);
  const [cartCount, setCartCount] = useState({ count: 0 });
  const updateCart = () => {
    const { count } = cartCount;
    setCartCount({ count: count + 1 });
  };

  return (
    <div className="container">
      <BrowserRouter>
      <Header count={cartCount} />
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                count={cartCount}
                products={storeProducts}
                updateCount={updateCart}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <Header count={cartCount} />
    
      <About />
      <Footer /> */}
    </div>
  );
}

export default App;
