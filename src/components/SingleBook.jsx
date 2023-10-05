/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function SingleBook() {
    const params = useParams();
    const [book, setBook] = useState(null);
    const bookId = params.id;

    useEffect(()=>{

    })

    return 
}