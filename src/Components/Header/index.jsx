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
import "./style.css";
export default function Header({count}) {
  return (
    <div>
      <div className="header">
        <h1>Header Component</h1>
        <h1>{count.count} items in the cart</h1>
      </div>
    </div>
  );
}
