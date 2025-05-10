import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TodoList from '../../components/TodoList';
import { server } from '../../mocks/server';
import { http, HttpResponse } from 'msw'

const mockOnToggle = jest.fn();
const mockOnDelete = jest.fn();

const mockTodos = [
    { id: 1, text: 'First todo', completed: false },
    { id: 2, text: 'Second todo', completed: true },
];

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Изменение статуса задачи в `TodoItem` обновляет состояние в `TodoList`', async () => {
    render(
      <TodoList 
        todos={mockTodos} 
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
      />
    );
    
    const firstCheckbox = screen.getByTestId(`toggle-${mockTodos[0].id}`);
    expect(firstCheckbox).not.toBeChecked();
    
    await userEvent.click(firstCheckbox);
    
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
    expect(mockOnToggle).toHaveBeenCalledWith(mockTodos[0].id);
});

describe('TodoList API тесты', () => {
  test('Cписок задач корректно отображает переданные задачи', async () => {

    const response = await fetch('https://api.example.com/todos');
    let responseData = await response.json();

    render(<TodoList 
      todos={responseData} 
      onToggle={mockOnToggle}
      onDelete={mockOnDelete}
    />)
    
    await waitFor(() => {
      responseData.forEach(todo => {
        expect(screen.getByTestId(`todo-item-${todo.id}`)).toBeInTheDocument();
        expect(screen.getByTestId(`todo-text-${todo.id}`)).toHaveTextContent(`${todo.text}`);
      });
    })
  })
})