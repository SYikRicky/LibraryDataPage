class Book {
    constructor(title, author, pages, isRead) {
        if (typeof title !== "string" || title.trim() === "") {
            throw new Error("Invalid title.");
        }
        if (typeof author !== "string" || author.trim() === "") {
            throw new Error("Invalid author.");
        }
        if (typeof pages !== "number" || isNaN(pages)) {
            throw new Error("Invalid pages.");
        }
        if (typeof isRead !== "boolean") {
            throw new Error("Invalid read status.");
        }
        
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        this.id = crypto.randomUUID();
    }
}

class Library {
    constructor () {
        this.library = [];
    }

    addBook(book) {
        if (!(book instanceof Book)) {
            throw new Error("Invalid book object.");
        }
        this.library.push(book);
    }

    removeBook(id) {
        this.library = this.library.filter(book => book.id !== id);
    }

    getBooks(){
        return [...this.library]
    }
}

// Insert new book

const openInsert = document.querySelector(".insert-book");
const closeInsert = document.querySelector(".close-insert-book");
const insertBookModal = document.querySelector(".insert-book-modal");
const form = document.querySelector("#book-form");

openInsert.addEventListener("click", function() {
    insertBookModal.showModal();
});

closeInsert.addEventListener("click", function() {
    insertBookModal.close();
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.querySelector("#name").value.trim();
    const author = document.querySelector("#author").value.trim();
    const pages = parseInt(document.querySelector("#pages").value);
    const isReadValue = document.querySelector('input[name="readStatus"]:checked')?.value;
    const isRead = isReadValue === "Yes";

    try {
        const book = new Book(title, author, pages, isRead);
        library.addBook(book);
        form.reset();
        insertBookModal.close();
        updateLibraryTable(library);
    } catch (error) {
        alert(error.message);
    }
});

// See myLibrary

const openMyLibrary = document.querySelector(".open-myLibrary");
const closeMyLibrary = document.querySelector(".close-myLibrary");
const myLibraryModal = document.querySelector(".myLibrary-modal");

openMyLibrary.addEventListener("click", function() {
    updateLibraryTable(library);
    myLibraryModal.showModal();
});

closeMyLibrary.addEventListener("click", function() {
    myLibraryModal.close();
});

function updateLibraryTable(library) {
    if (!(library instanceof Library)) {
        throw new Error("Invalid Library.");
    }
    
    const bookList = library.getBooks();

    const table = document.querySelector(".myLibrary-modal table");

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    
    bookList.forEach(book => {
        const row = table.insertRow();
        const titleCell = row.insertCell();
        titleCell.textContent = book.title;

        const authorCell = row.insertCell();
        authorCell.textContent = book.author;

        const pagesCell = row.insertCell();
        pagesCell.textContent = book.pages;

        const statusCell = row.insertCell();
        statusCell.textContent = book.isRead ? "Read" : "Not Read";

        const actionCell = row.insertCell();
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => {
            library.removeBook(book.id)
            updateLibraryTable(library);
        };
        actionCell.appendChild(deleteButton);
    });
}

const library = new Library();

