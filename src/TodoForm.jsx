import { useRef } from 'react';

function TodoForm({ onAddTodo }) {
  const todoTitleInput = useRef(null); // step 2 will use this

  function handleAddTodo(event) {
    event.preventDefault();

    const title = event.target.title.value; // use the name

    if (!title.trim()) {
      return;
    }

    onAddTodo(title);
    event.target.title.value = ''; // clear with the name
    todoTitleInput.current.focus(); // step 2: refocus
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        name="title" // important for event.target.title
        ref={todoTitleInput} // important for focus()
      />
      <button>Add Todo</button>
    </form>
  );
}

export default TodoForm;
