
import  { useState } from "react"
import { Todos } from "./components/Todos"
import { type TodoId } from "./types"
import { type Todo as TodoType  } from "./types"



const mockTodos = [
  {
    id: '1',
    title: 'Aprender React con Typescript',
    completed: true,
  },
  {
    id: '2',
    title: 'Aprender Ingles',
    completed: false,
  },
  {
    id: '3',
    title: 'Merendar',
    completed: false,
  },
]

const App = () : JSX.Element => {
  
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({id}:TodoId):void =>{
    const newTodos = todos.filter((todo)=> todo.id !== id )
    setTodos(newTodos)
    return 
  }

  const handleCompleted = ({id, completed}: Pick<TodoType, 'id' | 'completed'>):void =>{
    const newTodos = todos.map( (todo) => {
      if(todo.id === id){
        return {...todo, completed}
        
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (

      <main>
          <h1>TodoApp TS</h1>
          <div className="todoapp">
            <Todos todos={todos} handleRemove={handleRemove} handleCompleted={handleCompleted} />
          </div>
      </main>
     
      
  
  )
}

export default App
