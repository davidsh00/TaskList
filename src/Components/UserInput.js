import React,{Component} from "react";
export default class Eve extends Component{
   state={
        name:'user',
    }
  
    onClickBtn=()=>{
        console.log('click me...')
    }
    
    onChangeInput=(event)=>{
this.setState({name:event.target.value})

    }
    render(){
        const{onClickBtn,onChangeInput}=this
        const {name}=this.state
        return(
            <div>
                {`Hello ${name}`}
                <button onClick={onClickBtn}>clickme..</button>
                <input value={name} onChange={onChangeInput} />
            </div>
        )
    }
}