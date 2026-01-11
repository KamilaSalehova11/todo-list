import TodoListItem from './TodoListItem';


function TodoList({ todoList, completeTodo }) {
  return (
    <div>
      {todoList.length === 0 ? (
        <p>Add todo above to get started</p>
      ) : (
        <ul>
          {todoList.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              completeTodo={completeTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;