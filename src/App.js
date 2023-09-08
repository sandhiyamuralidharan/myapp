
import { useState } from 'react';
import './App.css';

import Todo from './components/Todo';
import Reference from './components/Reference';
import List from './components/List';


function App() {
  const [todo,setTodo]=useState(["todo1","todo2"]);
  const[count,setCount]=useState(0);
let changeTodo=()=>{
  setTodo([...todo,"todo3"])
}

  let increment=()=>{
    setCount(count+1);
  }
  return (
    <div className="App">
      <h1>React Memo</h1>
      <Todo todo={todo}/>
      <button onClick={changeTodo}>click</button>
      <h1>{count}</h1>
      <button onClick={increment}>click</button>
     <Reference/>
     <List/>
    </div>
  );
}

export default App;
