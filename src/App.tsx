import Todos from './components/Todos';

function App() {
  const todoItems = ['Learn React', 'Learn Typescript']
  return (
    <Todos items={todoItems} />
  );
}

export default App;
