import { TodosContext } from '../store/todos-context'
import styles from './NewTodo.module.css'

import { useContext, useRef } from "react"

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext)
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    const submithandler = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredText = todoTextInputRef.current!.value
        if(enteredText.trim().length === 0){
            return
        }
        todosCtx.addTodo(enteredText)
    }
    return (
        <form onSubmit={submithandler} className={styles.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef}/>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default NewTodo