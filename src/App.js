import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header/index";

import Home from "./Components/Pages/Home";
import { product } from "./Components/data/product";
import About from "./Components/Pages/About";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Components/Pages/Signin";
import Detail from "./Components/Pages/Detail";

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
          {/* lekin is case me pura path exactly to match nai ho raa hai ye bs adha match ho raa hai /product adha part dynamic hai and adha part static to dynamic part capture krne k lie yaha pr ek variable likh deta hai and us variable me variable me aane wala jo v dynamic path hai usko catch krte hai and wo variable url k path me hm likhte hai colons : k seperations k sath jaha pr colon aa jae path me : to uske baad jo v likha jaega wo variable consider hoga to main likh deta hoon id jaise ki yaha productId jo ki product/ k baad hai usko variable treat krega . ab jo v website pr product/ k baad aa raa hai jaise ki yaha pr id aa raa hai to id ko product id me copy kr k available kr dega */}
          <Route path="/product/:productId" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
