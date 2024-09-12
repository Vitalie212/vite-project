import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { Container, Typography } from '@mui/material';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
  timestamp: string;  
}

const TodoApp: React.FC = () => {
  console.log('TodoApp rendered');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    const timestamp = new Date().toLocaleTimeString();  
    setTodos([...todos, { id: Date.now(), task, completed: false, timestamp }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        TODO App
      </Typography>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </Container>
  );
};

export default TodoApp;
