export default function TodoItem({ todo, onToggle, onDelete }) {
    return (
      <div className={`todo-item ${todo.completed ? 'completed' : ''}`} data-testid={`todo-item-${todo.id}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          data-testid={`toggle-${todo.id}`}
          className="checkbox"
        />
        <span data-testid={`todo-text-${todo.id}`} className="todo-text">{todo.text}</span>
        <button 
          onClick={() => onDelete(todo.id)}
          data-testid={`delete-${todo.id}`}
          className="delete"
        >
          Delete
        </button>
      </div>
    );
  }