/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
//import {useParams} from 'react-router-dom'
//import { useEffect, useState } from 'react'
import { useGetSingleBookQuery } from '../api/singleBookApi';

export default function SingleBook() {
    //const params = useParams();
    // const [book, setBook] = useState(null);
    // const bookId = params.id;
    const {data, error, isLoading} = useGetSingleBookQuery();
    console.log(data);
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }

    return (
        <div>
            <h1>{data.title}</h1>
            <h2>{data.author}</h2>
            <h4>Summary:</h4>
            <p>{data.description}</p>
            <p>Available:</p>
            {data.available ? <p>yes</p> : <p>no</p>}
            <img src={data.coverimage}/>
        </div>
    )
}