import React from 'react';
import Cards from './Cards';


let CardsList=({robo})=>{     
return(
    <div>
    {
    robo.map((user,i)=>{

        return(
        
          <Cards
           
           key={i}

           id={robo[i].id}
            name={robo[i].name}
             email={robo[i].name}
             
             />
        );
        })
    
    }




</div>
);

}
export default CardsList;