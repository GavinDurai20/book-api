echo ^# Book API Project - 📘 Internship Task 3

This project was completed as part of **Web Development Internship – Task 3**.

The task was to build a basic **REST API** using **Node.js** and **Express.js** to manage a list of books. The books are stored in-memory (no database), and the API supports standard **CRUD operations**. A small frontend is included to test and interact with the API.

## ✅ Task Objectives

- Understand REST API structure and HTTP methods
- Learn Express.js routing and middleware
- Implement CRUD operations (Create, Read, Update, Delete)
- Handle JSON data and test endpoints

## 🧩 Technologies Used

- **Node.js**
- **Express.js**
- **CORS Middleware**

## 📁 Folder Structure

book-api/
├── index.js              # Main backend Express server
├── package.json
├── public/
│   └── index.html        # Frontend for testing the API
└── .gitignore

## 🚀 How to Run

1. Clone the repository:
   git clone https://github.com/GavinDurai20/book-api.git
   cd book-api

2. Install dependencies:
   npm install

3. Start the server:
   node index.js

4. Open your browser at:
   http://localhost:3000

## 📌 API Endpoints

| Method | Endpoint      | Description            |
|--------|---------------|------------------------|
| GET    | /books        | Get all books          |
| POST   | /books        | Add a new book         |
| PUT    | /books/:id    | Update a book by ID    |
| DELETE | /books/:id    | Delete a book by ID    |

## 🖥️ Frontend Features

The frontend interface is built using plain HTML + JavaScript and can:

- Display all books
- Add a new book
- Edit existing books
- Delete books

The frontend is served from the Express server at:
http://localhost:3000/

## 🎯 Outcome

✅ Successfully completed the internship **Task 3** by building a REST API with Express.js  
✅ Learned HTTP methods, Express routing, middleware, and JSON handling  
✅ Integrated the backend with a working frontend for real-time interaction


## 🙌 Thank You!
> README.md
