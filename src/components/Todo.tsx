import { TodoId, TodoCompleted, Todo as TodoType } from "../types"

interface props extends TodoType {
    handleRemove : ({id}:TodoId)=> void
    handleCompleted : ({id, completed}: {id:TodoId, completed:TodoCompleted}) => void
}

export const Todo: React.FC<props> = ({id, title, completed, handleRemove, handleCompleted}) =>{

    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>):void=>{
        handleCompleted({
            id,
            completed: event.target.checked
        })
    }

    return(
        <div>
            <input 
            type="checkbox" 
            className="toggle" 
            checked={completed}
            onChange={ handleChangeCheckbox }/>

            <label >{title}</label>
            <button className="destroy" onClick={ ()=>{handleRemove({id})}  }>
                   
            </button>
        </div>
    )
}