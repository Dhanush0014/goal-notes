import React ,{useState,useEffect} from 'react'
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

    useEffect(()=>{
        document.title='Todo';
      })

   const addGoalHandler = (newGoal) =>{
       setGoal((prevGoals)=>{
           console.log(newGoal);
           return [newGoal, ...prevGoals];
       })
   }

   const completedGoalHandler = (completedGoal)=>{
      
       setGoal((prevGoals)=>{
           const updateGoal = prevGoals.filter((goal,index)=>{
               console.log(index);
               return index !==completedGoal;
           })
           return updateGoal;
       });
   }

   let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (goals.length > 0) {
    content = (
      <GoalList goals={goals} onComplete={completedGoalHandler} />
    );
  }

  return (
    <div className='course-goal'>
        <section className='goal-form'>
        <GoalForm onNewGoal ={addGoalHandler} />
        </section>
        
        <section className='goals'>
        {/* <GoalList goals ={goals} onComplete={completedGoalHandler} ></GoalList> */}
        {content}
        </section>
       
    </div>
  )
}



export default SampleGoalData