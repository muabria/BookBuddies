/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
//import {useParams} from 'react-router-dom'
//import { useEffect, useState } from 'react'
import { useGetSingleBookQuery } from '../redux/api.js';
import { useParams } from 'react-router-dom';
import { Typography, Stack, Card, CardContent, Button, Fab, Box } from '@mui/material';

export default function SingleBook() {
    const params = useParams();
    const bookId = params.id;

    const {data, error, isLoading} = useGetSingleBookQuery(bookId);
    console.log(data);

    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }

    return (
        <div>
          <Card>
            <Typography variant="h3">{data.book.title}</Typography>
            <Typography varaint="h4">{data.book.author}</Typography>
            <Typography varaint="h5">Summary:</Typography>
            <Typography varaint="p">{data.book.description}</Typography>
            {book.available
                  ? <Fab variant="extended" color="primary">Available</Fab>
                  : <Fab variant="extended" disabled aria-label>Checked Out</Fab>}
            <img src={data.book.coverimage} alt={`${data.book.title}'s cover`} />
            </Card>
        </div>
    )
}