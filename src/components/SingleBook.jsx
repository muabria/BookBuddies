/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
//import {useParams} from 'react-router-dom'
//import { useEffect, useState } from 'react'
import { useGetSingleBookQuery, useCheckoutMutation } from '../redux/api.js';
import { useParams } from 'react-router-dom';

export default function SingleBook() {
    const params = useParams();
    const bookId = params.id;
    const [checkout] = useCheckoutMutation();

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
            <h1>{data.book.title}</h1>
            <h2>{data.book.author}</h2>
            <button onClick={checkout(bookId)}>Check out</button>
            <h4>Summary:</h4>
            <p>{data.book.description}</p>
            <h4>Available:</h4>
            {data.book.available ? <p>yes</p> : <p>no</p>}
            <img src={data.book.coverimage} alt={`${data.book.title}'s cover`} />
        </div>
    )
}