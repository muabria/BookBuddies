import { useState, useEffect } from 'react';
import bookLogo from './assets/books.png';
import { Button } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { setToken } from './redux/authTokenSlice';
import { useSelector, useDispatch } from 'react-redux';
import Books from './components/Books';
import SingleBook from './components/SingleBook';
//import Account from './components/Account';
import SearchBar from './components/SearchBar';
import { AppBar, Typography } from '@mui/material';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';

import Navbar from './components/Navigations';
function App() {
  const token = useSelector((state) => state.token);
  console.log(token, 'This is the token');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/Register');
    } else {
      navigate('/Login');
    }
  }, [token]);



  return (
    <>

      <Navbar />

      <Typography variant="h3" textAlign="center" sx={{ my: 5 }}>
        <img id="logo-image" src={bookLogo} />
        Library App
      </Typography>

      <Books />

      {token && (
        <Button onClick={() => dispatch(setToken({ token: null }))}>
          Logout
        </Button>
      )}

      <Routes>

        <Route path="/" element={<Books />} />
        <Route path="/SingleBook" element={<SingleBook />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

      </Routes>

    </>
  );
}

export default App;
