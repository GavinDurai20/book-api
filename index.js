const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // ✅ Enable CORS
app.use(express.json()); // ✅ Parse JSON

// ✅ Serve static frontend files from 'public' folder
app.use(express.static('public'));
// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage for books
let books = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" }
];

// GET /books - fetch all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// POST /books - add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: "Title and author are required" });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id - update a book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  const { title, author } = req.body;

  book.title = title || book.title;
  book.author = author || book.author;

  res.status(200).json(book);
});

// DELETE /books/:id - delete a book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(b => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books.splice(bookIndex, 1);
  res.status(204).send(); // No content
});
app.get('/', (req, res) => {
  res.send('📚 Welcome to the Book API! Use /books to interact.');
});
  
// Start server

app.listen(port, () => {
  console.log(`📚 Book API server running at http://localhost:${port}`);
});
