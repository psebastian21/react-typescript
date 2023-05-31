import styles from './Todo.module.css'

interface TodoProps {
    text: string
    deleteTodo: () => void
}

const Todo: React.FC<TodoProps> = props => {
    const itemOnClick = () => {
        props.deleteTodo()
    }
    return (
        <li className={styles.item} onClick={itemOnClick}>{props.text}</li>
    )
}

export default Todo