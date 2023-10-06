import { useState } from 'react';
import bookLogo from './assets/books.png';
import { Button } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { setToken } from './redux/authTokenSlice';
import { useSelector, useDispatch } from 'react-redux';
import Books from './components/Books';
import SingleBook from './components/SingleBook';
//import Account from './components/Account';
import SearchBar from './components/SearchBar';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';

function App() {
  const token = useSelector((state) => state.token);
  console.log(token, 'This is the token');
  const dispatch = useDispatch();

  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      {token ? <LoginForm /> : <RegisterForm />}
      {token && (
        <Button onClick={() => dispatch(setToken({ token: null }))}>
          Logout
        </Button>
      )}

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/Login" element={<LoginForm />} />
        {/* <Route path='/Account' element={<Account />} /> */}
        <Route path="/:id" element={<SingleBook />} />
      </Routes>
    </>
  );
}

export default App;
