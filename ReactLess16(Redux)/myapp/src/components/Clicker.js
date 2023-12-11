import { useDispatch, useSelector } from "react-redux"
import { decrAction, incrAction, resetAction } from "../store/clickerReducer"


function Clicker(){

    const count = useSelector(store => store.clicker)
    const dispatch = useDispatch()

    return(
        <div>
            <h2>Clicker</h2>
            <h3>{count}</h3>
            <div>
                <button onClick={() => dispatch(incrAction(1))}>Increment</button>
                <button onClick={() => dispatch(decrAction(1))}>Decrement</button>
                <button onClick={() => dispatch(incrAction(100))}>Increment 100</button>
                <button onClick={() => dispatch(decrAction(100))}>Decrement 100</button>
                <button onClick={() => dispatch(incrAction(+prompt()))}>Increment N</button>
                <button onClick={() => dispatch(decrAction(+prompt()))}>Decrement N</button>
                <button onClick={() => dispatch(resetAction())}>Reset</button>
            </div>
        </div>
    )
}

export default Clicker