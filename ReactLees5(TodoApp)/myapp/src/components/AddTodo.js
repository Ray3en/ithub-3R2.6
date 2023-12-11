import { useContext } from "react"
import { Context } from "../context/Context"

function AddTodo(){

    const {addTodo} = useContext(Context)

    function handler(event){
        if (event.key === 'Enter'){
            addTodo(event.target.value)
        }
    }

    return(
        <div className="input_area">
            <input onKeyDown={handler}/>
        </div>
    )
}

export default AddTodo