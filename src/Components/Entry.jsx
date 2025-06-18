import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  Paper
} from '@mui/material';

export default function EntryFormFunction() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    type: 'Income',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // ✅ Optionally navigate after submit:
    // navigate(-1);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 1000, mx: 'auto', mt: 5 }}>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Typography variant="h6" gutterBottom>
          Entry Form
        </Typography>
        <Stack>
          <IconButton
            aria-label="back"
            sx={{ color: 'rgb(53 141 100)' }}
            onClick={() => navigate(-1)} // ✅ Go back when icon clicked
          >
            <ArrowCircleUpIcon />
          </IconButton>
        </Stack>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
        />
        <TextField
          label="Amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          type="number"
          required
        />
        <TextField
          label="Type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          select
          required
        >
          <MenuItem value="Income">Income</MenuItem>
          <MenuItem value="Expense">Expense</MenuItem>
        </TextField>

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: 'rgb(53, 141, 100)',
            alignSelf: 'flex-end'
          }}
        >
          Submit
        </Button>
      </Box>
    </Paper>
  );
}
