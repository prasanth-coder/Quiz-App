import React from 'react'
import "./Card.css"

import { UseUserContext } from '../Context/UserContext';
const Card = (props) => {
    const {percent} = UseUserContext();
  return (
    <div className='card' style={{opactiy:percent}}>
        {props.children}

    </div>
  )
}

export default Card