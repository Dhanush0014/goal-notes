
import React from 'react'
import './../UI/style.css'

function GoalItem(props) {

  
  const completedHandler = ()=>{
    console.log("key "+props.id);
    props.onCompleted(props.id);
  }
  return (
    <div className='goal-item' onClick={completedHandler}>
        <h3>{props.goal}</h3>
    </div>
  )
}

export default GoalItem