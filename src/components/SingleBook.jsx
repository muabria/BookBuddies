/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function SingleBook() {
    const params = useParams();
    const [book, setBook] = useState(null);
    const bookId = params.id;

    useEffect(()=>{

    })

    return (
        <div>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <h4>Summary:</h4>
            <p>{book.description}</p>
            <p>Available:</p>
            {book.available ? <p>yes</p> : <p>no</p>}
            <img src={book.coverimage}/>
        </div>
    )
}