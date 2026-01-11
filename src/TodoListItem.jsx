function TodoListItem({ todo, completeTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => completeTodo(todo.id)}
        />
        <span
          style={{
            textDecoration: todo.isCompleted ? 'line-through' : 'none',
          }}
        >
          {todo.title}
        </span>
      </label>
    </li>
  );
}

export default TodoListItem;
