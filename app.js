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
    }

};

library.markAsRead('Dune');
library.markAsRead('Harry Potter');