# Book Library Project

A simple web application that allows users to manage their book collection. Built with vanilla JavaScript, HTML, and CSS as part of The Odin Project curriculum.

## Features

- Add new books with title, author, page count, and reading status
- View all books in a table format
- Delete books from the library
- Persistent data storage using browser's local storage
- Modal dialogs for better user interaction

## Technical Details

- Uses ES6 Classes for Book and Library management
- Input validation for all book properties
- Unique ID generation for each book using `crypto.randomUUID()`
- Responsive table design for displaying the book collection
- Modern JavaScript features like optional chaining and array methods

## How to Use

1. Click "Insert new book" to add a book to your library
2. Fill in the book details:
   - Title
   - Author
   - Number of pages
   - Reading status (Read/Not Read)
3. Click "Submit" to add the book
4. Click "See myLibrary" to view your collection
5. Use the "Delete" button to remove books from your library

## Future Improvements

- Add ability to edit existing books
- Add sorting and filtering options
- Implement data persistence using localStorage
- Add search functionality
- Improve UI/UX with animations and better styling