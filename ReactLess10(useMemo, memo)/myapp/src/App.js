import { useState } from "react";
import Counter from "./components/Counter";
import Burden from "./components/Burden";

function App() {

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)


  // 1 проблема (memo)
  // После обновления компонента app (вызывая сетСтейт1), также обновляются компоненты Counter2 и Burden

  // 2 Проблема (useMemo)
  // После обновления компонента Burden вызывает функция burdenHandler()

  // useMemo момеизирует функции
  // memo мемоизрует КОМПОНЕНТЫ

  return (
    <div>
      <div>
        <h2>Counter 1</h2>
        <Counter value={count1} elem={'count1'}/>
        <button onClick={()=> setCount1(count1 + 1)}>Increment!</button>
      </div>
      <div>
        <h2>Counter 2</h2>
        <Counter value={count2} elem={'count2'}/>
        <button onClick={()=> setCount2(count2 + 1)}>Increment!</button>
      </div>
      <Burden value={count2}/>
    </div>
  );
}

export default App;
