import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TodoList from '../../components/TodoList';
import App from "../../App.tsx";
import { TODOS } from "../../mocks/constants";

const mockOnToggle = jest.fn();
const mockOnDelete = jest.fn();

test('Изменение статуса задачи в `TodoItem` обновляет состояние в `TodoList`', async () => {
  const response = await fetch('https://api.example.com/todos');
  let responseData = await response.json();

  render(<TodoList 
    todos={responseData} 
    onToggle={mockOnToggle}
    onDelete={mockOnDelete}
  />)
    
  const firstCheckbox = await screen.findByTestId(`toggle-${TODOS[0].id}`);
  expect(firstCheckbox).not.toBeChecked();

  await userEvent.click(firstCheckbox);
 
  expect(mockOnToggle).toHaveBeenCalledTimes(1);
  expect(mockOnToggle).toHaveBeenCalledWith(TODOS[0].id);
});

describe('TodoList API тесты', () => {
  test('Cписок задач корректно отображает переданные задачи', async () => {
    render(<App />);

    TODOS.forEach(async (todo) => {
      let todoItem = await screen.findByTestId(`todo-text-${todo.id}`);
      expect(todoItem).toHaveTextContent(`${todo.text}`);
      todoItem = await screen.findByTestId(`todo-item-${todo.id}`);
      expect(todoItem).toBeInTheDocument();
    })
  })
})