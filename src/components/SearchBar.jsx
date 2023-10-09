import { TextField, Button, Typography, Card, Fab, Stack } from '@mui/material';
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

  const clearForm = () => {
    setShowBook(false) && setSearchText('')
  }

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
            <Card sx={{ maxWidth: 600, mx:50 ,my: 2, p: 3 }}>
              <Stack direction="row" spacing={4}>
                {book.available
                  ? <Fab variant="extended" color="primary">Available</Fab>
                  : <Fab variant="extended" disabled aria-label>Checked Out</Fab>}
                <Typography variant="h3">
                  {book.title}
                </Typography>
              </Stack>
              <img src={book.coverimage} alt={book.title} height="140" width="100" />
              <Typography>
                {book.description}
              </Typography>
              <Button
                variant='contained'
                sx={{ my: 3 }}
                onClick={clearForm}>
                Close
              </Button>
            </Card>
          </div>
        ))}
    </>
  );
};
export default SearchBar;
