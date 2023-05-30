import Todos from './components/Todos';
import Todo from './models/Todo';

function App() {
  const todoItems = [
    new Todo('Learn React'),
    new Todo('Learn Typescript')
  ]
  return (
    <Todos items={todoItems} />
  );
}

export default App;
