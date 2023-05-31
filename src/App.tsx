import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/Todo';

function App() {
  const [todoItems, setTodoItems] = useState(new Array<Todo>())
  const addTodo = (text: string) => {
    setTodoItems(prevTodos => prevTodos.concat(new Todo(text)))
  }
  const deleteTodo = (id: string) => {
    setTodoItems(prevTodos => prevTodos.filter(todo => todo.key !== id))
  }
  return (
    <>
      <NewTodo addTodo={addTodo} />
      <Todos items={todoItems} deleteTodo={deleteTodo}/>
    </>
  );
}

export default App;
