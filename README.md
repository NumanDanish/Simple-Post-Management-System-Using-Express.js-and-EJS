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
✏️ Recent Update: PATCH Route for Content Update
A new feature was added to support updating only the content of an existing post without affecting the rest of its data. This was implemented using a PATCH request, which aligns with RESTful practices where partial updates are needed.

✅ What’s New:
Added a PATCH /posts/:id route that:

Locates the specific post using req.params.id

Updates only the content property using data from req.body

Sends back the updated post as a JSON response

🔧 Technical Concepts Introduced:
app.patch() method in Express.js

Handling req.body for partial updates

Use of method-override for supporting PATCH via HTML forms

RESTful architecture: supporting fine-grained updates with PATCH (vs. PUT for full updates)


Update: Delete Feature Added
In this update, a Delete functionality has been implemented to allow users to remove individual posts. A Delete button has been added next to the existing Details and Edit options for each post, all aligned in a single row for improved user experience and accessibility. The delete action is triggered via a POST request using the _method=DELETE convention, ensuring RESTful compliance in the routing logic. Additionally, styling was applied to the button to maintain a consistent look and feel with the existing UI components. This feature enhances post management capabilities and provides a complete CRUD interface.


## 🖼️ Screenshots
<img width="959" height="501" alt="edi" src="https://github.com/user-attachments/assets/8e371de9-f58f-471e-984f-c781bf4b6673" />
<img width="959" height="501" alt="seede" src="https://github.com/user-attachments/assets/96f78150-d242-40a3-a603-fdbf20ecbba6" />
<img width="943" height="318" alt="post1" src="https://github.com/user-attachments/assets/920fc302-6081-47fb-b3e7-5d6e159973cd" />
<img width="959" height="502" alt="cp" src="https://github.com/user-attachments/assets/dc5a949d-361b-45d5-bf49-15a80c116c79" />


