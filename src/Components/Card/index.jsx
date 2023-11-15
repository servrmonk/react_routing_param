import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Card({ prod,key, count, updateCount }) {


  return (
    <div  className="card">
      <div className="card-image">
        <img src={prod.image} alt="productimage" />
      </div>
      <div className="card-body">
        <Link className="card-link" to={`/product/${prod.id}`}>
          <h2>{prod.title}</h2>
        </Link>
        <p>{prod.description}</p>
        <p>INR {prod.price}</p>
        <button onClick={updateCount}>+</button>
        <span>{count.count}</span>
      </div>
    </div>
  );
}
