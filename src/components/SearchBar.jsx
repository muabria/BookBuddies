import { TextField, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useGetBooksQuery } from '../redux/api';

const SearchBar = ({ onSubmit }) => {
  //data
  const { data, error, isLoading } = useGetBooksQuery();
  const [searchText, setSearchText] = useState('');
  //state to show searched
  const [showBook, setShowBook] = useState(false);

  if (isLoading) {
    return <div> Loading... </div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredBooks = data.books.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(filteredBooks);

  return (
    <>
      {/*-----------------------------------------TEXT FIELD--------------------------------------- */}
      <TextField
        type="text"
        label="Search Book"
        size="small"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        sx={{
          backgroundColor: 'white',
        }}
      />
      {/*-----------------------------------------SUBMIT BUTTON--------------------------------------- */}
      <Button
        variant="contained"
        onClick={() => onSubmit(searchText && setShowBook(true))}
        sx={{ ml: 2 }}
      >
        <SearchIcon />
      </Button>

      {showBook &&
        filteredBooks.map((book) => (
          <div key={book.id}>
            <h3>
              {book.title}
              {book.description}
            </h3>
          </div>
        ))}
    </>
  );
};
export default SearchBar;
