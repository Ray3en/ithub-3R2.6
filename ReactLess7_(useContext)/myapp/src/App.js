import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Context } from "./context/Context";


function App() {

  const [number, setNumbers] = useState([1,2,3,4,5])

  function remFirstNum(){
    setNumbers(number.slice(1))
  }

  return (
    <Context.Provider value={{number, remFirstNum}}>
      <div >
        <h2>App</h2>
        {number}
        <Header/>
        <Main/>
      </div>
    </Context.Provider>
  );
}

export default App;
