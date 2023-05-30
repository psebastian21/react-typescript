import { v4 as uuidv4 } from 'uuid'

interface TodoItems {
    items: string[]
}

const Todos: React.FC<TodoItems> = (props) => {
    return (
        <ul>
            {props.items.map(item => <li key={uuidv4()}>{item}</li>)}
        </ul>
    )
}

export default Todos