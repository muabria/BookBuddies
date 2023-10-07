import { useState } from 'react';
import bookLogo from './assets/books.png';
import Books from './components/Books';
import SearchBar from './components/SearchBar';
import { AppBar } from '@mui/material';

function App() {
const [token, setToken] = useState(null);

//-----------------------Search-----------------------
const [searchedBook, setSearchedBook] = useState(null);
const handleSubmit = async (searchText) => {
  console.log("Book Searched is " + searchText)
  await //API (searchText);
  setSearchedBook(searchText)
}
  return (
    <>
    <AppBar>Place Holder Nav</AppBar>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      <SearchBar/>
      <Books />

      
      {/*<p>
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
  </p>*/}
    </>
  );
}

export default App;
