import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface TodoInputProps {
  onAdd: (task: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      onAdd(task);
      setTask(''); 
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
      <TextField
        label="Task Nou"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        sx={{ mr: 2, width: '300px' }}
      />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add
      </Button>
    </Box>
  );
};

export default TodoInput;
