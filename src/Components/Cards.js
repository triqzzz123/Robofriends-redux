import React from 'react';




let Cards =({id,name,email})=>{
 
return(
<div className="tc bg-yellow dib br3 bw3 pa2 ma2 grow shadow-5">



<img  alt="robots" src={`https://robohash.org/ ${id}?200x200` } />
<h2>{name}</h2>
<p>{email}</p>



</div>


)

}

export default Cards