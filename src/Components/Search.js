import React from "react";

const Search =({searchnew})=>{

return(
<div  className="pa2">
    <input  
    className="pa2 bg-lightest-blue"
    type="search" placeholder="robots"
    onChange={searchnew}
    
    
    />
    
    
    
   </div> 

)

}

export default Search;