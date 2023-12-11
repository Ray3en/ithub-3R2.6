import { useStorageState } from "../../customHooks/useStorageState"
 
 
function Content(){
 
    const data = ['Alex', 'Neena', 'Steven', 'Lex']
 
    const [count, setCount] = useStorageState(0, 'count')
    const [empl, setEmpl] = useStorageState(data, 'empl')
 
 
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Click!
            </button>
            <div>
                <button onClick={() => setEmpl(empl.slice(1))}>Delete</button>
                {empl.map(elem => <p>{elem}</p>)}
            </div>
        </div>
    )
}
 
export default Content