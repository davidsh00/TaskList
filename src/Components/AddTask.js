import React, { Component } from "react";

export default class AddTask extends Component {
    state = {
        newtask: '',
    }
    addBtnClick = () => {
        const { taskAdd } = this.props
        const { newtask } = this.state
        taskAdd(newtask)
        this.setState({ newtask: '' })

    }
    taskInputChange = (e) => {
        this.setState({ newtask: e.target.value })
    }
    addInputEnter = (e) => {
        if (this.state.newtask && e.key == 'Enter') {
            this.addBtnClick()
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Enter new task" value={this.state.newtask} autoFocus onChange={this.taskInputChange} onKeyPress={this.addInputEnter} />
                <button disabled={!this.state.newtask} onClick={this.addBtnClick} >Add task</button>
            </div>
        )
    }
}