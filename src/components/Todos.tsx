import Todo from '../models/Todo'

interface TodosProps {
    items: Todo[]
}

const Todos: React.FC<TodosProps> = (props) => {
    return (
        <ul>
            {props.items.map(item => <li key={item.id}>{item.text}</li>)}
        </ul>
    )
}

export default Todos