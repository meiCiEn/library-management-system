const library = {
    // array to store book objects
    _books: [
        {
            title: "Dune",
            author: "Frank Herbert",
            pages: 412,
            isRead: false
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            pages: 432,
            isRead: true
        },
        {
            title: "1984",
            author: "George Orwell",
            pages: 328,
            isRead: false
        }
    ], 
    get getBooks() {
        return this._books;
    },
    // create a new book object, add it to the _books array
    addBook(title, author, pages, isRead) {
        let book = {
            title: title,
            author: author,
            pages: pages,
            isRead: isRead
        };
        this._books.push(book);
    },
    
    markAsRead(bookTitle) {
        // iterate through the _books array and find the book with the matching title
        for (const book of this._books) {
            // update that book's isRead property to true
            if (bookTitle === book.title) {
                book.isRead = true;
                console.log(`"${bookTitle}" marked as read.`);
                return;
            } 

        }
            console.log(`"${bookTitle}" not found.`);
    }, 

    // return a new array containing only the books that have isRead set to false
    listUnreadBooks() {
        const unreadBooks = [];
        for (const book of this._books) {
            if (book.isRead === false) {
                unreadBooks.push(book);
            }
        }
        console.log(unreadBooks);
    },

    // remove the book with the matching title from the _books array
    removeBook(bookTitle) {
        // create array with books to keep
        let booksToKeep = [];
        // loop through each book in the current _books array
        for (let i = 0; i < this._books.length; i++) {
            // get the current book object
            const book = this._books[i];
            // check if bookTitle does NOT match books we want to keep
            if (book.title !== bookTitle) {
                // add to booksToKeep array
                booksToKeep.push(book);
            }
        }
        // after checking through all books, replace this._book array with booksToKeep
        this._books = booksToKeep;

    }

};

library.markAsRead('Dune');
library.markAsRead('Harry Potter');
library.listUnreadBooks();
library.removeBook('1984'); // Remove an existing book

console.log("\n--- Final Library State ---");
console.log(library.getBooks);