import TodoListItem from './TodoListItem';

function TodoList({ todoList, completeTodo }) {
  const filteredTodoList = todoList.filter((todo) => !todo.isCompleted);

  return (
    <div>
      {filteredTodoList.length === 0 ? (
        <p>Add todo above to get started</p>
      ) : (
        <ul>
          {filteredTodoList.map((todo) => (
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
}export default TodoList;
