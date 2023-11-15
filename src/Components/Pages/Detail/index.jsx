import React from "react";
import { useParams } from "react-router-dom";
import { product } from "../../data/product";

export default function Detail() {
  let { productId } = useParams();

  const pr = product.find((prod) => prod.id == productId);
//   console.log(pr);



  return (
      <div  style={{display:'flex', justifyContent:'center' ,width:'700px'}}>
      {/* ab main yaha pr chahta hoon jo v wha pr click ho raa hai in this case id yaha pr mil jae jb mujhe wo id milegi to main us id k i base pr usi data k array me se ek product ko find filter kr lunga to mera first motive hai ki us id ko main yaha grab kru
    react router dom me ek useParam hai so we  r going to use this. useParams hook ek object return krti hai and us object me jo v dynamic aa raa hoga : iske baad usko aap catch kr sakte hai useParams ki help se . so i can have as many values in the url as i need and i can read all the values write specifying  the variable in the same fashion 

          <Route path="/product/:productId/:next/:againnext" element={<Detail />} /> ye jo multiple value hai sari ki sari value use params me available ho jaegi use params me and uske baad main destructure kr sakta hoon in this case sirf ek hi hai     

          ab mujhe individuals product ki id mil chucki hai to mere sari k sari product data me pari  hai 
      */}
      {/* Detail of the Product
      <h1>{productId}</h1> */}
      <img style={{width:'200px'}} src={pr.image} alt="product_image" />
      <div>
      <h1>Product Title : {pr.title}</h1>
      <p>Description : {pr.description}</p>
      </div>
    </div>
  );
}
