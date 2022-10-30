import React from 'react'
import Card from '../UI/Card'
import "./Quiz.css"
import { UseUserContext } from '../Context/UserContext';
import Progress from './Progress';
import Result from './Result';

const Quiz = () => {
    const {questions,index,value,onRadioChange,nextQues,handleSubmit,time,end} = UseUserContext();
    const {id,q,o1,o2,o3} = questions[index];
  return (
    <>
    {!end ?
    <>
    <Card className="card">
    <p className='h4'>{id} - {q}</p>
    <ul>
      <li>
        <label>
          <input
            type="radio"
            value={o1}
            checked={value === o1}
            onChange={onRadioChange}
          />
          <span className='p-2 h6'>{o1}</span>
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            value={o2}
            checked={value === o2}
            onChange={onRadioChange}
          />
          <span className='p-2 h6'>{o2}</span>
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            value={o3}
            checked={value === o3}
            onChange={onRadioChange}
          />
          <span className='p-2 h6'>{o3}</span>
        </label>
      </li>
      
      </ul>
      {index === questions.length - 1 ?
       <button className='btn btn-primary button' onClick={handleSubmit}>Submit</button>
       :
        <button className='btn btn-primary button' onClick={nextQues}>Next Question</button> }

      
  </Card>
  
  <Progress/>
  <br/>
    <div><h1>{time.min} : {time.sec}</h1></div></>
    
 : <Result/>
    }
    
    
    </>
  )
}

export default Quiz