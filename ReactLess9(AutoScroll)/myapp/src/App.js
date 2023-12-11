import { useRef } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';

function App() {

  let targetScrollRef = useRef()

  function scrollHandle(){
    targetScrollRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  return (
    <div >
      <Header scrollHandle={scrollHandle}/>
      <Content ref={targetScrollRef} test={'test'}/>
    </div>
  );
}

export default App;



