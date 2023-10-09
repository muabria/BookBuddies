
// create a function to sort books
// create a function for book titles 

const getBooks = () => {
    return [
        { 
            title: "Pride and Prejudice",
            author: "Jane Austen"
        }, 
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee"
        },
        { 
            title: "The Fellowship of the Ring",
            author: "J. R. R. Tolkien"
        }, 
        { 
            title: "The Return of the King",
            author: "J. R. R. Tolkien"
        }, 
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald"
        },
        {
            title: "The Two Towers",
            author: "J. R. R. Tolkien"
        },
        {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger"
        },
        {
            title: "1984",
            author: "George Orwell"
        }]
}
// const bookList = getBooks.map(getBooks => {return [getBooks.title, getBooks.author]}); console.log(bookList);


function bookSortAndFilter(books, sortBy) {

    // if any of the books 
    // do not have title, author
    // Update this (and relevant test) to throw an error
    if (!books.every(book => book.title && book.author)) {
        throw new Error("Invalid book objects provided");
    }
    let results = books;
    // allow user to specify sort by title OR author

        if (sortBy === "title") {
            return books.title.localeCompare(books.title)

            };
    }





 module.exports = { 
    getBooks,
    bookSortAndFilter
};
