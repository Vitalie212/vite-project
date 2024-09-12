import React from 'react';
import { List, ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoListProps {
  todos: { id: number; task: string; completed: boolean; timestamp: string }[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id} dense button onClick={() => onToggle(todo.id)}>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': `checkbox-list-label-${todo.id}` }}
          />
          <ListItemText
            primary={todo.task}
            secondary={`Added at: ${todo.timestamp}`} 
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => onDelete(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
