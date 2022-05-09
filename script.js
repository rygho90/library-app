const libraryContainer = document.querySelector(".library-container");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  // do stuff here
}

function displayBooks(myLibrary) {
    while (libraryContainer.firstChild) {
        libraryContainer.removeChild(libraryContainer.firstChild);
    }

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const read = document.createElement('div');
        let readStatus = false;
        if (book.read) readStatus = true;

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        if (readStatus) {
            read.textContent = "Read"
        } else {
            read.textContent = "Not Read"
        }        
        
        card.append(title);
        card.append(author);
        card.append(pages);
        card.append(read);
        libraryContainer.append(card);
    });
}

let testBook1 = new Book("Title1", "Author1", "Pages1", true)
let testBook2 = new Book("Title2", "Author2", "Pages2", false)
myLibrary.push(testBook1)
myLibrary.push(testBook2)
displayBooks(myLibrary)

myLibrary.pop(testBook1);

displayBooks(myLibrary)