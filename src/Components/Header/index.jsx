import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function Header({ count }) {
  return (
    <div>
      <div className="header">
        <h1>Header Component</h1>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
          <Link to="/signin">Sign in</Link>
          </li>
        </ul>
        <h1>{count.count} items in the cart</h1>
      </div>
    </div>
  );
}
