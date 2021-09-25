import React from 'react'
import ReactDOM from 'react-dom'
import TaskConteiner from './Conteiner/TaskConteiner'





const root=document.getElementById('root')

const App=()=>{
    return(
        <div>
            <TaskConteiner/>
        </div>

    ) 
    }
ReactDOM.render(<App />,root)