import { useContext } from "react"
import { Context } from "../context/Context"


function ContentItem(){

    const {number} = useContext(Context)

    return(
        <ul>
            <h2>ContentItem</h2>
            {number.map(elem => <li key={elem}>{elem}</li>)}
        </ul>
    )
}

export default ContentItem