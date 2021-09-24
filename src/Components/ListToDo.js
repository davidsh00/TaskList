import React,{Component} from "react";
export default class ListToDo extends Component{
    constructor(props){
        super(props)
        this.state={
            input:null
        }
    }
   static getDerivedStateFromProps(props,state){

   }
    render(){
        let taskItems=[
            {id:1,title:'Task1'},
            {id:2,title:'Task2'},
        ]
        const textChange=(event)=>{this.setState({input:event.target.value})}
        const addBtnClick=(event)=>{
            let title=this.state.input;
            taskItems.push({id:new Date().toLocaleTimeString(),title:ti});
                        console.log(taskItems);
                        let ull=document.body.querySelector('ul');
                        ull.innerHTML="";
                     taskItems.map(taskItem=>{
                         let title=taskItem.title;
                         let id=taskItem.id;
                         let li=document.createElement("li");
                         li.setAttribute('title',title);
                         li.setAttribute('id',id);
                         li.innerHTML=title;
             ull.appendChild(li);
                     })
        }
        
        return(
            <div>

                <h1 style={{textAlign:'center'}}>
                    TaskList
                </h1><hr/>
                <div>
                    <input type="text" onChange={textChange} placeholder="input your task"/>
                    <button onClick={addBtnClick}>Add</button>
                </div>
                <div>
                <ul>
                    {taskItems.map(taskItem=>(
                        <li key={taskItem.title}>{taskItem.title}</li>
                    ))}
                </ul>
                </div>
                
                
            </div>
        )
    }

}