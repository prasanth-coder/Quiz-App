import React,{useContext,createContext, useState} from 'react'
import {questions,answers} from "../Questions"
export const UserContext = createContext(null);
const ans = [];
var mark = 0; 
var percent = 0;
const UserContextProvider = ({children}) => {
  const [start,setStart] = useState(false);
  const [startQuiz,setStartQuiz] = useState(false);
  const [index, setIndex] = useState(0);
  const [value,setValue] = useState("");
  const header = "Quiz App";
  const [time,setTime] = useState({hr : 0,min :0,sec:0,ms:0});
  const [end,setEnd] = useState(false);
  var updatedHr = time.hr,updatedMin = time.min,updatedMs = time.ms,updatedSec = time.sec;
  const startTimer = () => {
   
    run();
    setInterval(run,10)
  

  
}
  const run = () => {
     if(updatedMin === 1 && updatedSec === 0){
      setEnd(true);
     }
     if(updatedMin === 60){
        updatedHr++;
        updatedMin = 0;
     }
     if(updatedSec === 60){
       updatedMin++;
       updatedSec = 0;
     }
     if(updatedMs === 100){
       updatedSec++;
       updatedMs = 0;
     }

     updatedMs++;

      return setTime({ms:updatedMs,sec:updatedSec,hr:updatedHr,min:updatedMin})
      
  }

  
  const onRadioChange = (e) => {
    setValue(e.target.value)
  }

  const calcMark = () => {
    if(ans.includes(answers[index])){
      mark++;

    }

  }
  const nextQues = () => {
    if(value === ""){
      alert("Please select option. Value cannot be empty");
      return;
    }
    percent = percent + (100/questions.length);
    ans.push(value);
    calcMark();
    console.log(ans);
    if(index === questions.length - 1){
      setIndex(0);
      return;
    }

    setIndex(prev => prev + 1);
  

  }

  const handleSubmit = () => {
    
    ans.push(value);
    calcMark();
    setEnd(true);
   
  }
  
  return (
    <UserContext.Provider value={{questions,header,start,setStart,
    startQuiz,setStartQuiz,index,setIndex,value,setValue,onRadioChange
    ,nextQues,handleSubmit,percent,time,startTimer,end,mark}}>
        {children}
    </UserContext.Provider>
  )
}

export const UseUserContext = () => {
  const {questions,header,start,setStart,startQuiz,setStartQuiz,index,setIndex,value,setValue,onRadioChange,
    nextQues,handleSubmit,percent,time,startTimer,end,mark} = useContext(UserContext);
  return {questions,header,start,setStart,startQuiz,setStartQuiz,index,setIndex
    ,value,setValue,onRadioChange,nextQues,handleSubmit,percent,time,startTimer,end,mark};
}

export default UserContextProvider;
