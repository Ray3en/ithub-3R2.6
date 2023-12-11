import { useContext } from "react"
import { Context } from "../context/Context"


function Header(){

    const {remFirstNum} = useContext(Context)

    return(
        <div>
            <h2>Header</h2>
            <button onClick={() => remFirstNum()}>Click!</button>
        </div>
    )
}

export default Header