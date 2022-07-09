// import React ,{useState ,useEffect} from 'react'
// import GoalForm from './GoalForm';
// import GoalList from './GoalList';
// // import GoalList from './GoalList';


// const DUMMY_GOALS = [
//     {
//         id:"G1",
//         goal:"To learn react",
//     },
//     {
//         id:"G2",
//         goal:"To get a job",
//     }
// ]

// function Goal(props) {

//     const [goals,setGoal] = useState(DUMMY_GOALS);

//     useEffect((goals)=>{
//         setGoal(goals)
//     },[goals])

//    const addGoalHandler = (newGoal) =>{
//        setGoal((prevGoals)=>{
//            console.log(newGoal);
//            return [newGoal, ...prevGoals];
//        })
//    }
//   return (
//     <div>
//         <GoalForm onNewGoal ={addGoalHandler} />
//         {goals.map((goal)=>(
//             <GoalList
//             goal={goal} 
//             />
//         ))}
//     </div>
//   )
// }

// export default Goal
import React from 'react'
import './../UI/style.css'

function GoalItem(props) {
  return (
    <div className='goal-item'>
        <h3>{props.goal}</h3>
    </div>
  )
}

export default GoalItem