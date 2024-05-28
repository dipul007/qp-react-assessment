import React from 'react';
import styled from 'styled-components';
import { FixedSizeList as List } from 'react-window';
import { Todo } from './types';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
}

const ListWrapper = styled.div`
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
`;

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
        <div style={style}>
            <TodoItem todo={todos[index]} toggleTodo={toggleTodo} />
        </div>
    );

    return (
        <ListWrapper>
            <List
                height={600}
                itemCount={todos.length}
                itemSize={45}
                width={'100%'}
            >
                {Row}
            </List>
        </ListWrapper>
    );
};

export default TodoList;
