import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

export default function Card({ prod, count, updateCount }) {
  console.log(count);
  return (
    // <Link to="/product">
      <div className="card">
        <div className="card-image">
          <img src={prod.image} alt="productimage" />
        </div>
        <div className="card-body">
          <Link className="card-link" to="/product">
            {/* sirft title clickable ho gya if u want ki puri ki puri card clickable ho than u can simply use div k uper link tag */}
            <h2>{prod.title}</h2>
          </Link>
          <p>{prod.description}</p>
          <p>INR {prod.price}</p>
          {/* if arg passkrna hai to curly braket use kro else no  */}
          <button onClick={updateCount}>+</button>
          <span>{count.count}</span>
        </div>
      </div>
    // {/* </Link> */}
  );
}
