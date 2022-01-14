import react, { useState } from 'react';
    
    
const Displaybox = (props) => {
    return (
        
        <>
          <div className="d-flex wrap">
          
            {
                props.currentboxColor.map( (color, i) => {
                    return (
                        
                        <div  key={i} style={{backgroundColor:color,
                    width:100+"px",
                    height:100+"px"}}></div>)
                })
               
            }
            </div>
        </>
    );
};
    
export default Displaybox;