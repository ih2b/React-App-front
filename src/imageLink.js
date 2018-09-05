import React from 'react';
import './imageLink.css'
const ImageLink= ({onInputChange , onSubmit}) => {
    return (
    	 <div className=' honeycomb shadow-2 br1 w-40 center ' style ={{textAlign: 'center',paddingTop:'20px'}}>
         <h1 className=' f2 '>detect face in picture </h1>
         <div className = 'w-100  '>
         <input type='tex' className = 'f4 pd2 w-70 pointer' onChange={onInputChange}/>
         <button onClick={onSubmit} className= 'f2 pd2 w-30 grow link  pv ' style={{color: 'white',fontSize:'18px',padding: '20px 35px',textAlign: 'center',backgroundImage:'linear-gradient(89deg,#36D1DC 0%,#5B86E5 100% )',paddingTop:'15px',margin:'10px 10px 10px 10px'}}>DETECT</button>
        </div>
        </div>
    	   );
  
}
export default ImageLink ;
