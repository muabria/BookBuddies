/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { useGetBooksQuery } from '../redux/api';

import SearchBar from './SearchBar';
import { Typography, Stack, Card, CardContent, Button, Fab, Box } from '@mui/material';

const Books = () => {
  // GOAL: useGetBooksQuery that gets the data, isLoading, error
  const { data, error, isLoading } = useGetBooksQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Display the books if data is available
  return (
    <div>
      <Typography variant="h4" textAlign="center" sx={{m: 2}}>
        Explore Our Books:
      </Typography>
      <Box textAlign="center">
        <SearchBar />
      </Box>
      <Stack direction="row" useFlexGap flexWrap="wrap">
        {data &&
          data.books.map((book) => (
            <div key={book.id}>
              <Card sx={{ m: 3, p: 3, maxWidth: 250 }}>

                <Typography variant="h4" sx={{ mx: 2 }}>
                  {book.title}
                </Typography>
                {book.available
                  ? <Fab variant="extended" color="primary">Available</Fab>
                  : <Fab variant="extended" disabled aria-label>Checked Out</Fab>}

                <CardContent>

                  <img src={book.coverimage} alt={book.title} height="140" width="100" />
                </CardContent>
                
                  <Button 
                  variant="contained"
                  onClick={() =>{navigate(`SingleBook/${book.id}`)}}>
                    See Details
                  </Button>
              </Card>
            </div>
          ))}
      </Stack>
    </div>
  );
};

export default Books;
