import { useState } from 'react';
import bookLogo from './assets/books.png';
import Books from './components/Books';
import { Route, Routes } from 'react-router-dom';
//import Register from './components/Register';
import SingleBook from './components/SingleBook';
//import Account from './components/Account';
import LoginForm from './components/Register';

import SearchBar from './components/SearchBar';

function App() {
  const [token, setToken] = useState(null);
  console.log(token, 'This is the token');

  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      <LoginForm />
      <Routes>
        <Route path="/" element={<Books />} />
        {/* <Route path='/Register' element={<Register />} /> */}
        {/* <Route path='/Account' element={<Account />} /> */}
        <Route path="/:id" element={<SingleBook />} />
      </Routes>
      {/* <Books /> */}
      <p>
        Complete the React components needed to allow users to browse a library
        catalog, check out books, review their account, and return books that
        they've finished reading.
      </p>
      <p>
        You may need to use the `token` in this top-level component in other
        components that need to know if a user has logged in or not.
      </p>
      <p>
        Don't forget to set up React Router to navigate between the different
        views of your single page application!
      </p>
    </>
  );
}

export default App;
