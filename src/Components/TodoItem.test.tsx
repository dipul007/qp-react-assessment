import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';
import { Todo } from './types';

describe('TodoItem Component', () => {
    test('renders TodoItem and toggles checkbox', () => {
        const todo: Todo = { id: 1, text: 'Test Todo', completed: false };
        const toggleTodo = jest.fn();

        render(<TodoItem todo={todo} toggleTodo={toggleTodo} />);

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();

        fireEvent.click(checkbox);
        expect(toggleTodo).toHaveBeenCalledWith(1);
    });

    test('displays the correct text', () => {
        const todo: Todo = { id: 1, text: 'Test Todo', completed: false };
        const toggleTodo = jest.fn();

        render(<TodoItem todo={todo} toggleTodo={toggleTodo} />);
        expect(screen.getByText('Test Todo')).toBeInTheDocument();
    });

    test('applies line-through style when completed', () => {
        const todo: Todo = { id: 1, text: 'Test Todo', completed: true };
        const toggleTodo = jest.fn();

        render(<TodoItem todo={todo} toggleTodo={toggleTodo} />);
        expect(screen.getByText('Test Todo')).toHaveStyle('text-decoration: line-through');
    });
});
