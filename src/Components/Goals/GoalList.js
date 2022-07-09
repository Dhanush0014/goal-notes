import React ,{useState, useEffect}from 'react'
import GoalItem from './GoalItem'
import './../UI/style.css'

function GoalList(props) {
     
    const[goals, setGoals] = useState(props.goals)

    console.log(goals);
     
   useEffect( ()=>{
       setGoals(props.goals)
   },[props.goals])

  return (
    <div className='goals-list'>
        {
        goals.map((goal,index)=>(
            <GoalItem key ={index} goal={goal.goal} />
        ))
        }
    </div>
  )
}

export default GoalList