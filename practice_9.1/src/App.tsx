import { useState, useCallback } from 'react';
import InputForm from './InputForm';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Fix performance', completed: false },
  ]);

  const toggleTodo = (id: any) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const addItem = useCallback((text: any) => {
    setTodos(prevItems => [...prevItems, { id: Date.now(), text, completed: false  }]);
  }, []);

  return (
    <div>
      <InputForm onAdd={addItem} />
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onClick={() => toggleTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;