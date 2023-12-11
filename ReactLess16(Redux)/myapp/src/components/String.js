import { useDispatch, useSelector } from "react-redux"
import { changeStringAction, initCapAction, lowerCaseAction, upperCaseAction } from "../store/stringReducer"


function String(){

    const string = useSelector(store => store.string)
    const dispatch = useDispatch()

    // 1 задача
    // Сделайте еще одну кнопку (и генератор экшена) которая будет менять регистр всего строковго типа в нижний

    // 2 задача
    // Сделайте кнопку, котоаря будет переопределять значение строково типа используя моадльное окно prompt

    // Задача 3
    // Сделайте кнопку initCap, которая будет возводить первую букву в верхний регистр, а все оставшиеся в нижний

    // defaultstring => Defaultstring 
    // testTEST => Testtest

    return(
        <div>
            <h2>String</h2>
            <h3>{string}</h3>
            <div>
                <button onClick={() => dispatch(upperCaseAction())}>Upper Case</button>
                <button onClick={() => dispatch(lowerCaseAction())}>Lower Case</button>
                <button onClick={() => dispatch(changeStringAction(prompt()))}>Change String</button>
                <button onClick={() => dispatch(initCapAction())}>Init Cap</button>
            </div>
        </div>
    )
}


export default String