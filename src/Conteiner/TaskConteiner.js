import React, { Component } from "react";
import Tasklist from "../Components/TaskList"
import AddTask from "../Components/AddTask";
import TaskFilter from "../Components/TaskFilter"
import {Filters} from "../consident/Filters"


export default class TaskConteiner extends Component {
    state = {
        tasklist: [
            { taskId: '1', taskTitle: "task1", isComplete: false },
            { taskId: '2', taskTitle: "task2", isComplete: true },
        ],
        currentFilter: Filters.All_Task,
    }
    checkFilter=(newFilter)=>{this.setState({currentFilter:newFilter})}
    get currentList(){
        const{currentFilter,tasklist}=this.state;
        switch(currentFilter){
            case Filters.All_Task:
                return tasklist;
            case Filters.Completed:
                return tasklist.filter(task=>task.isComplete);
                case Filters.UnCompleted:
                    return tasklist.filter(task=>!task.isComplete);
        }
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
                <TaskFilter currentFilter={this.state.currentFilter} checkFilter={this.checkFilter}/>
                <AddTask taskAdd={this.taskAdd} />
                <Tasklist tasklist={this.currentList} taskCheckFunc={this.taskCheckFunc} />
            </div>
        )
    }
}