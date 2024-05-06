import { type ListOfTodos } from "../types"

interface props{
    todos: ListOfTodos 
}


export const Todos: React.FC <props> = ({todos})=>{
    return(
        <ul>
            {todos.map((todo)=>{
                return <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>{todo.title}</li>
            })}
        </ul>
    )
}