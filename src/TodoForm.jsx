import { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');

  function handleAddTodo(event) {
    event.preventDefault();

    const trimmed = title.trim();
    if (!trimmed) return;

    onAddTodo(trimmed);
    setTitle(''); // clear input after submit
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a todo"
      />
      <button type="submit" disabled={title.trim() === ''}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
