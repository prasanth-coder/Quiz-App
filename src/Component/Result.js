import React from 'react'
import { UseUserContext } from '../Context/UserContext';

function Result() {
    const {mark,questions} = UseUserContext();
  return (
    <div>
         <h1>Thank You For Attending Quiz.<br/>
        You scored {mark} / {questions.length}
        </h1>

    </div>
  )
}

export default Result

