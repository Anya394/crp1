import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TodoItem from '../../components/TodoItem';

const mockTodo = {
    id: 7,
    text: 'Test todo',
    completed: false
};
const mockTodoChecked = {
    id: 8,
    text: 'Test todo 2',
    completed: true
};
const mockOnToggle = jest.fn();
const mockOnDelete = jest.fn();

test ("Задача отображается корректно", () => {
    render(
        <TodoItem
            todo={mockTodo} 
        />
    );

    expect(screen.getByTestId(`todo-text-${mockTodo.id}`));
    expect(screen.getByRole('checkbox')).not.toBeChecked();
});

test ("Кнопка удаления вызывает соответствующий обработчик", async () => {
    render(
        <TodoItem
            todo={mockTodo} 
            onDelete={mockOnDelete}
        />
    );
  
    await userEvent.click(screen.getByTestId(`delete-${mockTodo.id}`));
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
});

test ("Переключение статуса работает", async () => {
    const { rerender } = render(
        <TodoItem
            todo={mockTodo} 
            onToggle={mockOnToggle}
        />
    );
  
    var checkbox = screen.getByTestId(`toggle-${mockTodo.id}`);

    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
    expect(mockOnToggle).toHaveBeenCalledWith(mockTodo.id);

    rerender(
        <TodoItem
            todo={mockTodoChecked} 
            onToggle={mockOnToggle}
        />
    );

    expect(checkbox).toBeChecked();
});