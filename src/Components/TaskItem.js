import React from "react";
const TaskItem = ({ task,taskCheckFunc}) => {
    const taskCheck=()=>{
        taskCheckFunc(task.taskId)
    }
    return(
    <li>
        <input type="checkbox" checked={task.isComplete} onChange={taskCheck}/>
        {task.taskTitle}

    </li>
);}
export default TaskItem;
