import react,{Component} from 'react';
import Person from './Person'

export default class ArrayList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const list1=[
            'ali',
            'david',
            'mamad',
            'ghadam'
        ]
        return(
            <div>
                {
                    list1.map(person=>(
                             <Person key={person} person={person}/>   
                    ))
                }
            </div>
        )
    }
}