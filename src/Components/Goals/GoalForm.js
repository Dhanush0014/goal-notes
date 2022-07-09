import React, { useState } from 'react'
import Button from '../UI/Button';
import './../UI/style.css'


function GoalForm(props) {

    const [enteredGoal, setGoal] = useState('');

    const [isValid, setIsvalid] = useState(true);

    const goalChangeHandler = (event) => {
        setGoal(event.target.value)

    }


    const addNewGoalHandler = (event) => {
        event.preventDefault();
        console.log(enteredGoal.trim() + isValid);
        if (enteredGoal.trim().length === 0) {
            setIsvalid(()=>false)
            return
        }
        setIsvalid(() => true );
        const newGoal = {
            id: 'G' + Math.floor(Math.random() * 100),
            goal: enteredGoal
        }
        props.onNewGoal(newGoal);
        setGoal('')
        
    }

    
    return (
        <div className={`form-control${!isValid?' invalid':''}`}>
            <form onSubmit={addNewGoalHandler}>
                <div>
                    <label>Goal</label>
                    <input value={enteredGoal} onChange={goalChangeHandler} ></input>
                    <div>
                    <Button>Add Goal</Button>
                </div>
                </div>
               
            </form>
        </div>
    )
}

export default GoalForm