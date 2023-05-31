import styles from './NewTodo.module.css'

import { useRef } from "react"

interface NewTodoProps {
    addTodo: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    const submithandler = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredText = todoTextInputRef.current!.value
        if(enteredText.trim().length === 0){
            return
        }
        props.addTodo(enteredText)
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