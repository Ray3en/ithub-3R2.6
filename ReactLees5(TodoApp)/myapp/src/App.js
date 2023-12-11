import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import BlockList from './components/BlockList';
import { Context } from './context/Context';

function App() {

  let data = [
    {id: 1, title: 'Помыть кота', completed: true},
    {id: 2, title: 'Позавтракать', completed: true},
    {id: 3, title: 'Почистить огурец', completed: false},
    {id: 4, title: 'Прибраться на даче', completed: true},
  ]

  const [todos, setTodos] = useState(data)

  function removeTodo(id){
    let removedTodos = todos.filter(elem => elem.id !== id) 
    setTodos(removedTodos)
  }

  function changeTodo(id){
    let cangedTodos = todos.map(elem => {
        if (elem.id === id){
          elem.completed = !elem.completed
        }
        return elem
    })
    setTodos(cangedTodos)
  }

  function addTodo(title){
    let newTodo = {
      id: Date.now(),
      completed: false,
      title
    }
    setTodos([...todos, newTodo])
  }

  return (
    <Context.Provider value={{addTodo, removeTodo, changeTodo}}>
      <div>
        <AddTodo/>
        <BlockList 
          todos={todos} 
        />
      </div>
    </Context.Provider>
  );
}

export default App;




