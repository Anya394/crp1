import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import AddTodo from '../../components/AddTodo';

const mockOnAdd = jest.fn();

test ("Ввод текста и отправка формы вызывают добавление задачи", async () => {
    render(
        <AddTodo
            onAdd={mockOnAdd}
        />
    );

    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('add-button');
    const text = 'New task';

    await userEvent.type(input, text)
    await userEvent.click(button);

    expect(mockOnAdd).toHaveBeenCalledTimes(1);
    expect(mockOnAdd).toHaveBeenCalledWith(text);
});

test ("Форма очищается после отправки", async () => {
    render(
        <AddTodo
            onAdd={mockOnAdd}
        />
    );

    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('add-button');
    const text = 'New task';

    await userEvent.type(input, text)
    await userEvent.click(button);

    expect(input).toHaveValue('');
});