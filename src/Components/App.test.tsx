// src/App.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import App from './../App';

describe('App Component', () => {
    test('renders the app and adds todos', () => {
        render(<App />);

        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button', { name: /add todo/i });

        fireEvent.change(input, { target: { value: 'Test Todo 1' } });
        fireEvent.click(button);

        fireEvent.change(input, { target: { value: 'Test Todo 2' } });
        fireEvent.click(button);

        expect(screen.getByText('Test Todo 1')).toBeInTheDocument();
        expect(screen.getByText('Test Todo 2')).toBeInTheDocument();
    });

    test('toggles todo completion status', () => {
        render(<App />);

        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button', { name: /add todo/i });

        fireEvent.change(input, { target: { value: 'Test Todo' } });
        fireEvent.click(button);

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();

        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
    });
});
