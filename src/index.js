import React from 'react'
import ReactDOM from 'react-dom'
import TaskConteiner from './Conteiner/TaskConteiner'
import Style from '../style.css'






const root=document.getElementById('root')

const App=()=>{
    return(
        <div>
            <TaskConteiner/>
        </div>

    ) 
    }
ReactDOM.render(<App />,root)