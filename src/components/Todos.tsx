import { useContext } from 'react'
import Todo from './Todo'
import styles from './Todos.module.css'
import { TodosContext } from '../store/todos-context'

const Todos: React.FC = (props) => {
    const todosCtx = useContext(TodosContext)
    return (
        <ul className={styles.todos}>
            {todosCtx.items.map(item => <Todo key={item.key} text={item.text} deleteTodo={todosCtx.deleteTodo.bind(null, item.key)}/>)}
        </ul> 
    )
}

export default Todos