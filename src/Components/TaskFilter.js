import React from "react";
import { Filters } from "../consident/Filters";

const TaskFilter=({currentFilter,checkFilter})=>{
   btnclick=(e)=>{
       checkFilter(e.target.innerText)
   }
    return(
    
        <div className='filter'>
            <h3>Filters:</h3>
            <button onClick={btnclick}  style={{backgroundColor:(currentFilter===Filters.All_Task)?'#bbb':'inherit'}}>{Filters.All_Task}</button>
            <button onClick={btnclick}  style={{backgroundColor:(currentFilter===Filters.Completed)?'#bbb':'inherit'}}>{Filters.Completed}</button>
            <button onClick={btnclick}  style={{backgroundColor:(currentFilter===Filters.UnCompleted)?'#bbb':'inherit'}}>{Filters.UnCompleted}</button>
        </div>
    )
}
export default TaskFilter;
