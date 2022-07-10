import React, { useState, useEffect } from 'react'
import GoalItem from './GoalItem'
import './../UI/style.css'

function GoalList(props) {

    const [goals, setGoals] = useState(props.goals)

    useEffect(() => {
        setGoals(props.goals)
    }, [props.goals])

    const deleteHandler = (completedGoal) => {
           props.onComplete(completedGoal)
    }

    return (
        <div className='goals-list'>
            {
                goals.map((goal, index) => (
                    <GoalItem key={index} id={index} goal={goal.goal} onCompleted={deleteHandler} />
                ))
            }
        </div>
    )
}

export default GoalList