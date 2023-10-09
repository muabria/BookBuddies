/* TODO - add your code to create a functional React component that renders a login form */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Stack,
  Button,
  Paper,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import { useLoginMutation } from '../redux/api';
import { useSelector } from 'react-redux';

const LoginForm = () => {
  const [login] = useLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const token = useSelector((state) => state.token);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    login({ email, password });
    console.log(token);
  };

  return (
    <Paper elevation={6} sx={{ width: '50%', padding: 4, margin: '14px auto' }}>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2}>
          <Item>
            <TextField
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              sx={{ margin: '8px 0' }}
            />
          </Item>
          <Item>
            <TextField
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              sx={{ margin: '8px 0' }}
              type="password"
              helperText={
                password && password.length < 8 ? 'Password too short' : null
              }
            />
          </Item>
        </Stack>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          sx={{ margin: '8px 0', width: '100%' }}
          type="submit"
        >
          Log in
        </Button>
        <Typography>
          Need to create an account? <Link to="/Register">Register</Link>
        </Typography>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </Paper>
  );
};

export default LoginForm;
