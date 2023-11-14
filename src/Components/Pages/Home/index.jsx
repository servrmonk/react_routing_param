import React from "react";

import Card from "../../Card";

export default function Home({ products,count,updateCount }) {
  console.log(products);
  return (
    <div className="card-wrapper">
      {products.map((prod) => (
        <Card prod={prod} count={count} updateCount={updateCount}/>
      ))}
    </div>
  );
}
