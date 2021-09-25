import React, { Component } from "react";
import Tasklist from "../Components/TaskList"
import AddTask from "../Components/AddTask";

export default class TaskConteiner extends Component {
    state = {
        tasklist: [
            { taskId: '1', taskTitle: "task1", isComplete: false },
            { taskId: '2', taskTitle: "task2", isComplete: true },
        ]
    }

    taskAdd = (taskTitle) => {
        const newTaskList = [...this.state.tasklist]
        const newtask = {
            taskId: `${Date.now()}`,
            taskTitle: taskTitle,
            isComplete: false
        }
        newTaskList.push(newtask)
        this.setState({ tasklist: newTaskList })

    }
    taskCheckFunc=(taskid)=> {
        const newTask = this.state.tasklist.map(task => {
            if (task.taskId === taskid) {
                return ({
                    ...task,
                    isComplete: !task.isComplete
                })
            }
            return task

        })
        this.setState({tasklist:newTask})
    }
    render() {

        return (
            <div>
                <AddTask taskAdd={this.taskAdd} />
                <Tasklist tasklist={this.state.tasklist} taskCheckFunc={this.taskCheckFunc} />
            </div>
        )
    }
}