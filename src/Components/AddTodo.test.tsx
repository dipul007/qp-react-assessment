import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from './AddTodo';

describe('AddTodo Component', () => {
    test('allows users to add a new todo', () => {
        const addTodo = jest.fn();

        render(<AddTodo addTodo={addTodo} />);

        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button', { name: /add todo/i });

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(button);

        expect(addTodo).toHaveBeenCalledWith('New Todo');
        expect(input).toHaveValue('');
    });

    test('does not add empty todo', () => {
        const addTodo = jest.fn();

        render(<AddTodo addTodo={addTodo} />);

        const button = screen.getByRole('button', { name: /add todo/i });

        fireEvent.click(button);

        expect(addTodo).not.toHaveBeenCalled();
    });
});
