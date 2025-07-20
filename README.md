# Express.js Posts App

## 📌 Simple Post Management System

This is a basic CRUD-style web application built using **Express.js** and **EJS** templates.  
The purpose of this project is to learn how to build RESTful applications, render dynamic views, handle routes, and manage form data in Node.js.

---

## 🧠 Concepts Used

- **Express.js** for server-side routing
- **EJS (Embedded JavaScript)** for rendering HTML templates
- **UUID** for generating unique post IDs
- **Static file serving** (CSS files)
- **Dynamic routing with URL parameters**
- **HTML Forms & `req.body` parsing**
- **View organization using EJS templates**
- **Basic CRUD logic (Create, Read, Update)**

---

## ⚙️ How It Works

1. The server starts on port `8080`.
2. A hardcoded array of posts is used to simulate a database.
3. Routes implemented:
   - `/posts` → Displays all posts
   - `/posts/new` → Form to create a new post
   - `POST /posts` → Handles new post form submission
   - `/posts/:id` → Shows detailed view of a single post
   - `/posts/:id/edit` → Displays an edit form for a specific post
4. Data is passed from the server to EJS views for rendering on the frontend.
5. Styling is handled using static CSS files inside a `Public` folder.

---

## 🖼️ Screenshots

You can include screenshots here if you'd like. For example:

html
<!-- Example (remove the triple backticks if adding real images) -->
<img src="screenshots/homepage.png" alt="Homepage" width="600">
