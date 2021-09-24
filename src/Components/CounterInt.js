import React,{Component} from "react";
export default class CounterSecend extends Component{
constructor(props){
super(props)
this.state={
    num: Math.floor(Math.random()*10),
    counter: 0
}

}
render(){
    const{counter,num}=this.state
    return(
        <div>
{`${num}-->${counter}`}
        </div>
    )

}
 
componentDidMount(){
    this.timer=setInterval(() => {
        this.setState({counter: this.state.counter+=this.state.num})
    }, 1000);
}
componentWillUnmount(){
    clearInterval(this.timer)
}
}