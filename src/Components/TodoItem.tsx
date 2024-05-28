import React from 'react';
import styled from 'styled-components';
import { Todo } from './types';

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
}

interface StyledProps {
    completed: boolean;
}

const Item = styled.div<StyledProps>`
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    background: ${(props) => (props.completed ? '#e0ffe0' : '#fff')};

    &:hover {
        background: #f9f9f9;
    }
`;

const Checkbox = styled.input`
    margin-right: 10px;
`;

const Text = styled.span<StyledProps>`
    font-size: 16px;
    flex-grow: 1;
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
    color: ${(props) => (props.completed ? '#888' : '#000')};
`;

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
    return (
        <Item completed={todo.completed}>
            <Checkbox
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <Text completed={todo.completed}>{todo.text}</Text>
        </Item>
    );
};

export default React.memo(TodoItem);
