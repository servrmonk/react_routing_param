// import React from "react";
// import logo from "../assets/logo.png";
// import "./style.css";

// export default function Header() {
//   return (
//     <div className="header-top">
//       <img className="logo" src={logo} alt="kfc-baba-img" />
//       <div className="registration-links">
//         <a href="">Store Locator</a>
//         <a href="">Sign up/Sign in</a>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function Header({count}) {
  return (
    <div>
      <div className="header">
        <h1>Header Component</h1>
        <ul>
          <li>
          {/* single page m page refresh nai hona chahiye anchor tag ki behaviour hai ki page (req ko server pr vejta hai aur server pr jkr new page load krta hai then we have to use link logic) */}
            {/* <a href="/home">Home</a> */}
            <Link to="/home">Home</Link>

            
          </li>
          <li>
            {/* <a href="#">About</a> */}
            <Link to="/about">About</Link>
          </li>
        </ul>
        <h1>{count.count} items in the cart</h1>
      </div>
    </div>
  );
}
