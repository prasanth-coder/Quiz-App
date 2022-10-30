import React from 'react'
import { UseUserContext } from '../Context/UserContext';
import Quiz from './Quiz';
const Instructions = () => {

    const {setStartQuiz,startQuiz,startTimer} = UseUserContext();
    
  return (
    <div>
        {startQuiz ? <Quiz/> :
        <>
        <div className='text-center h4'>Instructions</div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">1. You are given 1 minutes to answer the questions.</li>
            <li className="list-group-item">2. You are not allowed to skip the questions.</li>
            <li className="list-group-item">3. All questions must be answered.</li>
            <li className="list-group-item">4. You are not allowed to go back.</li>
            <li className="list-group-item">5. Score will be displayed at end.</li>
        </ul>  


        <button className='btn btn-primary' onClick={() => {
            setStartQuiz(true);
            startTimer();

            }}>Start</button>
        </>
  }
    </div>
  )
}

export default Instructions