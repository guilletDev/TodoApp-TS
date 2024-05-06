import { useState } from "react"
import { Todos } from "./components/Todos"


const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false,
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false,
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false,
  },
]

const App = () => {
  
  const [todos] = useState(mockTodos)
  return (
    <>
      <h1>Todo Ts</h1>
      <Todos todos={todos} />
    </>
  )
}

export default App
