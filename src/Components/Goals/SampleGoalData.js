import React ,{useState} from 'react'
import GoalForm from './GoalForm';
import GoalList from './GoalList';
// import GoalList from './GoalList';


const DUMMY_GOALS = [
    {
        id:"G1",
        goal:"To lean react",
    },
    {
        id:"G2",
        goal:"To get a job",
    }
]

function SampleGoalData(props) {

    const [goals,setGoal] = useState(DUMMY_GOALS);


   const addGoalHandler = (newGoal) =>{
       setGoal((prevGoals)=>{
           console.log(newGoal);
           return [newGoal, ...prevGoals];
       })
   }
  return (
    <div className='course-goal'>
        <section className='goal-form'>
        <GoalForm onNewGoal ={addGoalHandler} />
        </section>
        
        <section className='goals'>
        <GoalList goals ={goals}></GoalList>
        </section>
       
    </div>
  )
}



export default SampleGoalData