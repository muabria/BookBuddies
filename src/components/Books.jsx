/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import React, { useState, useEffect } from 'react';

import { useGetBooksQuery } from '../api/booksApi';

//todo add css

const Books = () => {
  // GOAL: useGetBooksQuery that gets the data, isLoading, error
  const { data, error, isLoading } = useGetBooksQuery();
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Display the books if data is available
  return (
    <div>
      <h2>hello</h2>
      <h2>list of books</h2>
      {data &&
        data.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Books;
