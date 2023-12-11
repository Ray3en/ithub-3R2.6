import { useContext } from "react"
import { Context } from "../context/Context"


function BlockItem(props){

    const {title, completed, id} = props
    const {removeTodo, changeTodo} = useContext(Context)
    
    return(
        <div 
            className="todo_item"
            style={{backgroundColor: (completed) ? 'green' : 'red'}}
            onDoubleClick={() => removeTodo(id)}
            onClick={() => changeTodo(id)}
        >
            <h2>{title}</h2>
        </div>
    )
}

export default BlockItem