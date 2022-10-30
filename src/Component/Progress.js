import React from 'react'
import { UseUserContext } from '../Context/UserContext';
function Progress() {
    const {percent} = UseUserContext();
  const width = percent+"%";  
  return (
    <div>
        <div className="progress" style={{width:"48%",border:".5px solid black"}}>
           <div className="progress-bar" role="progressbar" aria-label="Example with label" 
           style={{width:width}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{percent}%</div>
        </div>
    </div>
  )
}

export default Progress