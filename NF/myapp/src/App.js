import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import BlockList from './components/BlockList';

function App() {

  let data = [
    {id: 1, title: 'Помыть кота', completed: true},
    {id: 2, title: 'Позавтракать', completed: true},
    {id: 3, title: 'Почистить огурец', completed: false},
    {id: 4, title: 'Прибраться на даче', completed: true},
  ]

  const [todos, setTodos] = useState(data)

  return (
    <div>
      <AddTodo/>
      <BlockList todos={todos}/>
    </div>
  );
}

export default App;
