import React from "react";

export default function Card({ prod, count, updateCount }) {
  console.log(count);
  return (
    <div className="card">
      <div className="card-image">
        <img src={prod.image} alt="productimage" />
      </div>
      <div className="card-body">
        <h2>{prod.title}</h2>
        <p>{prod.description}</p>
        <p>INR {prod.price}</p>
        {/* if arg passkrna hai to curly braket use kro else no  */}
        <button onClick={updateCount}>+</button>
        <span>{count.count}</span>
      </div>
    </div>
  );
}
