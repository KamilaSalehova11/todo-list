// App.jsx
import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(text) {
    const newTodo = {
      id: crypto.randomUUID(), // or Date.now()
      title: text, // use "title" to match TodoListItem
      isCompleted: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
  }

  function completeTodo(id) {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: true } // <- always mark complete
          : todo
      )
    );
  }


  return (
    <div className="App">
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} completeTodo={completeTodo} />
    </div>
  );
}

export default App;
