/* TODO - add your code to create a functional React component that renders a registration form */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button, Paper, TextField } from '@mui/material';
import { useRegisterMutation } from '../redux/api';

const RegisterForm = () => {
  const [register, result] = useRegisterMutation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setRepeatPassword('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    register({ user: { email, password } });
  };
  return (
    <Paper elevation={6} sx={{ width: '50%', padding: 4, margin: '14px auto' }}>
      <form onSubmit={handleSubmit}>
        <Stack direction="column">
          <>
            <TextField
              label="First Name"
              onChange={(e) => setFirstName(e.target.value)} // do i leave it out?
              value={firstName}
              sx={{ margin: '8px 0' }}
            />
            <TextField
              label="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              sx={{ margin: '8px 0' }}
            />
            <TextField
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
          </>
        </Stack>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          sx={{ margin: '8px 0', width: '100%' }}
          type="submit"
        >
          Register
        </Button>
        Already have an account? <Link to="/Login">Log In</Link>
        <br />
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </Paper>
  );
};

export default RegisterForm;
