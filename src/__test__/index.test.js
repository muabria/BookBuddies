

const {
    getBooks,
    bookSortAndFilter
} = require('./index');


// TESTING TODOS

// SORT BOOKS - sort by titles whether by order, length, etc 
// 'REMOVE' SPACING - remove the spacing from a string 

describe("bookSortAndFilter", () => {
    it('is a function', () => {
        expect(typeof bookSortAndFilter).toBe("function");
    });
});


describe("sort", () => {
    it("sorts by title", () => {
        const bookSortAndFilter = (getBooks.title, "title");
        const result = getBooks(bookSortAndFilter);

        expect(result[0].title).toBe("Pride and Prejudice");
        expect(result[1].title).toBe("To Kill a Mockingbird");
        expect(result[2].title).toBe("The Fellowship of the Ring");
        expect(result[3].title).toBe("The Return of the King");
        expect(result[4].title).toBe("The Great Gatsby");
        expect(result[5].title).toBe("The Two Towers");
        expect(result[6].title).toBe("The Catcher in the Rye");
        expect(result[7].title).toBe("1984");
    });
})