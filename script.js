class Library {

    constructor() {
        this.bookList = [];
    }

    addBook() {
        let newTitle = prompt("Book title: ")
        let newAuthor = prompt("Author: ")
        let newPages = prompt("Pages: ")
        let newRead = prompt("Read (Y/N): ")
        if (newRead.toLowerCase() == "y") {
            newRead = true 
        } else newRead = false

        const newBook = new Book(newTitle, newAuthor, newPages, newRead)
        this.bookList.push(newBook)
    }

    removeBook() {

    }

    clearBooks() {
        this.bookList = [];
    }

    displayBooks() {
        while (libraryContainer.firstChild) {
            libraryContainer.removeChild(libraryContainer.firstChild);
        }
    
        this.bookList.forEach(book => {
            const card = document.createElement('div');
            const title = document.createElement('div');
            const author = document.createElement('div');
            const pages = document.createElement('div');
            const read = document.createElement('div');
            const readBtn = document.createElement('button');
            const delBook = document.createElement('button');
    
            title.textContent = book.title;
            author.textContent = book.author;
            pages.textContent = book.pages;
            if (book.read) {
                read.textContent = "Read"
            } else {
                read.textContent = "Not Read"
            }
    
            readBtn.textContent = "Change Read Status"
            readBtn.addEventListener('click', (e) => {
                if (book.read) {
                    book.read = false
                    read.textContent = "Not Read"
                } else {
                    book.read = true
                    read.textContent = "Read"
                }
            })
            
            delBook.textContent = "Delete Book"   
            delBook.addEventListener('click', (e) => {
                console.log(e.target.getAttribute("data-num"))
                this.bookList.pop(e.target.getAttribute("data-num"))
                e.target.parentNode.remove()
            })     
            
            card.append(title);
            card.append(author);
            card.append(pages);
            card.append(read);
            card.append(readBtn);
            card.append(delBook);
            card.classList.add("book-card");
            card.setAttribute("data-num", this.bookList.length)
            libraryContainer.append(card);
        });
    }
}

class Book {

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

const myLibrary = new Library();

const libraryContainer = document.querySelector(".library-container");

const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener('click', () => {
    myLibrary.addBook()
    myLibrary.displayBooks();
})

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener('click', () => {
    myLibrary.clearBooks();
})



