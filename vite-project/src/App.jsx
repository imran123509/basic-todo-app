import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CreateTodo} from './components/CreatedTodo'
import {Todos} from './components/Todos'
//app to



function App() {

  const [todos, settodos]=useState([]);
  fetch("http://localhost:3000/todos")
  .then(async function(res){
     const json=await res.json();
     settodos(json.todos)
  })
  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}
         
      ></Todos>
    </div>
  )
}

export default App
