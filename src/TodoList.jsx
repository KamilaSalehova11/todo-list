import TodoListItem from './TodoListItem';


function TodoList({ todoList, completeTodo }) {
  return (
    <div>
      {todoList.length === 0 ? (
        <p>Add todo above to get started</p>
      ) : (
        todoList.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;