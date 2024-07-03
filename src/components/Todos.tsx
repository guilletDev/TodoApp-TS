import { type ListOfTodos } from "../types"
import { Todo } from "./Todo"
import { TodoId, TodoCompleted } from "../types"

interface props{
    todos: ListOfTodos
    handleRemove : (id: string)=> void
    handleCompleted : ({id, completed}: {id:TodoId, completed:TodoCompleted}) => void
}


export const Todos: React.FC <props> = ({todos, handleRemove, handleCompleted})=>{
    return(
        <ul className="todo-list">
            {todos.map((todo)=>{
                return <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                        key={todo.id}
                        id ={todo.id}
                        title={todo.title}
                        completed = {todo.completed}
                        handleRemove ={handleRemove}
                        handleCompleted ={handleCompleted}
                        
                    
                    />
                </li>
            })}
        </ul>
    )
}