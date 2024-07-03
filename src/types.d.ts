export interface Todo {
    id:string,
    title: string,
    completed: boolean,
}
export type ListOfTodos = Todo[] 

export type TodoId = pick<Todo, 'id'>
export type TodoTitle = pick<Todo, 'title'>
export type TodoCompleted = pick<Todo, 'completed'>

