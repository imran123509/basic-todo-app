import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CreateTodo} from './components/CreatedTodo'
import {Todos} from './components/Todos'
//app to



function App() {

  
  return (
    <div>
      <CreateTodo/>
      <Todos/>
    </div>
  )
}

export default App
