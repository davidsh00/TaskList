import React, { Component } from "react";
export default class Clock extends Component{
    constructor(props){
        super(props)
        this.state={
            time: new Date().toLocaleTimeString(),
        }
         
    }
    render(){
        return(
            <div>
              { `the current time is ${this.state.time}`}
            </div>
        )
           
        
    }
    componentDidMount(){
        this.timer=setInterval(() => {
            this.setState({time:new Date().toLocaleTimeString()})
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }

}