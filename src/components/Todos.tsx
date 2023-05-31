import TodoModel from '../models/Todo'
import Todo from './Todo'
import styles from './Todos.module.css'

interface TodosProps {
    items: TodoModel[]
    deleteTodo: (id: string) => void
}

const Todos: React.FC<TodosProps> = (props) => {
    return (
        <ul className={styles.todos}>
            {props.items.map(item => <Todo key={item.key} text={item.text} deleteTodo={props.deleteTodo.bind(null, item.key)}/>)}
        </ul>
    )
}

export default Todos