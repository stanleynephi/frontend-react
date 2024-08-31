import React from "react";




/* a function to return a prop element for 
 the testimonies of former users*/

function Testimony(prop){

    return(
        <div className={prop.style}>
            <p>{prop.testimony}</p>
            <h2>{prop.username}</h2>
        </div>
    )

 }

 export default Testimony