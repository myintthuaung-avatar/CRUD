import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';

export default function UserForm({ setUsers }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleAdd = () => {
    if (!name || !age) return;
    setUsers(prev => [
      ...prev,
      { id: Date.now(), name, age: parseInt(age) }
    ]);
    setName('');
    setAge('');
  };

  return (
    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Age"
        variant="outlined"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <Button variant="contained" onClick={handleAdd}>
        Add User
      </Button>
    </Stack>
  );
}
