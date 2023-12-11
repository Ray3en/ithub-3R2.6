import { useCallback, useEffect, useRef, useState } from "react";
import './App.css'

function App() {

  let [numbers, setNumbers] = useState([1,2,3,4,5,6,7])

  // Задача useRef - создать объект, занчение которого после обнолвения переопределяться не будет. 
  // Сво-во current после обвовления будет хранить актуальные, которые в него были переданы 
  // useRef длаее заменяет querySelector внутри react приложения
  // let ulRef = {currunt: undefined}
  let ulRef = useRef()
  let numbRef = useRef()
  numbRef.current = numbers

  // хук useCallback является обверткой для функции. 
  // Сам хук позволяет не пересоздавать функцию после обновлениы компнента.
  // Хук может также указывать зависимости, когда необходимо саму функцию обновлять абсолютно также как это делает useEffect
  
  let handler = useCallback(() => {
    console.log('scroll!')
    // numbers замыкает свое значение (defaultState), реф же всегда будет хранить актуальное значение
    console.log(numbers, numbRef.current)
  },[])

  let stopScroll = () => {
    ulRef.current.removeEventListener('scroll', handler)
  }

  useEffect(() => {
    // ul_elem = document.querySelector('ul')
    ulRef.current.addEventListener('scroll', handler)
  },[])

  return (
    <div >
      <ul ref={ulRef}>
        {numbers.map(elem => <li key={elem}>{elem}</li>)}
      </ul>
      <div>
        <button onClick={() => setNumbers([...numbers,numbers.length+1])}>Увеличить!</button>
        <button onClick={() => stopScroll()}>Отключить скролл событие</button>
      </div>
    </div>
  );
}

export default App;
