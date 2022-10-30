import React from 'react'
import { UseUserContext } from '../Context/UserContext';
import Instructions from './Instructions';

const Header = () => {
    const {header,start,setStart} = UseUserContext();
  return (
    <center>
      <div className='display-5'>{header}</div>
      <br/>
      {!start ? <>
      <button className='btn btn-primary'  onClick={() => setStart(true)}>Click Here</button>
      <div className='display-3'>Click Above Button to Start Quiz</div>
      </> : <Instructions />}
      
    </center>
  )
}
export default Header;
