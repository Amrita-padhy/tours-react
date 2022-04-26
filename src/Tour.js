import React, { useState } from "react";
import './App.css';


const Tour = ({id, image, info, name, price,removeTour}) =>{
    const [readmore,setReadmore] =useState(false)
return (
   <article className="single-tour">
       <img src={image} alt={name} />
       <footer>
           <div className="tour-info">
               <h4>{name}</h4>
               <h4 className="tour-price">${price}</h4>
           </div>
           <p className="info">
               {readmore ? info : `${info.substring(0, 200)}...`}
                   </p>
                   <button className="readmore_btn" onClick={()=>setReadmore(!readmore)}>{readmore?"Show Less": "read more"}  </button>
               <button  onClick={()=>removeTour(id)} className="delete-btn">Not Intrested</button>
       </footer>
   </article>
)
}



export default Tour