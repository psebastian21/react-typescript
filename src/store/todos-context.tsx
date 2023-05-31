import { PropsWithChildren, createContext } from "react";
import Todo from "../models/Todo";
import { useState } from "react";

interface TodosContextType {
    items: Todo[]
    addTodo: (text: string) => void
    deleteTodo: (id:string) => void
}

export const TodosContext = createContext<TodosContextType>({
    items: new Array<Todo>(),
    addTodo: () => {},
    deleteTodo: (id: string) => {}
})

const TodosContextProvider: React.FC<PropsWithChildren> = (props) => {
    const [todoItems, setTodoItems] = useState(new Array<Todo>())
    const addTodo = (text: string) => {
      setTodoItems(prevTodos => prevTodos.concat(new Todo(text)))
    }
    const deleteTodo = (id: string) => {
      setTodoItems(prevTodos => prevTodos.filter(todo => todo.key !== id))
    }

    const contextValue: TodosContextType = {
        items: todoItems,
        addTodo: addTodo,
        deleteTodo: deleteTodo
    }

    return (
        <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
    )
}

export default TodosContextProvider