/* TODO - add your code to create a functional React component that renders a registration form */

import { useState, useEffect } from 'react';

import {
  Stack,
  Button,
  Paper,
  TextField,
  Typography,
  Link,
} from '@mui/material';
import { useRegisterMutation, useLoginMutation } from '../redux/api';

const LoginForm = () => {
  // TODO: call the mutation hook
  const [register, result] = useRegisterMutation();
  const [login] = useLoginMutation();

  // should be either login or register, to match the API routes
  const [type, setType] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (type === 'register') {
      register({ user: { username, password } });
    } else {
      login({ user: { username, password } });
    }
  };
  return (
    <Paper elevation={6} sx={{ width: '50%', padding: 4, margin: '14px auto' }}>
      <form onSubmit={handleSubmit}>
        <Stack direction="column">
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
            {type === 'login' ? 'Log In' : 'Register'}
          </Typography>
          <TextField
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            sx={{ margin: '8px 0' }}
          />
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
          {type === 'register' && (
            <TextField
              label="Re-Enter Password"
              onChange={(e) => setRepeatPassword(e.target.value)}
              value={repeatPassword}
              type="password"
              error={
                !!(password && repeatPassword && password !== repeatPassword)
              }
              helperText={
                password && repeatPassword && password !== repeatPassword
                  ? 'Password must match'
                  : null
              }
            />
          )}
        </Stack>
        <Button
          variant="contained"
          size="large"
          sx={{ margin: '8px 0', width: '100%' }}
          type="submit"
        >
          {type === 'login' ? 'Log In' : 'Register'}
        </Button>
        {type === 'login' ? (
          <Typography>
            Need to create an account?{' '}
            <Link href="#" onClick={() => setType('register')}>
              Register
            </Link>
          </Typography>
        ) : (
          <Typography>
            Already have an account?{' '}
            <Link href="#" onClick={() => setType('login')}>
              Log In
            </Link>
          </Typography>
        )}
      </form>
    </Paper>
  );
};

export default LoginForm;
