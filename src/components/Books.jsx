/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import React, { useState, useEffect } from 'react';

import { useGetBooksQuery } from '../redux/booksApi';

//todo add css

function Books() {
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
      {data &&
        data.data.posts.map((post) => (
          <div key={post._id} className={styles.post}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
    </div>
  );
}

export default Books;
