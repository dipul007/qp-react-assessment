import React, { useState } from 'react';
import styled from 'styled-components';

interface AddTodoProps {
    addTodo: (text: string) => void;
}

const Form = styled.form`
    display: flex;
    margin-top: 20px;
`;

const Input = styled.input`
    flex-grow: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button type="submit">Add Todo</Button>
        </Form>
    );
};

export default AddTodo;
