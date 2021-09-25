import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasklist ,taskCheckFunc}) => {
    return (
        <div>
            {tasklist.map(task => (<div key={task.taskId}><TaskItem taskCheckFunc={taskCheckFunc} task={task}/></div>))}
        </div>

    )
}

export default TaskList;