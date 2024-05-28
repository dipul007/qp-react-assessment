import React, { useState } from 'react';
import styled from 'styled-components';
import { Todo } from './Components/types';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
    text-align: center;
    color: #333;
`;

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos((prevTodos) => [newTodo, ...prevTodos]);
    };

    const toggleTodo = (id: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <Container>
            <Header>Todo App</Header>
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </Container>
    );
};

export default App;
