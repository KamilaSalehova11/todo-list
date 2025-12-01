import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

function App() {
  const todos = [
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Build a Todo app' },
    { id: 3, title: 'Celebrate' },
  ];

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
