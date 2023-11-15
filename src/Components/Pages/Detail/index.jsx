import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
    let {productId}  = useParams()
  return (
    <div>
    {/* ab main yaha pr chahta hoon jo v wha pr click ho raa hai in this case id yaha pr mil jae jb mujhe wo id milegi to main us id k i base pr usi data k array me se ek product ko find filter kr lunga to mera first motive hai ki us id ko main yaha grab kru
    react router dom me ek useParam hai so we  r going to use this. useParams hook ek object return krti hai and us object me jo v dynamic aa raa hoga : iske baad usko aap catch kr sakte hai useParams ki help se . so i can have as many values in the url as i need and i can read all the values write specifying  the variable in the same fashion 
    

          <Route path="/product/:productId/:next/:againnext" element={<Detail />} /> ye jo multiple value hai sari ki sari value use params me available ho jaegi use params me and uske baad main destructure kr sakta hoon in this case sirf ek hi hai     
      */}

      Detail of the Product 
      <h1>{productId}</h1>
    </div>
  )
}
